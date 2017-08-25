import { Component } from '@angular/core';
import { Cards, Deck } from './CardsAndDeck';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  players = 2;
  DeckOfCards: Deck = new Deck();
  cards: Cards[] = [];
  playing: Cards [][] = [];

  whenAdding() {
    if (this.players <= 6) {
      this.players ++;
    } else {
      alert("No more than 7 players please!");          
    }
    console.log('Adding...');
  }

  whenRemoving() {
    if (this.players >= 3) {
      this.players --;
    } else {
      alert("How are you going to play UNO by yourself?")
    }
    console.log('Removing...');
  }

  whenClicking() {
    this.players --;
    console.log('Clicking...');
  }

  whenStarting() {
    this.DeckOfCards = new Deck();
    this.cards = this.DeckOfCards.cards;
    console.log(this.DeckOfCards.cards);

    this.playing = [];
    for (let i = 0; i < this.players; i++) {
      const cardsPlaying: Cards[] = this.DeckOfCards.StartingHand();
      this.playing.push(cardsPlaying);
      console.log(this.playing);
    }
    console.log('player hands: ', this.playing);
    console.log('Starting...');
  }
}
