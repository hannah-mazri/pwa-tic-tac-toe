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

  handleClick(i): any {
    const squares = this.squares.slice();
    squares[i] = this.xIsNext ? 'X' : 'O';
    this.squares = squares;
    this.xIsNext = !this.xIsNext;

    this.status = `Next player: ${ this.xIsNext ? 'X' : 'O' }`;
  }
}
