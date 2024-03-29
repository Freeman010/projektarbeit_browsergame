import Unit from './unit.js';
import unitdata from './unitdata.js';
import { Fleet, Cargo } from "./fleetmanager.js";
export default class Battlesystem {
    constructor() {

    }
    searchtarget(defenderlist) {
        if (Array.isArray(defenderlist)) {
            if (defenderlist.length > 0) {
                let targetnumber = Math.floor(Math.random() * defenderlist.length);
                return defenderlist[targetnumber];
            }

        }
    }
    handlefight(myunit, defenderlist, target, dmgversus, rapidfirevs) {

        console.log(myunit.name + " greift " + target.name + " an");
        if (myunit instanceof Unit && target instanceof Unit) {
            if (rapidfirevs != 1) {
                while (myunit.attackenergy >= 0) {
                    console.log(myunit.name + " hat rapidfire von " + rapidfirevs + " gegen " + target.name);
                    console.log("der " + target.name + " hat aktuell eine hülle von " + target.hull);
                    console.log(myunit.name + " feuert mit einer feuerkraft von ", myunit.firepower + dmgversus, "auf den ", target.name);
                    target.shield = target.shield - myunit.firepower + dmgversus;

                    if (target.shield <= 0) {
                        target.hull += target.shield;
                        target.shield = 0;
                        console.log("angreifer " + myunit.name, "hat den schild durchbrochen");

                        if (target.hull <= 0) {


                            console.log(target.name + " wurde zerstört");
                            defenderlist.splice(defenderlist.indexOf(target), 1);
                            break;
                        }
                        console.log(target.name + " hat noch " + target.hull + " hüllenpunkte bevor er zerstört wird");
                    }
                    else {
                        console.log(target.name + " hat noch " + target.shield + " schildpunkte bevor der schild bricht");
                    }
                    myunit.attackenergy = myunit.attackenergy - 100 / rapidfirevs;
                    if (myunit.attackenergy <= 0) { break; }
                }
            }
            else {
                target.shield = target.shield - myunit.firepower + dmgversus;
                console.log(myunit.name + " feuert mit einer feuerkraft von ", myunit.firepower + dmgversus, " auf den ", target.name);
                if (target.shield <= 0) {
                    target.hull = target.hull + target.shield;
                    target.shield = 0;
                    console.log(target.shield + "schild");
                    console.log(target.hull + " hülle")
                    if (target.hull <= 0) {
                        console.log(target.name + " wurde zerstört")
                        defenderlist.splice(defenderlist.indexOf(target), 1);

                    }
                    else {
                        console.log(target.name + "hat noch " + target.hull + " hüllenpunkte bevor er zerstört wird");
                    }
                }
                else {
                    console.log(target.name + "hat noch " + target.shield + " schildpunkte bevor der schild bricht");
                }


                myunit.attackenergy = myunit.attackenergy - 100 / rapidfirevs;
            }
        }
    }
    attackunit(myunit, defenderlist) {

        console.log("start von attackunit");
        if (myunit instanceof Unit && Array.isArray(defenderlist)) {
            console.log("attack unit nach dem ersten if");
            while (myunit.attackenergy >= 0) {
                if (defenderlist.length <= 0) {
                    console.log(defenderlist.length + " länge der defenderliste")
                    break;
                }
                if (myunit.attackenergy <= 0) {
                    console.log(myunit.attackenergy + " attackenergy");
                    break;
                }
                console.log("in der while nach den 2 ifs");
                let target = this.searchtarget(defenderlist)
                //console.log(target.unittype);
                //console.log(myunit.unittype);
                //console.log(defenderlist);
                switch (target.unittype) {

                    case Unit.unittype.leichterjaeger: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusleichterjaeger, myunit.rapidfirevsleichterjaeger);
                        break;
                    }
                    case Unit.unittype.schwererjaeger: {

                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusschwererjaeger, myunit.rapidfirevsschwererjaeger);
                        break;
                    }
                    case Unit.unittype.bomber: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusbomber, myunit.rapidfirevsbomber);
                        break;
                    }
                    case Unit.unittype.fregatte: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusfregatte, myunit.rapidfirevsfregatte);
                        break;
                    }
                    case Unit.unittype.kleinertransporter: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusartillerie, dmgversuskleinertransporter, myunit.rapidfirevskleinertransporter);
                        break;
                    }
                    case Unit.unittype.miningdrohne: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusminingdrohne, myunit.rapidfirevsminingdrohne);
                        break;
                    }
                    case Unit.unittype.grossertransporter: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusgrossertransporter, myunit.rapidfirevsschwererjaeger);
                        break;
                    }
                    case Unit.unittype.zerstoerer: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversuszerstörer, myunit.rapidfirevszerstörer);
                        break;
                    }
                    case Unit.unittype.kreuzer: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversuskreuzer, myunit.rapidfirevskreuzer);
                        break;
                    }
                    case Unit.unittype.flugdeckkreuzer: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusflugdeckkreuzer, myunit.rapidfirevsflugdeckkreuzer);
                        break;
                    }
                    case Unit.unittype.kolonieschiff: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversuskolonieschiff, myunit.rapidfirevskolonieschiff);
                        break;
                    }
                    case Unit.unittype.bergbauschiff: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusbergbauschiff, myunit.rapidfirevsbergbauschiff);
                        break;
                    }
                    case Unit.unittype.schlachtschiff: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusschlachtschiff, myunit.rapidfirevsschlachtschiff);
                        break;
                    }
                    case Unit.unittype.schlachtkreuzer: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusschlachtkreuzer, myunit.rapidfirevsschlachtkreuzer);
                        break;
                    }
                    case Unit.unittype.traegerschiff: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusträgerschiff, myunit.rapidfirevsträgerschiff);
                        break;
                    }
                    case Unit.unittype.flakgeschuetz: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusflakgeschütz, myunit.rapidfirevsflakgeschütz);
                        break;
                    }
                    case Unit.unittype.artillerie: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusartillerie, myunit.rapidfirevsartillerie);
                        break;
                    }
                    case Unit.unittype.ionenkanone: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusionenkanone, myunit.rapidfirevsionenkanone);
                        break;
                    }
                    case Unit.unittype.lasergeschuetz: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversuslasergeschütz, myunit.rapidfirevslasergeschütz);
                        break;
                    }
                    case Unit.unittype.railgun: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusrailgun, myunit.rapidfirevsrailgun);
                        break;
                    }
                    case Unit.unittype.partikelkanone: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversuspartikelkanone, myunit.rapidfirevspartikelkanone);
                        break;
                    }
                    case Unit.unittype.planetarerschildgenerator: {
                        this.handlefight(myunit, defenderlist, target, myunit.dmgversusplanetarerschildgenerator, myunit.rapidfirevsplanetarerschildgenerator);
                        break;
                    }
                    default: {
                        console.log("default");
                        //myunit.attackenergy = 0;
                        break;
                    }
                }
            }
        }
    }
    startwar(attackerfleet, defenderfleet) {
        if (attackerfleet instanceof Fleet && defenderfleet instanceof Fleet) {
            if (Array.isArray(attackerfleet.fleetarray) && Array.isArray(defenderfleet.fleetarray)) {
                let attackingships = [...attackerfleet.fleetarray];
                let shipfinishedattack = [];

                for (let i = 0; i < attackerfleet.fleetarray.length; i++) {
                    let attackershipnumber = Math.floor(Math.random() * attackingships.length);

                    if (defenderfleet.fleetarray.length <= 0) { break; }
                    this.attackunit(attackingships[attackershipnumber], defenderfleet.fleetarray);
                    shipfinishedattack.push(attackingships[attackershipnumber]);

                    console.log(defenderfleet.fleetarray.length);
                    attackingships.splice(attackershipnumber, 1);

                }
            }
        }
    }
    fleetattack(attackerfleet, defenderfleet, percent) {
        if (attackerfleet instanceof Fleet && defenderfleet instanceof Fleet) {
            if (Array.isArray(attackerfleet.fleetarray) && Array.isArray(defenderfleet.fleetarray)) {
                let attackerpercent = Math.ceil(attackerfleet.fleetarray.length / 100 * percent)
                let defenderpercent = Math.ceil(defenderfleet.fleetarray.length / 100 * percent)

                while (attackerfleet.fleetarray.length > 0 && defenderfleet.fleetarray.length > 0) {
                    let attackingships = [...attackerfleet.fleetarray];
                    let defendingships = [...defenderfleet.fleetarray];
                    let attackershipsfinishedattack = [];
                    let defendershipsfinishedattack = [];
                    console.log("äussere while schleife");

                    while (attackingships.length > 0 && defendingships.length > 0) {
                        console.log(attackerfleet.fleetarray.length + " attackingships");
                        console.log(defenderfleet.fleetarray.length + " defendingships");
                        //console.log("innere while schleife");
                        //console.log(attackerpercent+" attackerpercent");
                        //console.log(defenderpercent+" defenderpercent");
                        for (let i = 0; i < attackerpercent; i++) {
                            if (attackingships.length <= 0) { break; }
                            let attackershipnumber = Math.floor(Math.random() * attackingships.length);

                            if (defenderfleet.fleetarray.length <= 0) { break; }
                            this.attackunit(attackingships[attackershipnumber], defenderfleet.fleetarray);
                            attackershipsfinishedattack.push(attackingships[attackershipnumber]);


                            attackingships.splice(attackershipnumber, 1);
                            console.log("forschleife1");
                        }
                        for (let i = 0; i < defenderpercent; i++) {
                            if (defendingships.length <= 0) { break; }
                            let defendershipnumber = Math.floor(Math.random() * defendingships.length);

                            if (attackerfleet.fleetarray.length <= 0) { break; }
                            this.attackunit(defendingships[defendershipnumber], attackerfleet.fleetarray);
                            defendershipsfinishedattack.push(defendingships[defendershipnumber]);


                            defendingships.splice(defendershipnumber, 1);
                            console.log("forschleife2");
                        }
                    }
                    attackerfleet.resetenergy();
                    defenderfleet.resetenergy();
                }



            }
        }
    }

}
// node unitdata.js
/*export default function attackunit(myunit, attackedunit)
{
    if(myunit instanceof Unit&& attackedunit instanceof Unit)
    {
        console.log("hülle vorher"+(attackedunit.hull));
        attackedunit.sethull(attackedunit.hull-myunit.firepower)
        
        console.log("hülle nachher"+(attackedunit.hull))

    }
}*/