import Character from './app';

class Magician extends Character {
  show() {
    console.log(this);
  }
}

const magician = new Magician('John', 'Magician', 10, 40);
magician.show();
