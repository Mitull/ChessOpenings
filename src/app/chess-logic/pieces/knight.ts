import {  Coords, Color, FenChar } from "../models";
import { Piece } from "./piece";

export class Knight extends Piece {
    protected override _FEN: FenChar;
    protected override direction: Coords[] = [
        { x: 1, y: 2 },
        { x: 1, y: -2 },
        { x: -1, y: 2 },
        { x: -1, y: -2 },
        { x: 2, y: 1 },
        { x: 2, y: -1 },
        { x: -2, y: 1 },
        { x: -2, y: -1 }
    ];

    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FEN = pieceColor === Color.White ? FenChar.WhiteKnight : FenChar.BlackKnight;
    }
}