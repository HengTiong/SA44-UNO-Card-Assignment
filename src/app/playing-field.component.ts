import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deck, Cards } from './CardsAndDeck';

@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.css']
})
export class PlayingFieldComponent implements OnInit {

  @Input()
  playingPlayers: Cards[][];

  DeckOfCards: Deck = new Deck();

  @Input()
  cards: Cards[];

  players: string[] = [ 'Heng Tiong', 'Daryl'];

  @Output()
  onClicking: EventEmitter<void> = new EventEmitter<void> ();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.onClicking.emit();
  }
}
