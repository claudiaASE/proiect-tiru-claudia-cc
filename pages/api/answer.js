import { sendBadRequest, sendMethodNotAllowed, sendOk } from "@/js/utils/apiMethods";
import { openai } from "@/lib/openai";

const SYSTEM_PROMPTS = {
    SIMPLE_ASSISTANT: {
        MESSAGE: {
            'role': 'system',
            'content': 'You are a simple assistant. You respond with simple sentences.',
        },
        TEMPERATURE: 1,
        MAX_TOKENS: 50,
        TYPE: 'simple_assistant',
    },
    FLORIST: {
        MESSAGE: {
            'role': 'system',
            'content': 'Calling out for assistance from knowledgeable personnel with experience of arranging flowers professionally to construct beautiful bouquets which possess pleasing fragrances along with aesthetic appeal as well as staying intact for longer duration according to preferences; not just that but also suggest ideas regarding decorative options presenting modern designs while satisfying customer satisfaction at same time! Also add interesting details about those flowers',
        },
        TEMPERATURE: 1,
        MAX_TOKENS: 100,
        TYPE: 'florist',
    },
};

const ERRORS = {
    DATABASE_ERROR: {
        type: 'database_error',
        message: 'Error while processing the request.',
    },
    WRONG_CONVERSATION_TYPE: {
        type: 'wrong_conversation_type',
        message: 'The conversation type is not known.',
    },
    OPEN_AI_ERROR: {
        type: 'open_ai_error',
        message: 'Error while processing the request.',
    },
};

const chatCompletion = async (messagesArray, max_tokens, temperature) => {
    const rawResponse = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messagesArray,
        max_tokens: max_tokens,
        temperature: temperature,
    });

    return rawResponse?.data?.choices[0];
}

const converseChat = async (res, inputChat, useCase) => {
    try {
        const MAX_MEMORY = 3;
        let userMessagesArray = [];

        if (inputChat.length > MAX_MEMORY) {
            userMessagesArray = inputChat.slice(-MAX_MEMORY);
        }
        else {
            userMessagesArray = inputChat;
        }

        const messagesArray = [
            useCase.MESSAGE,
            ...userMessagesArray
        ];

        const response = await chatCompletion(messagesArray, useCase.MAX_TOKENS, useCase.TEMPERATURE);
        return sendOk(res, response);
    }
    catch (error) {
        console.error(error);
        return sendBadRequest(res, ERRORS.OPEN_AI_ERROR.type, ERRORS.OPEN_AI_ERROR.message);
    }
}

const converse = (res, messages, type) => {
    switch (type) {
        case SYSTEM_PROMPTS.SIMPLE_ASSISTANT.TYPE:
            return converseChat(res, messages, SYSTEM_PROMPTS.SIMPLE_ASSISTANT);
        case SYSTEM_PROMPTS.FLORIST.TYPE:
            return converseChat(res, messages, SYSTEM_PROMPTS.FLORIST);
        default:
            return sendBadRequest(res, 'wrong_conversation_type');
    }
}

export default async function handler(req, res) {
    const isAllowedMethod = req.method === 'POST';

    const {
        messages,
        type
    } = req.body;

    console.log('Incoming request: ', req.method, req.body);

    if (!isAllowedMethod) {
        return sendMethodNotAllowed()
    }
    else if (!messages) {
        return sendBadRequest(res, 'Missing input');
    }
    else if (!type) {
        return sendBadRequest(res, 'wrong_conversation_type');
    }

    try {
        return converse(res, messages, type);
    }
    catch (error) {
        console.error(error);
    }
}

