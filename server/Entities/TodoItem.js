class TodoItem {
    constructor({ id, name, description }) {
        this.name = name
        this.id = id
        this.description = description
        this.status = null
    }

    setDescription(desc) {
        this.description = desc
    }

    setName(name) {
        this.name = name
    }

    setStatus({ status }) {
        this.status = status
    }
}

module.exports = TodoItem