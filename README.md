
# Site web despre flori 
Țîru Claudia Andreea
grupa 1121
SIMPRE

## Link video
Pentru a putea urmari un scurt video in care sunt prezentate functionalitatile proiectului accesati: [https://youtu.be/wOuv9sJUXiQ]

## Link publicare
Aplicatia  a fost deployata si se poate accesa urmand [https://proiect-tiru-claudia-cc.vercel.app]

## Link github
Codul sursa poate fi accesat urmand [https://github.com/claudiaASE/proiect-tiru-claudia-cc]

## Introducere

Este o aplicatie web care utilizeaza 3 servicii cloud (MongoDb, Vercel, ChatGPT-OpenAI). 

Aceasta aplicatie are rolul de a oferi utilizatorilor posibilitatea sa citeasca informatii despre flori, sa stearga aceste informatii sau sa adauge noi informatii. 

## Descrierea problemei
Aplicația dezvoltată de tip SaaS este o platformă online care permite utilizatorilor să citească, adauge, șteargă și să converseze cu un florist despre flori. Această aplicație este dezvoltată pe o arhitectură bazată pe cloud computing, ceea ce înseamnă că toate datele și funcționalitățile sunt stocate și accesate prin intermediul internetului.

MongoDB este utilizat pentru a gestiona baza de date a aplicației. Această bază de date conține informații despre florile de pe platformă - numele și descrierea acestora. MongoDB este o bază de date NoSQL, ceea ce înseamnă că este optimizată pentru scalabilitate și performanță în medii distribuite, precum cloud-ul.

Vercel este folosit pentru a găzdui aplicația web. Vercel oferă o soluție de găzduire rapidă și scalabilă pentru aplicațiile web construite cu tehnologii moderne, cum ar fi React și Next.js. Acest serviciu de găzduire oferă un mediu de dezvoltare rapidă și un mod de a pune în aplicare actualizările în producție fără a fi nevoie să se preocupe de configurația și gestionarea infrastructurii.

ChatGPT este integrat în aplicație  pentru a oferi suport și asistență utilizatorilor. ChatGPT este un model de limbaj natural bazat pe inteligența artificială, care poate răspunde la întrebări și oferi soluții la problemele utilizatorilor. Acesta poate fi utilizat pentru a îmbunătăți experiența utilizatorului și pentru a reduce nevoia de a avea un serviciu de asistență clienți uman.

Astfel aplicația de cloud computing despre flori de tip SaaS oferă o soluție scalabilă, rapidă și inteligentă despre flori. Aceste tehnologii moderne permit platformei să fie rapidă și ușor de utilizat, în timp ce ChatGPT adaugă un nivel suplimentar de asistență personalizată și eficientă pentru utilizatori.

## Descriere API

OpenAI API este un API (Application Programming Interface) oferit de compania OpenAI, care oferă acces programatic la modelele lor avansate de inteligență artificială (IA). Acesta a fost lansat în octombrie 2020 și oferă unelte puternice de procesare a limbajului natural (NLP), generare de text, traducere și multe altele.

Utilizatorii pot accesa API-ul prin intermediul unui sistem de autentificare, care oferă acces la resursele și modelele OpenAI. API-ul este construit pe o arhitectură RESTful și oferă o gamă largă de funcționalități, inclusiv analiză de sentiment, generare de text, completarea cuvintelor, traducere și multe altele. Acesta poate fi utilizat pentru a dezvolta o varietate de aplicații, inclusiv chatbot-uri, asistenți virtuali, programe de analiză de date și multe altele.

OpenAI API este disponibil pentru o gamă largă de utilizatori, de la dezvoltatorii individuali la companii mari, care doresc să utilizeze modele de inteligență artificială avansate în propriile lor aplicații. De asemenea, OpenAI API este integrat cu platforme populare de dezvoltare, inclusiv Python și JavaScript, ceea ce face accesul la API ușor pentru dezvoltatori cu experiență în aceste limbaje de programare.

Pentru a utiliza OpenAI API, trebuie să ai o cheie de autentificare (API key) care să îți permită să faci solicitări către API-ul lor. Această cheie poate fi obținută prin crearea unui cont pe platforma OpenAI și alegerea unui plan de abonament adecvat.
 ```
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
```

  

 temperature: specifică cât de "creativ" va fi textul generat. Cu cât este mai mare temperatura, cu atât textul va fi mai neașteptat și mai creativ, dar cu atât există o șansă mai mare ca textul să fie incoerent sau să nu aibă sens. În aceasta aplicatie, temperatura este setată la 1.

max_tokens: specifică numărul maxim de cuvinte pe care textul generat îl poate conține. În codul dat, este setat la 100 de cuvinte pentru rolul florist si 60 de cuvinte pentru assistent.


## Flux de date
### Exemple request/response
În cadrul acestei aplicatii am implementat principalele requesturi  (GET, POST, DELETE) cât și un chat în care utilizatorul poate vorbi cu un AI despre flori și buchete. 
#### GET

Un exemplu de request este:
```
/api/records
```
Acesta va genera următorul răspuns sub formă de JSON:

```
{
    "data": [
        {
            "_id": "6450278edb055ea19349d667",
            "name": "Tulip",
            "about": "Tulips are native to Central Asia. Holland is still the largest producer of tulips."
        },
        {
            "_id": "6454fbbd7af6fe32c6877c6b",
            "name": "Snowdrop",
            "about": "Snowdrops were named after earrings not drops of snow. There are more than 2,500 varieties of snowdrop. They are symbolic of spring, purity and religion. Snowdrops are one of the first flowers to appear in the new year"
        },
        {
            "_id": "645502537d5511c9a37f5115",
            "name": "New Orchid",
            "about": "Orchids are one of the oldest family of flowering plants. The smallest orchid is the size of a dime. The vanilla bean comes from a species of Orchid."
        }
    ]
}
```
#### POST

Un exemplu de request post este:
```
/api/records 
```
iar body-ul trimis este:

```
{
    "name":"Calathea",
    "about":"Calathea plants are part of the family of plants known as Marantaceae, which is a species of flowering plants from tropical areas such as Africa. They are famous for their wide, green, colorful leaves. These wide leaves make them popular for areas of low light."
}
```
Acest request va genera un response de tip 200 dacă s-a finalizat cu succes
```
{
    "data":
        {
                "acknowledged":true,
                "insertedId":"6455266c1f2657274eba26bb"
        }
}
```

, si va salva noile date în baza de date, astfel că la un urmator request de tip get răspunsul nou va fi:
```
    {
    "data": [
        {
            "_id": "6450278edb055ea19349d667",
            "name": "Tulip",
            "about": "Tulips are native to Central Asia. Holland is still the largest producer of tulips."
        },
        {
            "_id": "6454fbbd7af6fe32c6877c6b",
            "name": "Snowdrop",
            "about": "Snowdrops were named after earrings not drops of snow. There are more than 2,500 varieties of snowdrop. They are symbolic of spring, purity and religion. Snowdrops are one of the first flowers to appear in the new year"
        },
        {
            "_id": "645502537d5511c9a37f5115",
            "name": "New Orchid",
            "about": "Orchids are one of the oldest family of flowering plants. The smallest orchid is the size of a dime. The vanilla bean comes from a species of Orchid."
        },
        {
            "_id": "6455266c1f2657274eba26bb",
            "name": "Calathea",
            "about": "Calathea plants are part of the family of plants known as Marantaceae, which is a species of flowering plants from tropical areas such as Africa. They are famous for their wide, green, colorful leaves. These wide leaves make them popular for areas of low light."
        }
    ]
}
```

Un alt exemplu de request POST este cel utilizat pentru chatGPT:

 ```
    /api/answer
 ```
cu următorul body:

```
    {
        "messages" : [
            {
                "role" : "user",
                "content" : "tell me about orchids"
            }
        ],
        "type" : "florist"
    }
```
 iar response-ul pentru acest request este:
 ```
    {
        "data" : {
            "message": {
                "role":"assistant",
                "content":"Orchids are beautiful, exotic flowers that come in a variety of colors, shapes, and sizes. They are among the most popular flowers in the world due to their unique beauty, long-lasting blooms, and vibrant colors.\n\nOrchids are known for their distinctive blooms, which often have large, colorful petals and a complex, intricate structure. They are available in a wide range of colors, from soft pastels to bright, bold hues, making them ideal for a variety of special occasions.\n\nIn"
            },
            "finish_reason":"length",
            "index":0
        }
    }
```
#### DELETE

Un exemplu de request delete este:
```
/api/records?id=6455266c1f2657274eba26bb
```
In acest caz, dând un id specific (aici cel pentru ultima floare salvată- Calathea), se va identifica în baza de date obiectul asociat și va fi șters; dacă ștergerea s-a realizat cu succes va primi un răspuns cu http status 200.
```
{
    "data": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```

### Autentificare și autorizare servicii utilizate
Printre serviciile utilizate se numără MongoDb, unde am dat drepturi de acces de către orice adresă IP și am creat un utilizator cu username și parolă. 
De asemenea, pentru a putea accesa chatGPT am creat un cont cu un API KEY. 
Toate aceste detalii sunt prezente atat în .env-ul proiectului (nu este încărcat pe GitHub din motive de securitate) cât și în Vercel în zona de Environment Variables.

## Capturi ecran aplicație
Cele trei ecrane ale aplicației dezvoltate sunt:
### Facts Flowers
![alt text](https://github.com/claudiaASE/proiect-tiru-claudia-cc/blob/main/images/all.png?raw=true)

Aici sunt  prezente datele despre toate florile adăugate și informațiile lor, tot aici se și pot șterge. 
### Insert Facts
![alt text](https://github.com/claudiaASE/proiect-tiru-claudia-cc/blob/main/images/add.png?raw=true)
Aici se pot adăuga informații noi. 
### Chat
![alt text](https://github.com/claudiaASE/proiect-tiru-claudia-cc/blob/main/images/chat.png?raw=true)
Aici utilizatorul poate conversa cu ChatGPT. 

## Descriere tehnologii cloud folosite

### MongoDB
MongoDB este un sistem popular de baze de date NoSQL orientat pe documente, care stochează datele în documente flexibile, de tip JSON. Spre deosebire de bazele de date relaționale tradiționale, MongoDB nu se bazează pe o schemă fixă și poate gestiona mai eficient datele nestructurate și semistructurate.

MongoDB utilizează un model de date bazat pe documente, în care datele sunt stocate în colecții, iar fiecare colecție conține documente. Fiecare document este un obiect de tip JSON, care poate avea o schemă dinamică, ceea ce înseamnă că se pot adăuga, modifica sau elimina câmpuri și tipuri de date fără a fi necesară modificarea schemei bazei de date.

### Vercel
Vercel este o platformă bazată pe cloud care oferă o modalitate perfectă de a dezvolta, implementa și gestiona aplicații web moderne. Oferă o soluție de la un capăt la altul pentru crearea și implementarea aplicațiilor web cu caracteristici precum găzduirea statică a site-urilor, funcții fără server și implementarea continuă.

Cu Vercel, dezvoltatorii își pot implementa rapid aplicațiile pe o rețea globală de servere, ceea ce duce la încărcări mai rapide ale paginilor și la o performanță mai bună pentru utilizatorii finali. Platforma este concepută pentru a susține cadre populare precum React, Next.js și Vue.js, precum și o serie de limbaje și instrumente de programare.

Vercel oferă, de asemenea, o varietate de instrumente și caracteristici pentru gestionarea implementării și scalării aplicațiilor web, inclusiv jurnale, măsurători și alerte în timp real. În plus, Vercel oferă o serie de integrări cu alte instrumente populare pentru dezvoltatori, cum ar fi GitHub, GitLab și Bitbucket, pentru ca procesul de implementare și gestionare să fie cât mai transparent posibil.

### ChatGPT-OpenAI
ChatGPT este un model lingvistic la scară largă creat de OpenAI, bazat pe arhitectura GPT (Generative Pre-trained Transformer). Este unul dintre cele mai avansate modele de inteligență artificială pentru sarcini de procesare a limbajului natural (NLP), cum ar fi generarea de texte, traducerea limbilor și răspunsul la întrebări.

ChatGPT este pre-antrenat pe un set masiv de date de texte, folosind o tehnică de învățare autosupravegheată numită pre-antrenare nesupravegheată. Acest lucru permite ChatGPT să înțeleagă contextul și nuanțele limbajului uman și să genereze răspunsuri asemănătoare cu cele umane la întrebările utilizatorilor.

Ca model lingvistic, ChatGPT poate fi utilizat pentru o gamă largă de sarcini NLP, inclusiv clasificarea textelor, traducerea limbilor, rezumarea și generarea de conversații. Acesta a fost utilizat pentru a crea chatbots, asistenți virtuali și alte aplicații care necesită procesarea limbajului natural.

OpenAI, compania din spatele ChatGPT, a dezvoltat și alte modele lingvistice, cum ar fi GPT-2 și GPT-3, care sunt chiar mai avansate și mai puternice decât ChatGPT. Aceste modele au fost utilizate într-o varietate de aplicații, inclusiv chatbots, traducere lingvistică și generare de conținut.


## Referințe

MongoDB: [https://www.mongodb.com]

Vercel: [https://vercel.com]

ChatGPT: [https://openai.com/blog/chatting-with-ai]