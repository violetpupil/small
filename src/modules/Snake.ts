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
        this.head.style.left = value + 'px'
    }

    set Y(value) {
        this.head.style.top = value + 'px'
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
}

export default Snake