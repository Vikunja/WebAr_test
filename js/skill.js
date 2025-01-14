lass Skill {
    constructor(name, description, steps) {
        this.name = name; // Name skill
        this.description = description; // Shot description
        this.steps = steps; // Array of execution steps
    }

    // Method for obtaining complete information about skills
    getDetails() {
        return `Skill: ${this.name}\nDescription: ${this.description}\nSteps:\n${this.steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}`;
    }
}