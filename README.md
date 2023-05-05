# Introducere

Acest proiect a fost realizat de Țîru Claudia Andreea, grupa 1121, SIMPRE. 
Este o aplicatie web care utilizeaza 3 servicii cloud (MongoDb, Vercel, ChatGPT-OpenAI). 

In cadrul acestei aplicatii am implementat principalele requesturi pentru baza de date (GET, POST, DELETE) cat si un chat in care utilizatorul poate vorbi cu un AI despre flori si buchete. 

Aceasta aplicatie are rolul de a oferi utilizatorilor posibilitatea sa citeasca informatii despre flori, sa stearga aceste informatii sau sa adauge noi informatii. 

Ea a fost deployata si se poate accesa urmand [https://proiect-tiru-claudia-cx04arheg-claudiaase.vercel.app/]
De asemenea, pentru a putea urmari un scurt video in care sunt prezentate functionalitatile proiectului accesati: [https://youtu.be/wOuv9sJUXiQ]

# Descriere tehnologii cloud folosite

## MongoDB
MongoDB este un sistem popular de baze de date NoSQL orientat pe documente, care stochează datele în documente flexibile, de tip JSON. Spre deosebire de bazele de date relaționale tradiționale, MongoDB nu se bazează pe o schemă fixă și poate gestiona mai eficient datele nestructurate și semistructurate.

MongoDB utilizează un model de date bazat pe documente, în care datele sunt stocate în colecții, iar fiecare colecție conține documente. Fiecare document este un obiect de tip JSON, care poate avea o schemă dinamică, ceea ce înseamnă că se pot adăuga, modifica sau elimina câmpuri și tipuri de date fără a fi necesară modificarea schemei bazei de date.

## Vercel
Vercel este o platformă bazată pe cloud care oferă o modalitate perfectă de a dezvolta, implementa și gestiona aplicații web moderne. Oferă o soluție de la un capăt la altul pentru crearea și implementarea aplicațiilor web cu caracteristici precum găzduirea statică a site-urilor, funcții fără server și implementarea continuă.

Cu Vercel, dezvoltatorii își pot implementa rapid aplicațiile pe o rețea globală de servere, ceea ce duce la încărcări mai rapide ale paginilor și la o performanță mai bună pentru utilizatorii finali. Platforma este concepută pentru a susține cadre populare precum React, Next.js și Vue.js, precum și o serie de limbaje și instrumente de programare.

Vercel oferă, de asemenea, o varietate de instrumente și caracteristici pentru gestionarea implementării și scalării aplicațiilor web, inclusiv jurnale, măsurători și alerte în timp real. În plus, Vercel oferă o serie de integrări cu alte instrumente populare pentru dezvoltatori, cum ar fi GitHub, GitLab și Bitbucket, pentru ca procesul de implementare și gestionare să fie cât mai transparent posibil.
## ChatGPT-OpenAI
ChatGPT este un model lingvistic la scară largă creat de OpenAI, bazat pe arhitectura GPT (Generative Pre-trained Transformer). Este unul dintre cele mai avansate modele de inteligență artificială pentru sarcini de procesare a limbajului natural (NLP), cum ar fi generarea de texte, traducerea limbilor și răspunsul la întrebări.

ChatGPT este pre-antrenat pe un set masiv de date de texte, folosind o tehnică de învățare autosupravegheată numită pre-antrenare nesupravegheată. Acest lucru permite ChatGPT să înțeleagă contextul și nuanțele limbajului uman și să genereze răspunsuri asemănătoare cu cele umane la întrebările utilizatorilor.

Ca model lingvistic, ChatGPT poate fi utilizat pentru o gamă largă de sarcini NLP, inclusiv clasificarea textelor, traducerea limbilor, rezumarea și generarea de conversații. Acesta a fost utilizat pentru a crea chatbots, asistenți virtuali și alte aplicații care necesită procesarea limbajului natural.

OpenAI, compania din spatele ChatGPT, a dezvoltat și alte modele lingvistice, cum ar fi GPT-2 și GPT-3, care sunt chiar mai avansate și mai puternice decât ChatGPT. Aceste modele au fost utilizate într-o varietate de aplicații, inclusiv chatbots, traducere lingvistică și generare de conținut.
# Capturi ecran aplicație
Cele trei ecrane ale aplicatiei dezvoltate sunt:
## Facts Flowers
![Screenshot](/images/all.png)
Aici sunt  prezente datele despre toate florile adaugate si informatiile lor, tot aici se si poate sterge. 
## Insert Facts
![Screenshot](/images/add.png)
Aici se pot adauga informatii noi. 
## Chat
![Screenshot](/images/chat.png)
Aici utilizatorul poate conversa cu ChatGPT. 
