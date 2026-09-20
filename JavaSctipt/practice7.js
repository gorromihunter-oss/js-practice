let party = [
    {
        name: "Hero",
        health: 100,
        attack: 20,
        class: "Rogue"
    },
    {
        name: "Wizard",
        health: 80,
        attack: 25,
        class: "Wizard"
    }
];  
party.forEach(function(member) {
    console.log("Name: " + member.name);
    console.log("Health: " + member.health);
    console.log("Attack: " + member.attack);
    console.log("Class: " + member.class)
});
console.log("Party size: " + party.length);  // Display the number of members in the party
console.log(party);
party.forEach(function(member) {
    member.health -= 10;  // Decrease each member's health by 10
});
console.log("After taking damage:");
party.forEach(function(member) {
    console.log("Name: " + member.name + ", Health: " + member.health);
});