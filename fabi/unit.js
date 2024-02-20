import { Fleet, Cargo } from "./fleetmanager.js";
export default class Unit {
  static attackenergy;
  static name;
  static steelcosts;
  static mikroshipkosten;
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
    leichterjaeger: 1,
    schwererjaeger: 2,
    bomber: 3,
    fregatte: 4,
    kleinertransporter: 5,
    miningdrohne: 6,

    grossertransporter: 7,
    zerstörer: 8,
    kreuzer: 9,
    flugdeckkreuzer: 10,
    kolonieschiff: 11,
    bergbauschiff: 12,

    schlachtschiff: 13,
    schlachtkreuzer: 14,
    trägerschiff: 15,

    flakgeschuetz: 16,
    artillerie: 17,
    ionenkanone: 18,
    lasergeschuetz: 19,
    railgun: 20,
    partikelkanone: 21,
    planetarerschildgenerator: 22
  }

  dmgversusleichterjaeger = 0;
  dmgversusschwererjaeger = 0;
  dmgversusbomber = 0;
  dmgversusfregatte = 0;
  dmgversuskleinertransporter = 0;
  dmgversusminingdrohne = 0;

  dmgversusgrossertransporter = 0;
  dmgversuszerstörer = 0;
  dmgversuskreuzer = 0;
  dmgversusflugdeckkreuzer = 0;
  dmgversuskolonieschiff = 0;
  dmgversusbergbauschiff = 0;

  dmgversusschlachtschiff = 0;
  dmgversusschlachtkreuzer = 0;
  dmgversusträgerschiff = 0;

  dmgversusflakgeschütz = 0;
  dmgversusartillerie = 0;
  dmgversusionenkanone = 0;
  dmgversuslasergeschütz = 0;
  dmgversusrailgun = 0;
  dmgversuspartikelkanone = 0;
  dmgversusplanetarerschildgenerator = 0;

  ///Rapidfire
  rapidfirevsleichterjaeger = 1;
  rapidfirevsschwererjaeger = 1;
  rapidfirevsbomber = 1;
  rapidfirevsfregatte = 1;
  rapidfirevskleinertransporter = 1;
  rapidfirevsminingdrohne = 1;

  rapidfirevsgroßertransporter = 1;
  rapidfirevszerstörer = 1;
  rapidfirevskreuzer = 1;
  rapidfirevsflugdeckkreuzer = 1;
  rapidfirevskolonieschiff = 1;
  rapidfirevsbergbauschiff = 1;

  rapidfirevsschlachtschiff = 1;
  rapidfirevsschlachtkreuzer = 1;
  rapidfirevsträgerschiff = 1;

  rapidfirevsflakgeschütz = 1;
  rapidfirevsartillerie = 1;
  rapidfirevsionenkanone = 1;
  rapidfirevslasergeschütz = 1;
  rapidfirevsrailgun = 1;
  rapidfirevspartikelkanone = 1;
  rapidfirevsplanetarerschildgenerator = 1;


  get(propertyName) {
    return this[propertyName];
  }

  set(propertyName, value) {
    this[propertyName] = value;
  }

  getsteelcost() {
    return this.steelcosts;
  }
  setsteelcost(value) {
    this.steelcosts = value;
  }
  getchemicalcosts() {
    return this.chemicalcost;
  }
  setchemicalcosts(value) {
    this.chemicalcost = value;
  }
  getenergycosts() {
    return this.energycosts;
  }
  setenergycosts(value) {
    this.energycosts = value;
  }
  getfirepower() {
    return this.firepower;
  }
  setfirepower(value) {
    this.firepower = value;
  }
  gethull() {
    return this.hull;
  }
  sethull(value) {
    this.hull = value;
  }
  getcshield() {
    return this.shield;
  }
  setshield(value) {
    this.shield = value;
  }
  getfuelconsume() {
    return this.fuelconsume;
  }
  setfuelconsume(value) {
    this.fuelconsume = value;
  }
  getammoconsume() {
    return this.ammoconsume;
  }
  setamoconsume(value) {
    this.ammoconsume = value;
  }
  gethangar() {
    return this.hangaring;
  }
  sethangar(value) {
    this.hangaring = value;
  }
  getcargo() {
    return this.cargo;
  }
  setcargo(value) {
    this.cargo = value;
  }
  getunittype() {
    return this.unittype;
  }
  setcunittype(value) {
    this.unittype = value;
  }
}
/*
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
*/




