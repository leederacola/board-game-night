import {Game} from "src/app/models/game";

export class Person{
    id?:number;
    key?: string;
    name: string;
    library?: Game[];
}