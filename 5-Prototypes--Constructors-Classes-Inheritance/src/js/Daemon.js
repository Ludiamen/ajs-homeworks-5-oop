import Character from './app';

class Daemon extends Character {
  show() {
    console.log(this);
  }
}

const daemon = new Daemon('John', 'Daemon', 10, 40);
daemon.show();
