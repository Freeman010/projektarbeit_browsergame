import Unit from "./unit.js";

class Fleet {
    constructor(fleetarray, loadedcargo) {
        this.fleetarray = fleetarray;
        this.fleetcargo = new Cargo();
        this.fleetcargo.loadcargo(loadedcargo);
        fleetarray.forEach(element => {
            if (element instanceof Unit) {
                this.maxcargo += element.cargo;
                this.fleethangar += element.hangaring;
                this.fleetfueleconsume += element.fuelconsume;
                this.fleetammoconsume += element.ammoconsume
            }
        });
    }
    static fleetarray;
    static fleetcargo;
    static maxcargo;
    static fleethangar;
    static fleetfueleconsume;
    static fleetammoconsume;

    resetenergy() {
        this.fleetarray.forEach(element => {
            element.attackenergy = 100;
        });
    }
}
class Cargo {
    constructor() {
        this.totalcargo = 0;
        this.ore = 0;
        this.semiconductor = 0;
        this.chemicals = 0;
        this.scrap = 0;
        this.energy = 0;
        this.steel = 0;
        this.fuel = 0;
        this.ammo = 0;
        this.microchips = 0;
        this.hangaring = 0;
    }
    static totalcargo = 0;
    static ore = 0;
    static semiconductor = 0;
    static chemicals = 0;
    static scrap = 0;
    static energy = 0;
    static steel = 0;
    static fuel = 0;
    static ammo = 0;
    static microchips = 0;

    static hangaring = 0;



    loadcargo(loadingcargo) {
        this.ore = loadingcargo.ore;
        this.semiconductor = loadingcargo.semiconductor;
        this.chemicals = loadingcargo.chemicals;
        this.scrap = loadingcargo.scrap;
        this.energy = loadingcargo.energy;
        this.steel = loadingcargo.steel;
        this.fuel = loadingcargo.fuel;
        this.ammo = loadingcargo.ammo;
        this.microchips = loadingcargo.microchips;

    }

}
export {
    Fleet,
    Cargo
};