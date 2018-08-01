import {Game} from "src/app/models/game";

export class Player{
    key: string;
    name: string;
    imgPath: string;
    library?: Game[];
}