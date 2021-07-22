import { Mobile } from '../repaso2/1repaso2';
import { MobileLibrary } from './1repaso3';

let Nokia3210: Mobile = new Mobile ("Nokia","3210","corporation", "2x4", "azul", "es 4G", 1 , 150);
let iPhone3G: Mobile = new Mobile ("IPone", "3G", "apple", "24x5", "blanco", "es 5G", 2, 1200);
let SamsumgGalaxy10: Mobile = new Mobile ("Samsumg", "Galaxy","sanCorporation", "5x4", "verde", "es 3G",4 , 700);
let Hawai: Mobile = new Mobile ("Hawai", "xp", "JapanCor", "5f", "negro", "5G", 4, 800);
let Motorola: Mobile = new Mobile ( "Motorola", "g20", "KoreanCor", "no tiene", "amarillo", "no tiene", 0 , 420);

let arrayMobiles: MobileLibrary = new MobileLibrary ( "tienda", "Av.de la Paz", [Nokia3210, iPhone3G, SamsumgGalaxy10]);
console.log("Se muestra todas las propiedades de los mobiles que pertenecen al arrayMobiles........................");
console.log(arrayMobiles);

console.log("Se muestran algunos atributos de los mobiles desde el array............................................");
console.log(arrayMobiles.getMobiles()[0].getPrice());
console.log(arrayMobiles.getMobiles()[2].getModel());
console.log(arrayMobiles.getMobiles()[2].getColor());

console.log("Se muestran algunos GETS y SETS...........................................................................");
console.log(arrayMobiles.getName());

arrayMobiles.setLocation("calle asura 4");
console.log(arrayMobiles.getLocation());

console.log("Calculo total de precio...................................................................................");
console.log(arrayMobiles.totalPriceCalculation());

