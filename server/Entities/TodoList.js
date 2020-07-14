class TodoList {
    constructor({
        items
    }) {
        this.items = items
    }

    add({
        item
    }) {
        this.items.push(item)
    }

    remove({
        itemId
    }) {
        this.items = this.items.filter(item => item.id != itemId)
    }
}

module.exports = TodoList