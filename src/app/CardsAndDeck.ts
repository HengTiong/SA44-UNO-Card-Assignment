export interface Cards {
    value: number;
    colour: string;
    imageUrl: string;
  }

  export class Deck {
    cards: Cards[] = [];
    private VALUES: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 20, 20];
    private COLOURS: string[] = ['Red', 'Yellow', 'Green', 'Blue'];

    constructor() {
      for (const ci in this.COLOURS) {

        const zero = 0;
        const zeroString = '00';

        const url: string = '/assets/uno_deck/c' + ci + '_' + zeroString + '.png';
        const card: Cards  = {value: zero, colour: this.COLOURS[ci], imageUrl: url};
        this.cards.push(card);

        for (let i = 0; i < 2; i++) {
            for (const vi in this.VALUES) {
                const v: number = +vi + 1;
                let vString = '';
                if (v <= 9) {
                  vString = '0' + v;
                } else {
                  vString = '' + v;
                }

                const url: string = '/assets/uno_deck/c' + ci + '_' + vString + '.png';
                const card: Cards  = {value: this.VALUES[vi], colour: this.COLOURS[ci], imageUrl: url};

                this.cards.push(card);
              }
        }
      }

      for (let i = 0; i < 4; i++) {
        const wildValue = 50;
        const wildString = '00';
        const wildColour = 'Wild';

        const url: string = '/assets/uno_deck/c' + 4 + '_' + wildString + '.png';
        const card: Cards  = {value: wildValue, colour: wildColour, imageUrl: url};
        this.cards.push(card);
      }

      for (let i = 0; i < 4; i++) {
        const wildValue = 50;
        const wildString = '01';
        const wildColour = 'Wild';

        const url: string = '/assets/uno_deck/c' + 4 + '_' + wildString + '.png';
        const card: Cards  = {value: wildValue, colour: wildColour, imageUrl: url};
        this.cards.push(card);
      }
    }

    StartingHand(): Cards[] {
        const hand: Cards[] = [];
        for (let i = 0; i < 5; i++) {
            const idx = Math.random() * this.cards.length;
            hand.push(this.cards.splice(idx, 1)[0]);
        }

        return hand;
    }
  }
