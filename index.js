//1. Utgå ifrån array nedanför. Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?
//const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
//Svar: Maradona skrivs ut, eftersom index alltid börjar från index 0.

//2. I samma array, lägg till namnet "Drogba" i slutet av arrayen med hjälp av push(). Vad är returvärdet av den metoden?
// const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
// names.push("Drogba");
// console.log(names); 


//3.  Lägg nu till namnet "Figo" i börja av arrayen. Vilken metod använder du för att gära det och vad är returnvärdet av den metoden?
// const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo", "Drogba"];
// names.unshift("Figo");
// console.log(names);
//Svar Metod som används är unshift(). 

//4. Ta nu bort det sista namnen från array med pop(). Logga ut returvärdet av den metoden
// const names = ["Figo", "Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo", "Drogba"];
// names.pop(); 
// console.log(names);


//5. Vid det här laget så bör du ha motsvarande array nedan. Hur kan du flytta namnet "Ronaldo" från sluten av arrayen till början av arrayen? Visa i kod samt förklara varför du gör som du gör.
const names = ["Figo", "Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
names[0] = "Ronaldo"
names[6] = "Figo" //Flyttade Figo till slutet av array
console.log(names);
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
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
players.splice(2,0,"Ronaldinho");
console.log(players);
//Svar: Förändring som har skett i arrayen är att Ronaldinho ligger i index 2. 