import Character from './Character';

class Magician extends Character {
  constructor(name) {
      super(name, 'Magician');
      this.attack = 10;
      this.defence = 40;
  }
}

const magician = new Magician('John', 'Magician', 10, 40);
magician.show();
