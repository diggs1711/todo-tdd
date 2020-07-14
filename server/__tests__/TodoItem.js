const {
    TodoItem
} = require('../Entities')

describe("todo item", () => {
    let todoItem;

    beforeEach(() => {
        todoItem = new TodoItem({
            name: "Item 1",
            description: "example description"
        })
    })

    it("init todo item with name", () => {
        expect(todoItem.name).toBe("Item 1")
    })

    it("init todo item with description", () => {
        expect(todoItem.description).toBe("example description")
    })

    it("updates description of item", () => {
        todoItem.setDescription("updated description")
        expect(todoItem.description).toBe("updated description")
    })

    it("updates title of item", () => {
        todoItem.setName("New Item Name")
        expect(todoItem.name).toBe("New Item Name")
    })
})