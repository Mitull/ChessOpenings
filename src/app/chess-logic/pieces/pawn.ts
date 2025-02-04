import { Piece } from './piece';
import { Color, Coords, FenChar } from '../models';

export class Pawn extends Piece {
    protected _FEN: FenChar = this.Color === Color.White ? FenChar.WhitePawn : FenChar.BlackPawn;
    protected direction: Coords[] = [
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: -1 } // Simplified for forward movement
    ];

    constructor(private piececolor: Color) {
        super(piececolor);
        this._FEN=piececolor=== Color.White? FenChar.WhitePawn:FenChar.BlackPawn;
    }
}