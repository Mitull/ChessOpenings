import { Piece } from './piece';
import { Color, Coords, FenChar } from '../models';

export class Bishop extends Piece {
    protected _FEN: FenChar = this.Color === Color.White ? FenChar.WhiteBishop : FenChar.BlackBishop;
    protected direction: Coords[] = [
        { x: 1, y: 1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 },
        { x: -1, y: -1 }
    ];

    constructor(private piececolor: Color) {
        super(piececolor);
        this._FEN=piececolor=== Color.White? FenChar.WhiteBishop:FenChar.BlackBishop;
    }
}