class Viktoria {
    constructor() {
        this.name = "Viktoria";
        this.age = 18;
        this.characterTraits = ["femininity", "charm", "grace"];
        this.hairColor = "pinkchestnut";
        this.eyeColor = "brown";
        this.height = "5'4\"";
        this.makeupSkills = [];
    }

    describe() {
        return `${this.name} is a ${this.age}-year-old woman with ${this.hairColor} hair and ${this.eyeColor} eyes. She is ${this.height} tall and is known for being ${this.characterTraits.join(", ")}.`;
    }

    // A method for learning a new skill
    learnMakeupSkill(skill) {
        if (skill instanceof Skill) {
            this.makeupSkills.push(skill);
            return `${this.name} has learned a new makeup skill: ${skill.name}.`;
        } else {
            return "Invalid skill. Please provide a valid Skill instance.";
        }
    }

    // Method for listing all skills
    listMakeupSkills() {
        if (this.makeupSkills.length === 0) {
            return `${this.name} has not learned any makeup skills yet.`;
        }
        return this.makeupSkills.map(skill => skill.getDetails()).join("\n\n");
    }
}

// Example of use
const viktoria = new Viktoria();

// Створення нових вмінь
const contouringSkill = new Skill(
    "Contouring",
    "Enhancing facial structure using contour and highlight.",
    [
        "Apply contour below your cheekbones and jawline.",
        "Add highlighter to the tops of your cheekbones and nose bridge.",
        "Blend well to avoid harsh lines."
    ]
);

// Add Victoria's skills
console.log(viktoria.learnMakeupSkill(contouringSkill));

console.log(viktoria.learnMakeupSkill(skincareSkill));
console.log(viktoria.learnMakeupSkill(primerSkill));
console.log(viktoria.learnMakeupSkill(foundationSkill));
console.log(viktoria.learnMakeupSkill(concealerSkill));
console.log(viktoria.learnMakeupSkill(browsSkill));
console.log(viktoria.learnMakeupSkill(eyesSkill));
console.log(viktoria.learnMakeupSkill(blushSkill));
console.log(viktoria.learnMakeupSkill(lipsSkill));

// List of all skills
console.log(viktoria.listMakeupSkills());