import Unit from './unit.js';

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
const einheit1 = new unitstats(10, 5, 8, 15, 20, 10, 30, 5, 3, 50, 1, [1.2, 0.8], [1.1, 0.7], false);



console.log(einheit1);
console.log(einheit2);
console.log(einheit3);
console.log(einheit4);*/


