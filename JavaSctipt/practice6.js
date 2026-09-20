let player = {
name: "Hero",
health: 100,
class: "Rogue",
level: 1,
inventory: ["Sword", "Shield", "Potion"]
};
console.log(player.name);
console.log(player.health);
console.log(player.class);  
console.log(player.level);
console.log(player.inventory[0]);  // Accessing the first item in the inventory
player.health = 80;  // Update the player's health  
console.log(player.health);