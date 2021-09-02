const mage = {
  healthPoints: 160,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 720,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDrag = (strength) => Math.floor(Math.random() * (strength - 15 +1)) + 15; 
const damageWarrior = (strength, weapon) => Math.floor(Math.random() * (strength - (weapon*strength) +1) +(weapon*strength));
const damageMage = (intelligence, mana) => {
  const obj = {
    damage: 0,
    lostedMana: 0,
  }
  if (mana < 15) {
    obj.damage = 'Não possui mana suficiente';
    obj.lostedMana = 0
  } else {
    obj.damage = Math.floor(Math.random() * (intelligence - (intelligence*2) +1) +(intelligence*2));
    obj.lostedMana = 15
  }
  return obj;
}

let y = battleMembers

const gameActions = {
  warriorTurn: (callback) => {
    const x = callback(warrior.strength, warrior.weaponDmg);
    warrior.damage = x;
    dragon.healthPoints -= x;
    if (dragon.healthPoints < 0) {
      dragon.healthPoints = 0;
    }
  },
  mageTurn: (callback) => {
    const x = callback(mage.intelligence, mage.mana);
    dragon.healthPoints -= x.damage;
    if (dragon.healthPoints < 0) {
      dragon.healthPoints = 0;
    }
    mage.damage = x.damage;
    mage.mana = x.lostedMana;
  },
  dragonTurn: (callback) => {
    const x = callback(dragon.strength);
    warrior.healthPoints -= x - (warrior.strength / 10);
    if (warrior.healthPoints < 0) {
      warrior.healthPoints = 0;
    }
    const rd = Math.ceil(Math.random() * 3)
      if (rd % 2 !== 0) {
      mage.healthPoints -= x;
      if (mage.healthPoints < 0) {
        mage.healthPoints = 0;
      }
    }
    dragon.damage = x;
  },
  afterturn: () => y
}

const turn = () => {
  gameActions.warriorTurn(damageWarrior);
  if (y.dragon.healthPoints === 0) {
    console.log(gameActions.afterturn());
    console.log('Vocês Venceram!!! GG!');
    return
  }
  gameActions.mageTurn(damageMage);
  if (y.dragon.healthPoints === 0) {
    console.log(gameActions.afterturn());
    console.log('Vocês Venceram!!! GG!');
    return
  }
  gameActions.dragonTurn(damageDrag);
  if (y.mage.healthPoints === 0 && y.warrior.healthPoints ===0) {
    console.log(gameActions.afterturn());
    console.log('Vocês perderam... Tente novamente!');
    return
  }
  if (y.dragon.healthPoints > 0 && y.warrior.healthPoints > 0 && y.mage.healthPoints > 0)
  console.log(gameActions.afterturn());
}


const endBattle = () => {
  while (y.dragon.healthPoints > 0 && (y.warrior.healthPoints > 0 || y.mage.healthPoints > 0)) {
    turn();
  }
}

endBattle();

