import Unit from './unit.js';

export default class Battlesystem
{
    constructor()
    {

    }
    attackunit(myunit, attackedunit)
    {
        if(myunit instanceof Unit && attackedunit instanceof Unit)
        {
            console.log("Hülle vorher: " + attackedunit.hull);
            attackedunit.sethull(attackedunit.hull - myunit.firepower);
            
            console.log("Hülle nacher: " + attackedunit.hull);

        }
    }
}
/*export default function attackunit(myunit, attackedunit)
{
    if(myunit instanceof Unit&& attackedunit instanceof Unit)
    {
        console.log("hülle vorher"+(attackedunit.hull));
        attackedunit.sethull(attackedunit.hull-myunit.firepower)
        
        console.log("hülle nachher"+(attackedunit.hull))

    }
}*/