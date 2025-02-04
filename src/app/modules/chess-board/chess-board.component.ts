import { Component } from '@angular/core';
import { Color, FenChar } from '../../chess-logic/models';
import { ChessBoard } from '../../chess-logic/chess-board';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css'
})
export class ChessBoardComponent {
private chessBoard= new ChessBoard();
public chessBoardView: (FenChar | null)[][] = this.chessBoard.chessBoardView;
public get playerColor(): Color { return this.chessBoard.playerColor; };


public isSquareDark(x: number, y: number): boolean {
  return ChessBoard.isSquareDark(x, y);
}
}
