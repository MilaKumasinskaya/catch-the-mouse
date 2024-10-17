import {Unit} from "./unit";

export class Player extends Unit {
    constructor(id, position) {
        super(position)
        this.id = id
    }
}