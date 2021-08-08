import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    direction: string

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.direction = ''
        this.init()
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key
    }
}

export default GameControl