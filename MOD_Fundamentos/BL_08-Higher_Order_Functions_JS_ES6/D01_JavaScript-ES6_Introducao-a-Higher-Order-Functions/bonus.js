const mage = {
  healthPoints: 130,
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
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const demage = (strength) => {
damage = Math.floor(Math.random() * (strength - 15 +1)) + 15;
    if (damage == 15) {
      console.log(damage)
    }
  }
  
}

dragDemage(50);