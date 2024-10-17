import {Player} from "./player";
import {NumberUtility} from "./number-utility";
import {Position} from "./position";
import {Mouse} from "./mouse";

export class Game {
    #player1
    #player2
    #mouse
    #settings = {
        gridSize: {
            columns: 4,
            rows: 4,
        },
    };
    #status = 'pending'
    async start() {
        if (this.#status === 'pending') {
            this.#createUnits()
            this.#status = 'in-progress'
        }
    }
    get player1() {
        return this.#player1
    }
    get player2() {
        return this.#player2
    }
    get mouse() {
        return this.#mouse
    }
    get status() {
        return this.#status
    }

    test() {
        return 'game'
    }
    #createUnits() {
        const player1Position = this.#getRandomPosition([]);
        this.#player1 = new Player(1, player1Position);


        const player2Position = this.#getRandomPosition([player1Position]);
        this.#player2 = new Player(2,  player2Position);


        const mousePosition = this.#getRandomPosition([
            player1Position,
            player2Position,
        ]);
        this.#mouse = new Mouse(mousePosition);
    }

    setSettings(settings) {
        this.#settings = settings
    }

    getSettings() {
        return this.#settings
    }

    #getRandomPosition(coordinates) {
        let newX;
        let newY;

        do {
            newX = NumberUtility.getRandomNumber(0, this.#settings.gridSize.columns );
            newY = NumberUtility.getRandomNumber(0, this.#settings.gridSize.rows );
        } while (coordinates.some((el) => el.columns === newX && el.rows === newY));


        return new Position(newX, newY);
    }
}

