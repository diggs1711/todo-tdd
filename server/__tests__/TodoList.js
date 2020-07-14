const {
    TodoList,
    TodoItem
} = require('../entities')

describe("Todo List", () => {
    it("init empty list", () => {
        const todoList = new TodoList({
            items: []
        })
        expect(todoList.items.length).toBe(0)
    })

    it("adds item to list", () => {
        const todoItem = new TodoItem({
            id: 1,
            name: "Item 1",
            description: "Item description"
        });

        const todoList = new TodoList({
            items: []
        })

        todoList.add({
            item: todoItem
        })

        expect(todoList.items.length).toBe(1)
        expect(todoList.items[0].name).toBe("Item 1")
        expect(todoList.items[0].id).toBe(1)
        expect(todoList.items[0].description).toBe("Item description")
    })

    it("removes an item from the list", () => {
        const todoList = new TodoList({
            items: []
        })
        expect(todoList.items.length).toBe(0)

        const todoListItem = new TodoItem({
            id: 1,
            name: "Item 1",
            description: "Item description"
        })

        todoList.add({
            item: todoListItem
        })

        todoList.remove({
            itemId: 1
        })

        expect(todoList.items.length).toBe(0)
    })

    it("makes item as complete", () => {
        const todoList = new TodoList({
            items: []
        })
        const todoListItem = new TodoItem({
            id: 1,
            name: "Item 1",
            description: "Item description"
        })
        todoList.add(todoListItem)
    })
})