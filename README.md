Applikationen är skriven i react vilket därför behövs för att smidigt kunna köra applikationen,
kan även hända att node.js behövs för installera vissa paket.

För att starta applikationen:  
Hämta ner projektet från git,  
Öppna mappen i en editor och gå till terminalen (se till att du är i rätt mapp/directory),  
Kör kommandot 'npm install' för att lägga till delar som saknas,  
Kör därefter kommandot 'npm start',  
Applicationen bör nu starta på localhost 3000.  

9-10h lades ner på caset, ungefärlig fördelning:  
1-2h Planering av struktur och repetition  
7h utveckling av applikationens funktionalitet  
1h Design i css  

Kort beskrivning:

I applikationen kan användaren skriva en "post" som sedan publiceras i en lista med andra posts.
Listan är sorterad efter posts id:n och blir därför kronologisk.
Klickar användaren på en "post" tas den vidare till postens egna sida där man kan läsa och uppdatera postens text.
På samma sida kan man också ta dela av och lägga till kommentarer.
Datan i applikationen behålls även om sidan uppdateras eller applikationen startas om,
detta eftersom det lagras i ett lokalt minne hos browsern(i ett JSON format).
Användaren har också möjlighet att "återställa" applikationen och ta bort alla trådar

Struktur: 
Det mesta av betydelse finns i mappen 'src'
App.js routar till de sidor som användaren kan tänkas gå mellan, det är sidan med listade posts, en posts egna sida 
och en sida med 404 error. Sidorna finns i "pages", de har egna funktioner men använder sig också av komponenterna
som finns i filen "components". Tillsist finns även en App.css i "styles" mappen som ger viss design åt applikationen. 

Övrigt:
Beslutet att inte koppla applikationen till en server togs för att utvecklingen skulle gå så
snabbt som möjligt i och med tidsbegränsningen. Skulle applikationen utvecklas vidare borde datalagringen och vissa
funktioner rimligtvis flyttas ner till en server kopplad till en JSON fil där datan hämtas och skrivs, en mall för en JSON fil finns redan i projektet.
Om ni vill se prov på mer serverhantering så bygger jag i så fall gärna vidare på det. 
