class TodoList {
    constructor({ items }) {
        this.items = items
    }

    add(item) {
        this.items.push(item)
    }
}

module.exports = TodoList