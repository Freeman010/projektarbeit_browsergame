import UnitStats from './unitstats.js';

// Erstelle fünf Instanzen der UnitStats-Klasse
const einheit1 = new UnitStats(10, 5, 8, 15, 20, 10, 30, 5, 3, 50, 1, [1.2, 0.8], [1.1, 0.7], false);
const einheit2 = new UnitStats(15, 8, 12, 25, 30, 15, 40, 8, 5, 60, 2, [1.5, 0.9], [1.3, 0.8], false);
const einheit3 = new UnitStats(8, 4, 6, 10, 15, 8, 20, 4, 2, 40, 1, [1.1, 0.7], [1.0, 0.6], true);
const einheit4 = new UnitStats(12, 6, 10, 18, 25, 12, 35, 7, 4, 55, 2, [1.4, 0.8], [1.2, 0.7], true);
const einheit5 = new UnitStats(20, 10, 15, 30, 40, 20, 50, 10, 6, 70, 3, [1.7, 1.0], [1.5, 0.9], true);

// Gib die erstellten Einheiten in der Konsole aus
console.log(einheit1);
console.log(einheit2);
console.log(einheit3);
console.log(einheit4);
console.log(einheit5);
