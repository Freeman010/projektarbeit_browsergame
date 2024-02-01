import Unit from './unit.js';
import Battlesystem from './battlesystem.js';

export default{
LeichterJaeger,
SchwererJaeger,
Bomber,
KleinerTransporter,
MiningDrohne,
Fregatte,
GrosserTransporter,
Zerstörer,
Kreuzer,
FlugDeckKreuzer,
KolonieSchiff,
BergBauSchiff,
SchlachtSchiff,
SchlachtKreuzer,
FlakGeschütz,
Artillerie,
IonenKanone,
LaserGeschütz,
Railgun,
PartikelKanone,
PlanetarerSchildGenerator

};

class LeichterJaeger extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class SchwererJaeger extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class Bomber extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class KleinerTransporter extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class MiningDrohne extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class Fregatte extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class GrosserTransporter extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class Zerstörer extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class Kreuzer extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class FlugDeckKreuzer extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class KolonieSchiff extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}  
class BergBauSchiff extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class SchlachtSchiff extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class SchlachtKreuzer extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class TrägerSchiff extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class FlakGeschütz extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class Artillerie extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class IonenKanone extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class LaserGeschütz extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class Railgun extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class PartikelKanone extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}
class PlanetarerSchildGenerator extends Unit {
  constructor() {
    super();
    this.steelcosts = 100;
    this.chemicalcost = 50;
    this.energycosts = 75;
    this.firepower = 120;
    this.hull = 150;
    this.shield = 100;
    this.speed = 200;
    this.fuelconsume = 25;
    this.ammoconsume = 50;
    this.hangaring = -1;
    this.cargo = 50;
    this.unittype = Unit.unittype.schwererjäger;
  }
}



const schwererJaegerInstance = new SchwererJaeger();
const leichterjägerInstance = new SchwererJaeger();


schwererJaegerInstance.steelcosts = 5000;
leichterjägerInstance.firepower = 9000;
const f = new Battlesystem();
f.attackunit(schwererJaegerInstance,leichterjägerInstance);

/*function printUnitType(instance,) {
  if(instance.unittype = 2) {}
}*/

/*7+
class schwererjaeger extends Unit()
{

    constructor() {
        this.set('speed', 100);
        this.set('firepower',100)
      }

      
}
const schwererjäger1 = new unit();
schwererjäger1.set('shield', 50);
console.log(schwererjäger1);
/*

/*
const einheit1 = new unitstats(10, 5, 8, 15, 20, 10, 30, 5, 3, 50, 1, [1.2, 0.8], [1.1, 0.7], false);



console.log(einheit1);
console.log(einheit2);
console.log(einheit3);
console.log(einheit4);*/


