//1. Utgå ifrån array nedanför. Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?
//const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
//Svar: Maradona skrivs ut, eftersom index alltid börjar från 0.

//2. I samma array, lägg till namnet "Drogba" i slutet av arrayen med hjälp av push(). Vad är returvärdet av den metoden?
// const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
// names.push("Drogba");
// console.log(names); 
//Svar: Returvärde, lenght of the array. I detta fallet length 7.


//3.  Lägg nu till namnet "Figo" i börja av arrayen. Vilken metod använder du för att gära det och vad är returnvärdet av den metoden?
// const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo", "Drogba"];
// names.unshift("Figo");
// console.log(names);
//Svar Metod som används är unshift(). Returvärde är lenght of the array. I detta fallet length 8.

//4. Ta nu bort det sista namnen från array med pop(). Logga ut returvärdet av den metoden
// const names = ["Figo", "Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo", "Drogba"];
// names.pop(); 
// console.log(names);
//Svar: Returvärde Drogba vid console.log(names.pop()); 


//5. Vid det här laget så bör du ha motsvarande array nedan. Hur kan du flytta namnet "Ronaldo" från sluten av arrayen till början av arrayen? Visa i kod samt förklara varför du gör som du gör.
// const names = ["Figo", "Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
// names[0] = "Ronaldo"
// names[6] = "Figo" //Flyttade Figo till slutet av array
// console.log(names);
// Svar: Jag flyttade Ronaldo från slutet av array till början av array, genom att "flytta" Ronaldo till index 0.


//6. Vid det här laget hoppas jag att du märkt att de metoderna som du har använt påverkar ursprungs-arrayn, alltså den modifierar den befintliga arrayen. Detta kallas för att en metod är "destruktiv". Så även fast vi definierar arrayen med en const-variabel så tillåts vi ändå att modifiera arrayn. Vad kan detta bero på?
//Svar: Eftersom den sparas som referens och inte som värdet i variabeln.????


//7. Utgå från arrayen nedan. Använd metoden includes() för att kontrollera om "Messi" finns i arrayen. Vad blir resultatet, och vad innebär det?
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// if (players.includes("Messi")){
//     console.log("Messi exist in array");
// }else{
//     console.log("Messi doesn`t exist in array");
// }
//Svar: Messi finns inte med i arrayen.

//8. Kontrollera om "Zlatan" finns i "players"-arrayen med includes(). Om han finns, logga ut en bekräftande text, t.ex. "Zlatan är med i listan!" Annars loggar du ut "Zlatan är inte med i listan."
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// if (players.includes("Zlatan")){
//     console.log("Zlatan is in the list");
// }else{
//     console.log("Zlatan is not on the list");
// }

//9. Skriv ut indexet för "Maradona" i arrayen "players" med hjälp av indexOf(). Vad är resultatet och varför?
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const indexOfMaradona = players.indexOf("Maradona");
// console.log(indexOfMaradona);
//Svar: Resultat är 5, vilket innebär att Maradona ligger på index 5 i arrayen. 

//10. Använd indexOf() för att försöka hitta indexet för "Messi" i "players". Vad returnerar indexOf() när elementet inte finns i arrayen, och hur kan den informationen vara användbar?
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const indexOfMessi = players.indexOf("Messi");
// console.log(indexOfMessi);
//Svar: Returnera -1, Informationen kan vara användbar för att vet om elementen/item finns i listan/arrayen. När det inte finns i listan så returnera den en negativ värde.

//11. Kombinera alla namn i "players" till en sträng där varje namn är separerat med ett kommatecken och ett mellanslag (, ). Använd join() för att göra detta och logga resultatet.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const playersAsString = players.join(", ");
// console.log(playersAsString);

//12. Använd join() för att skapa en sträng av alla namn i "players", separerade med ett " - ". Vilket resultat får du?
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const playersAsString = players.join("-");
// console.log(playersAsString);
//Svar: Bindestreck mellan alla namnen (Zlatan-Beckham-Zidane-Ronaldo-Romario-Maradona)

//13. Använd splice() för att ta bort "Beckham" och "Zidane" från "players". Logga resultatet och beskriv hur splice() fungerar i detta fall.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// players.splice(1,2);
// console.log(players);
//Svar: splice() fungera i detta fallet, genom att den tar bort item/element i arrayen. I detta fallet har jag skrivit (1,2) i paremeter?, som innebär att jag vill börja från index 1, där Beckham finns, och därefter 2, för att jag vill ta bort två element/item. 

