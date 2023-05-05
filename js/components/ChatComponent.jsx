import React, { useState } from 'react';
import Link from "next/link";
import MessageBox from './MessageBox';

function ChatComponent(props) {
    const [chatMessages, setChatMessages] = useState([]);

    const filterChatHistory = chatHistory => {
        let filteredChatHistory = [];
        for (let i = 0; i < chatHistory.length; i++) {
            const currMessage = chatHistory[i];
            const nextMessage = chatHistory[i + 1];

            if (i === chatHistory.length - 1 || (currMessage.type !== 'error' && nextMessage?.type !== 'error' && currMessage.role !== nextMessage?.role)) {
                filteredChatHistory.push(currMessage);
            }
        }

        return filteredChatHistory;
    }

    const buildResponseMessageObject = response => {
        let responseMessageObject;

        responseMessageObject = response.data.message;

        return responseMessageObject;
    }

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            if (!e.target.value) {
                return;
            }

            const currentMessage = e.target.value;
            e.target.value = '';
            e.target.disabled = true;

            const currentMessageObject = {
                role: 'user',
                content: currentMessage,
            }

            setChatMessages(prevChatMessages => [...prevChatMessages, currentMessageObject]);
            const currentChatHistory = [...chatMessages, currentMessageObject];
            const filteredChatHistory = filterChatHistory(currentChatHistory);

            try {
                let response = await fetch('/api/answer', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        messages: filteredChatHistory,
                        type: 'florist',
                    }),
                    signal: AbortSignal.timeout(20000),
                });
                response = await response.json();

                e.target.disabled = false;
                e.target.focus();
                console.log(response);

                const responseMessageObject = buildResponseMessageObject(response);
                setChatMessages(prevChatMessages => [...prevChatMessages, responseMessageObject]);
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <section className={"bg-white"}>
            <div className={"container px-6 py-10 mx-auto"}>
                <div className={"w-full max-w-[1500px] mx-auto my-10"}>
                    <h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-blue-600"}>Chat with a florist</h1>
                    <p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-blue-600"}>Here you can have a discussion about arranging flowers with someone specialized and it will also give you interesting informations about them.</p>

                    <div className="flex justify-left mt-8">

                        <div className="left-0 w-1/2">
                            <Link href="/">
                                <button
                                    type="button"
                                    className="  focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                >
                                    See all flower fact
                                </button>
                            </Link>
                        </div>

                        <div className="right-0 w-1/2 ">
                            <Link href="/insert">
                                <button
                                    type="button"
                                    className="  focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                >
                                    Insert new fact
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={"border border-b-0 rounded-lg border-gray-300'"}>
                        <div className={'border-b text-center px-[20px] py-[10px]'}>
                            <span className={'text-md font-bold text-gray-900'}>
                                Florist chat
                            </span>
                        </div>
                        <MessageBox chatMessages={chatMessages} />
                    </div>
                    <input
                        id={'chat-input'}
                        type={'text'}
                        className="bg-gray-50 border border-gray-300 border-x-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                        placeholder="Type something..."
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </section>
    );


}

export default ChatComponent;

