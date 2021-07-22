import { Mobile } from '../repaso2/1repaso2';

export class MobileLibrary 

{
    private name : string;
    private location : string;
    private mobiles : Mobile[]
    private totalPrice: number;
    ///Definición del constructor
    constructor(name: string, location: string, mobiles: Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation()
    }
    ///Métodos
    public getName(): string
    {
        return this.name;
    }
    public getLocation(): string
    {
        return this.location;
    }
    public getMobiles(): Mobile []
    {
        return this.mobiles;
    }
    public getTotalPrice(): number
    {
        return this.totalPrice;
    }
    public setName(name:string): void
    {
        this.name = name;
    }
    public setLocation(location: string): void
    {
        this.location= location     
    }   
    public setMobiles(mobiles : Mobile[]): void
    {
        this.mobiles = mobiles;
    }
    public setTotalPrice(totalPrice : number): void
    {
        this.totalPrice = totalPrice;
    }
    public totalPriceCalculation(): number
    { 
        let sumaPrecio: number = 0;                         /*siempre se inicializa la variable munber,y tbn cuando se aplica += */

        for (let i = 0; i< this.mobiles.length; i++)
        {
            sumaPrecio+= this.mobiles[i].getPrice();
        }
        return sumaPrecio;
    }
;}


