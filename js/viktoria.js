class Viktoria {
    constructor() {
        // Character traits
        this.name = "Viktoria";
        this.age = 15;
        this.characterTraits = ["kind", "intelligent", "ambitious"];
        
        // Appearance
        this.hairColor = "pinkchestnut";
        this.eyeColor = "brown";
        this.height = "5'4\"";
        
        // Makeup skills
        this.makeupSkills = [];
    }

    // Method to describe Viktoria
    describe() {
        return `${this.name} is a ${this.age}-year-old woman with ${this.hairColor} hair and ${this.eyeColor} eyes. She is ${this.height} tall and is known for being ${this.characterTraits.join(", ")}.`;
    }

    // Method to add a makeup skill
    learnMakeupSkill(skill) {
        this.makeupSkills.push(skill);
        return `${this.name} has learned a new makeup skill: ${skill}.`;
    }

    // Method to list all makeup skills
    listMakeupSkills() {
        if (this.makeupSkills.length === 0) {
            return `${this.name} has not learned any makeup skills yet.`;
        }
        return `${this.name} knows the following makeup skills: ${this.makeupSkills.join(", ")}.`;
    }
}

// Create an instance of Viktoria
const viktoria = new Viktoria();

// Describe Viktoria
console.log(viktoria.describe());

// Teach Viktoria some makeup skills
console.log(viktoria.learnMakeupSkill("applying foundation"));
console.log(viktoria.learnMakeupSkill("contouring"));
console.log(viktoria.learnMakeupSkill("eye shadow blending"));

// List all makeup skills
console.log(viktoria.listMakeupSkills());
