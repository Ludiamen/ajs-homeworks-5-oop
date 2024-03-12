import Swordsman from '../class/Swordsman';

test('Правильно создается объект', () => {
    const swordsman = new Swordsman('Swordsman');
    const correct = {
        attack: 25,
        defence: 25, 
        health: 100,
        level: 1, 
        name: 'Swordsman', 
        type: 'Swordsman', 
        
    };

expect(swordsman).toEqual(correct);   
});
