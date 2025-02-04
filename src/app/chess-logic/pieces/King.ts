import { FenChar, Coords, Color } from "../models";
import { Piece } from "./piece";

export class King extends Piece {
    private _hasMoved: boolean = false;
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
        this._FEN = pieceColor === Color.White ? FenChar.WhiteKing : FenChar.BlackKing;
    }

    public get hasMoved(): boolean {
        return this._hasMoved;
    }

    public set hasMoved(_) {
        this._hasMoved = true;
    }
}