//14. Lägg till spelaren "Ronaldinho" på indexposition 2 i "players" med splice(). Vilken förändring sker i arrayen och vad returnerar splice()?
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// players.splice(2,0,"Ronaldinho");
// console.log(players);
//Svar: Förändring som har skett i arrayen är att Ronaldinho ligger i index 2. 

//15. Kombinera indexOf() och splice() för att ta bort "Ronaldo" från arrayen, oavsett var i listan han befinner sig.
// const players = ["Zlatan", "Beckham", "Ronaldinho", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const indexOfRonaldo = players.indexOf("Ronaldo");
// console.log(indexOfRonaldo); //4 - Ronaldo finns på index 4.

// players.splice(4,1); //Ta bort Ronaldo
// console.log(players);

//16. Använd slice() för att skapa en ny array från "players" som innehåller de tre första spelarna. Logga ut den nya arrayen och förklara varför slice() inte påverkar den ursprungliga arrayen.
// const players = ["Zlatan", "Beckham", "Ronaldinho", "Zidane", "Romario", "Maradona"];
// const newListPlayers = players.slice(0,3);
// console.log(newListPlayers);
//Svar: slice() påverka inte den ursprungliga arrayen, eftersom slice() returns a copy of a specified section. 

//17. Skapa en ny array med slice() som innehåller alla spelare från index 2 och framåt i "players". Vad innehåller den nya arrayen, och vad blir kvar i "players"?
// const players = ["Zlatan", "Beckham", "Ronaldinho", "Zidane", "Romario", "Maradona"];
// const newPlayers = players.slice(2);
// console.log(newPlayers);
//Svar: Den nya arrayen innehåller spelare från index 2 och framåt i listan. Dvs. ['Ronaldinho', 'Zidane', 'Romario', 'Maradona']

//18. Använd metoden with() för att ersätta spelaren på indexposition 1 i "players" med "Mbappé". Vad returnerar with()-metoden och påverkas den ursprungliga arrayen?
// const players = ["Zlatan", "Beckham", "Ronaldinho", "Zidane", "Romario", "Maradona"];
// const listPlayers = players.with(1,"Mbappe");
// console.log(listPlayers);
//Svar: with() metoden uppdaterar ett specificerat arrayelement. Den påverka ej den orginala arrayen. 

// Loops

//19. Utgå från arrayen nedan. Skriv en for-loop som skriver ut varje tal i arrayen.
// const numbers = [5, 8, 12, 20, 3];

// for (let i = 0; i < 5; i++) {
//   console.log(numbers[i]);
// }
// console.log("The loop is finish");

//20. Använd en for-loop för att summera alla tal i arrayen numbers ovan. Logga ut summan efter att loopen har körts klart.
// const numbers = [5, 8, 12, 20, 3];
// let sum = 0; 

// for (let i = 0; i < 5; i++) {
//     sum += numbers[i];
//   }
//   console.log("summan: " + sum);

//21. Skriv en for-loop som letar efter det största talet i numbers. Logga det största värdet.
// const numbers = [5, 8, 12, 20, 3];
// let largestNumber = [0];

// for (let i = 0; i < 5; i++) {
//     if (numbers[i] > largestNumber){
//         largestNumber = numbers[i];
//     }
// }
// console.log(largestNumber + " is the largest number");

//22. Skapa en ny array som heter doubledNumbers. Använd en for-loop för att fylla doubledNumbers med varje tal i numbers multiplicerat med 2.
// const numbers = [5, 8, 12, 20, 3];
// let doubledNumbers;

// for (let i = 0; i < 5; i++) {
//     doubledNumbers = numbers[i]*2;
//     console.log(doubledNumbers);
// }

//23. Använd en for-loop för att räkna ut medelvärdet av talen i numbers. Logga ut medelvärdet.
// const numbers = [5, 8, 12, 20, 3];
// let sum = 0; 
// let averageValue;

// for (let i = 0; i < 5; i++) {
//     sum += numbers[i]
//     averageValue = (sum/numbers.length);
//     } 
//     console.log(averageValue);

//24. Skriv en for-loop som hittar och loggar ut det minsta talet i numbers.
// const numbers = [5, 8, 12, 20, 3];
// let smallestNumber = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallestNumber){
//         smallestNumber = numbers[i];
//     }
// }
// console.log(smallestNumber + " is the smallest number");


