export default class Unit {


  static steelcosts;
  static chemicalcost;
  static energycosts;
  static firepower;
  static hull;
  static shield;
  static speed;
  static fuelconsume;
  static ammoconsume;
  static hangaring // if negative the unit use hangarslots, if positive unit have hangarslots
  static cargo;
  static unittype;

  static unittype = {
    leichterjäger: 1,
    schwererjäger: 2,
    bomber: 3,
    fregatte: 4,
    kleinertransporter: 5,
    miningdrohne: 6,

    großertransporter: 7,
    zerstörer: 8,
    kreuzer: 9,
    flugdeckkreuzer: 0,
    kolonieschiff: 11,
    bergbauschiff: 12,

    schlachtschiff: 13,
    schlachtkreuzer: 14,
    trägerschiff: 15,

    flakgeschütz: 16,
    artillerie: 17,
    ionenkanone: 18,
    lasergeschütz: 19,
    railgun: 20,
    partikelkanone: 21,
    planetarerschildgenerator: 22
  }


get(propertyName) {
  return this[propertyName];
}

set(propertyName, value) {
  this[propertyName] = value;
}
}






