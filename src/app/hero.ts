export class Hero
{
    public id:number;
    public name:string;
    public power:string;
    public alterEgo?:string;/**表示创建对象时可选 */
    constructor(id:number,name:string,power:string,alterEgo?:string)
    {
        this.id=id;
        this.name=name;
        this.power=power;
        this.alterEgo=alterEgo;

    }
}