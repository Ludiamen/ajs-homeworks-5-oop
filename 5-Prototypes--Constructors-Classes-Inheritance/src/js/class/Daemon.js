import Character from './Character';

class Daemon extends Character {
  constructor(name) {
      super(name, 'Daemon');
      this.attack = 10;
      this.defence = 40;
  }
}

const daemon = new Daemon('John', 'Daemon', 10, 40);
daemon.show();
