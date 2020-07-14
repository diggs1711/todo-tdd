class TodoItem {
    constructor({ name, description }) {
        this.name = name
        this.description = description
    }

    setDescription(desc) {
        this.description = desc
    }

    setName(name) {
        this.name = name
    }
}

module.exports = TodoItem