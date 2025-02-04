import { FenChar, Coords, Color } from "../models";
import { Piece } from "./piece";

export class Rook extends Piece {
    private _hasMoved: boolean = false;
    protected override _FEN: FenChar;
    protected override direction: Coords[] = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 }
    ];

    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FEN = pieceColor === Color.White ? FenChar.WhiteRook : FenChar.BlackRook;
    }

    // below logic to check for castling validation
    public get hasMoved(): boolean {
        return this._hasMoved;
    }

    public set hasMoved(_) {
        this._hasMoved = true;
    }
}