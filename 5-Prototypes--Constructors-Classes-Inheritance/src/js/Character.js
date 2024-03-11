class Character {
  constructor(name, type) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
          throw new Error('Invalid name. Name must be a string with length between 2 and 10 characters.');
      }
      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!validTypes.includes(type)) {
          throw new Error('Invalid type. Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
      }

      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.defence = 0;
  }

  levelUp() {
      if (this.health === 0) {
          throw new Error("Cannot level up a deceased character.");
      }

      this.level += 1;
      this.attack += Math.floor(this.attack * 0.2);
      this.defence += Math.floor(this.defence * 0.2);
      this.health = Math.min(this.health, 100); // Ensure health doesn't exceed 100
  }

  damage(points) {
      if (this.health === 0) {
          throw new Error("Cannot damage a deceased character.");
      }

      const damageTaken = points * (1 - this.defence / 100);
      this.health = Math.max(this.health - damageTaken, 0); // Ensure health doesn't go negative
  }
}

// Example usage:
const myCharacter = new Character('Alice', 'Bowman');
console.log(myCharacter.health); // 100
myCharacter.damage(30);
console.log(myCharacter.health); // 85
myCharacter.levelUp();
console.log(myCharacter.level); // 2
console.log(myCharacter.attack); // 30 (20% increase from initial 25)
console.log(myCharacter.defence); // 30 (20% increase from initial 25)