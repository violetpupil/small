class Snake {
    element: HTMLElement
    head: HTMLElement
    bodies: HTMLCollection

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div')!
        this.bodies = this.element.getElementsByTagName('div')
    }

    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value) {
        if (this.X === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error("GAME OVER!")
        }
        this.head.style.left = value + 'px'
    }

    set Y(value) {
        if (this.Y === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error("GAME OVER!")
        }
        this.head.style.top = value + 'px'
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
}

export default Snake