//25. Skapa en ny array som heter positiveNumbers och fyll den med endast de positiva talen från arrayen nedan. Använd en for-loop och en if-sats.
// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// const positiveNumbers = []; // Skapa en tom array

// for (let i = 0; i < mixedNumbers.length; i++){ // Loopa igenom mixed array
//     if (mixedNumbers[i] > 0 ){ // Jämför om värdet vi itererar över är större än 0.
//         positiveNumbers.push(mixedNumbers [i]); // Om sant, pusha på det värdet på positiveNumbers-arrayen
//     }
// }
// console.log(positiveNumbers); // Logga ut positiveNumbers-array


//26. Utgå från arrayen mixedNumbers nedan. Skriv en for-loop utan att använda index, där du loggar varje positivt tal.
// const mixedNumbers = [3, -5, 12, -1, 8, -6];

// for (const number of mixedNumbers){
//     if (number > 0){
//     console.log(number);
//     }
// }

//27. Använd en while-loop för att logga alla tal i arrayen numbers från och med index 0. Avbryt loopen om talet är större än 10.
// const numbers = [5, 8, 12, 20, 3];
// let index = 0;
// let sum = 0;

// while (sum < 10) { 
//     console.log(numbers[index]);
//     sum += numbers[index];
//     index++;
    
//     if (sum > 10){
//         break;
//     }
// }
// console.log("Summan är nu större än 10: " + sum);

//28. Utgå från arrayen mixedNumbers ovan. Använd en while-loop för att räkna hur många negativa tal det finns i arrayen. Logga antalet.
const mixedNumbers = [3, -5, 12, -1, 8, -6];
let index = 0;
let sum = 0;

while (index < mixedNumbers.length){
    if (mixedNumbers[index] < 0) {
        sum ++;
        index ++;
    }  
    console.log("antal negativ tal i arrayen: " + sum);
}


//29. Skapa en array words med några ord i den, (exempel nedan). Använd en for-loop för att logga varje ord tillsammans med dess längd (antal bokstäver).
// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
// for (const word of words){
//     const numberOfCharacters = word.length;
//     console.log(`Word ${word}. It has ${numberOfCaracters} characters`)
// }


//30. Använd words-arrayen ovan och en for-loop för att bygga en ny sträng som består av de första bokstäverna i varje ord. Logga ut den nya strängen.
// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
// let firstLetters = ""; 

// for (let i = 0; i < words.length; i++) {
//     firstLetters += words[i][0]; 
// }
// console.log(firstLetters); 


//31. Skriv en while-loop som itererar genom arrayen numbers och loggar varje tal tills summan av de loggade talen överstiger 25.
// const numbers = [5, 8, 12, 20, 3];
// let sum = 0;
// let index = 0;

// while (sum < 25){
//     console.log(numbers[index]);
//     sum += numbers[index];
//     index++;
// }
// console.log("Summan är inte längre mindre än 25: " + sum);


//32. Använd en for-loop utan index för att summera alla värden i arrayen mixedNumbers. Logga ut summan.
// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// let sum = 0;

// for (const number of mixedNumbers){
//   sum += number;
// }
// console.log(`summan av alla värden är: ${sum}`)


//33. Skapa en array temperatures (exempel nedan) med några temperaturer i Celsius. Använd en for-loop för att hitta den högsta temperaturen. Därefter, logga både högsta temperaturen och dess index i arrayen.
// const temperatures = [15, 22, 19, 30, 28, 18, 25];
// let higestTemperature = temperatures[0];

// for (let i = 0; i < temperatures.length; i++){
//   if (temperatures[i] > higestTemperature){
//     higestTemperature = temperatures[i];  
//   }
// }
// const indexOfHighestTemperature = temperatures.indexOf(higestTemperature);
// console.log(`The higest temperature is ${higestTemperature} and is on index ${indexOfHighestTemperature}`)

//34. Använd en for-loop för att räkna antalet ord i words-arrayen som innehåller fler än fem bokstäver.
// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
// let count = 0; 

// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 5) { 
//         count++; 
//     }
// }
// console.log(`Antal ord som har fler än fem bokstäver: ${count}`); 

//35. Skriv en while-loop som räknar upp talen från numbers-arrayen ovan tills ett udda tal hittas. Avbryt loopen vid första udda talet och logga resultatet.
// const numbers = [5, 8, 12, 20, 3];

