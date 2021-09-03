const mage = {
  healthPoints: 160,
  intelligence: 45,
  mana: 125,
  damage: 000,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: 000,
};

const dragon = {
  healthPoints: 720,
  strength: 50,
  damage: 000,
};

const battleMembers = { mage, warrior, dragon };

const damageDrag = (strength) => Math.floor(Math.random() * (strength - 15 +1)) + 15; 
const damageWarrior = (strength, weapon) => Math.floor(Math.random() * (strength - (weapon*strength) +1) +(weapon*strength));
const damageMage = (intelligence) => {
  const obj = {
    damage: 0,
    lostedMana: 0,
  }
  if (mage.mana < 15) {
    obj.damage = 'Não possui mana suficiente';
    obj.lostedMana = 0
  } else {
    obj.damage = Math.floor(Math.random() * (intelligence - (intelligence*2) +1) +(intelligence*2));
    obj.lostedMana = 15
  }
  return obj;
}

let y = battleMembers
const rd = () => Math.ceil(Math.random() * 3);
let number = 0;
let getDamage = 0;
let mageDie = 0;
let warriorDie = 0; 

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
    const x = callback(mage.intelligence);
    dragon.healthPoints -= x.damage;
    if (dragon.healthPoints < 0) {
      dragon.healthPoints = 0;
    }
    mage.damage = x.damage;
    mage.mana -= x.lostedMana;
  },
  dragonTurn: (callback) => {
    const x = callback(dragon.strength);
    getDamage = x - Math.floor(Math.random() * (warrior.strength / 6) +1);
    warrior.healthPoints -= getDamage;
    if (warrior.healthPoints < 0) {
      warrior.healthPoints = 0;
      warriorDie += 1;
    }
    number = rd();
      if (number % 2 !== 0) {
      mage.healthPoints -= x;
      if (mage.healthPoints < 0) {
        mage.healthPoints = 0;
      }
    }
    if(mage.healthPoints === 0) {
      mageDie += 1;
    }
    dragon.damage = x;
  },
  
  afterturn: () => {
    number = 0;
    return y
  }
}

const turn = () => {
  if (y.warrior.healthPoints > 0) {
    gameActions.warriorTurn(damageWarrior);
    console.log(`>>>>>>>>>>Warrior deu ${y.warrior.damage} de dano em Dragon`);
    if (y.dragon.healthPoints === 0) {
      console.log('Dragon Morreu!')
      console.table(gameActions.afterturn());
      console.log('Vocês Venceram!!! GG!');
      return
    }
    console.log(`Dragon HP: ${gameActions.afterturn().dragon.healthPoints}`);
  }
  if (y.mage.healthPoints > 0) {
    gameActions.mageTurn(damageMage);
    console.log(`>>>>>>>>>>Mage deu ${y.mage.damage} de dano em Dragon e gastou 15 de mana`);
    if (y.dragon.healthPoints === 0) {
      console.log('Dragon Morreu!')
      console.table(gameActions.afterturn());
      console.log('Vocês Venceram!!! GG!');
      return
    }
    console.log(`Dragon HP: ${gameActions.afterturn().dragon.healthPoints}`);
    console.log(`Mage Mana: ${gameActions.afterturn().mage.mana}`);
  }
  if (y.dragon.healthPoints > 0) {
    gameActions.dragonTurn(damageDrag);
    console.log(`>>>>>>>>>>Dragon deu ${y.dragon.damage} de dano em Warrior e Mage`);
    console.log(`>>>>>>>>>>Warrior defendeu ${y.dragon.damage - getDamage} do dano recebido, sofrendo um dano de ${getDamage}`);
    getDamage = 0;
    if (y.mage.healthPoints > 0) {
      if (number % 2 === 0) {
        console.log('>>>>>>>>>>Mage consegue desviar do Ataque');
      }
    }
    console.log(`Warrior HP: ${gameActions.afterturn().warrior.healthPoints}`);
    console.log(`Mage HP: ${gameActions.afterturn().mage.healthPoints}`);
    if (warriorDie === 1) {
      console.log('Warrior Bigodou! F')
    }
    if (mageDie === 1) {
      console.log('Mage Bigodou! F')
    }

    if (y.mage.healthPoints === 0 && y.warrior.healthPoints ===0) {
      console.table(gameActions.afterturn());
      console.log('Vocês perderam... Tente novamente!');
      return
    }
  }
  if (y.dragon.healthPoints > 0 && y.warrior.healthPoints > 0 && y.mage.healthPoints > 0)
  console.log('FIM DO TURNO')
  console.table(gameActions.afterturn());
}


const endBattle = () => {
  console.table(y)
  while (y.dragon.healthPoints > 0 && (y.warrior.healthPoints > 0 || y.mage.healthPoints > 0)) {
    turn();
  }
}

endBattle();
