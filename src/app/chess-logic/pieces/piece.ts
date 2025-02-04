import { Color, Coords, FenChar } from "../models";

export abstract class Piece{
protected abstract _FEN :FenChar;// Forsyth-Edwards Notation
protected abstract direction :Coords[];//array of co ordintaes

constructor(private _color:Color){}



public get FenCher():FenChar{
    return this._FEN;
}

public get directions():Coords[]{
    return this.direction;
}

public get Color():Color{
    
    return this._color;

}
}