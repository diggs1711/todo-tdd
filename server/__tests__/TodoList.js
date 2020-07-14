const { TodoList, TodoItem } = require('../Entities')

describe("Todo List", () => {
    it("init empty list", () => {
        const todoList = new TodoList({ items: [] })
        expect(todoList.items.length).toBe(0)
    })

    it("adds item to list", () => {
        const todoItem = new TodoItem({
            name: "Item 1",
            description: "Item description"
        });

        const todoList = new TodoList({
            items: []
        })

        todoList.add(todoItem)

        expect(todoList.items.length).toBe(1)
        expect(todoList.items[0].name).toBe("Item 1")
        expect(todoList.items[0].description).toBe("Item description")
    })
})