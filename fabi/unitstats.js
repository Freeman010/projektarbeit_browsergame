class UnitStats {
  constructor(
    stahlkosten,
    chemikalienkosten,
    energiekosten,
    feuerkraft,
    huelle,
    schild,
    geschwindigkeit,
    treibstoffverbrauch,
    munitionsverbrauch,
    frachtraum,
    hangarslots,
    angriffsmodifikatoren,
    verteidigungsmodifikatoren,
    mehrfachfeuer
  ) {
    this.stahlkosten = stahlkosten;
    this.chemikalienkosten = chemikalienkosten;
    this.energiekosten = energiekosten;
    this.feuerkraft = feuerkraft;
    this.huelle = huelle;
    this.schild = schild;
    this.geschwindigkeit = geschwindigkeit;
    this.treibstoffverbrauch = treibstoffverbrauch;
    this.munitionsverbrauch = munitionsverbrauch;
    this.frachtraum = frachtraum;
    this.hangarslots = hangarslots;
    this.angriffsmodifikatoren = angriffsmodifikatoren;
    this.verteidigungsmodifikatoren = verteidigungsmodifikatoren;
    this.mehrfachfeuer = mehrfachfeuer;
  }

  Get(propertyName) {
    return this[propertyName];
  }

  Set(propertyName, value) {
    this[propertyName] = value;
  }
}
module.exports = UnitStats;
