import Character from '../class/Character';

test('Ошибка в name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow();
});

test('Ошибка в type', () => {
    expect(() => new Character('Alex', 'Bow')).toThrow();
});

test('Правильно создается объект', () => {
    const warior = new Character('Alex', 'Bowman');
    const correct = {
        attack: undefined, defence: undefined, health: 100, name: 'Alex', type: 'Bowman', level: 1,
    };

expect(warior).toEqual(correct);   
});
