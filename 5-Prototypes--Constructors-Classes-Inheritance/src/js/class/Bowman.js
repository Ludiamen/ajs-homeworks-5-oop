import Character from './Character'

class Bowman extends Character {
  constructor(name) {
      super(name, 'Bowman');
      this.attack = 25;
      this.defence = 25;
  }
}

const daemon = new Bowman('John', 'Bowman', 10, 40);
daemon.show();
      