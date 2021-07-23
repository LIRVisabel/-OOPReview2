import { Mobile } from '../repaso2/1repaso2';
import { MobileLibrary } from './1repaso3';


let Nokia: Mobile = new Mobile ("Nokia","","corporation", "2x4", "", "es 4G", 1 , 5150);
let iPhone: Mobile = new Mobile ("IPone", "3G", "apple", "24x5", "blanco", "es 5G", 2, 1200);
let Samsumg: Mobile = new Mobile ("Samsumg", "Galaxy","sanCorporation", "5x4", "verde", "es 3G",4 , 700);
let Hawai: Mobile = new Mobile ("Hawai", "xp", "JapanCor", "5f", "negro", "5G", 4, 800);
let Motorola: Mobile = new Mobile ( "Motorola", "g20", "KoreanCor", "no tiene", "amarillo", "no tiene", 0 , 820);

let colecMobiles: MobileLibrary = new MobileLibrary ( "tienda", "Av.de la Paz", [Nokia, iPhone, Samsumg]);

console.log("Asigna SETS A NOKIA...................................................................");
Nokia.setModel("450P");
Nokia.setColor("celeste");
console.log("Nuevo modelo de Nokia" + Nokia.getModel(), "nuevo color de Nokia" + Nokia.getColor());


console.log("PRECIO TOTAL DE LA COLECCIÓN DE MOBILES:..............................................");
console.log(colecMobiles.totalPriceCalculation());

console.log("Imprimir las caracteristicas de la coleción de mobiles:...............................");
console.log(colecMobiles.printLibrary());

