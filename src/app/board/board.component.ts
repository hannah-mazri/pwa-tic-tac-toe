import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any;
  status = 'Next player: X';
  xIsNext = true;

  constructor() { }

  ngOnInit(): any {
    this.renderSquare();
  }

  renderSquare(): any {
    this.squares = Array(9).fill(null);
  }

  handleClick(i: any): any {
    const squares = this.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.xIsNext ? 'X' : 'O';
    this.squares = squares;
    this.xIsNext = !this.xIsNext;

    const winner = this.calculateWinner(this.squares);
    if (winner) {
      this.status = `Winner is ${ winner }`;
    } else {
      this.status = `Next player: ${ this.xIsNext ? 'X' : 'O' }`;
    }
  }

  calculateWinner(squares: any): any {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}
