import { FenChar, Coords, Color } from "../models";
import { Piece } from "./piece";

export class Queen extends Piece {
    protected override _FEN: FenChar;
    protected override direction: Coords[] = [
        { x: 0, y: 1 },
        { x: 0, y: -1 },
        { x: 1, y: 0 },
        { x: 1, y: -1 },
        { x: 1, y: 1 },
        { x: -1, y: 0 },
        { x: -1, y: 1 },
        { x: -1, y: -1 }
    ];

    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FEN = pieceColor === Color.White ? FenChar.WhiteQueen : FenChar.BlackQueen;
    }
}