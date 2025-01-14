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

// Навички для ранкового макіяжу
const skincareSkill = new Skill(
    "Skincare Preparation",
    "Preparing the skin for makeup with cleansing and moisturizing.",
    [
        "Wash your face with a gentle cleanser.",
        "Apply a refreshing toner.",
        "Moisturize your skin to prevent dryness.",
        "Apply sunscreen if needed."
    ]
);

const primerSkill = new Skill(
    "Primer Application",
    "Creating a smooth base for makeup that lasts all day.",
    [
        "Apply primer to your T-zone (forehead, nose, chin).",
        "Distribute evenly using your fingers or a brush."
    ]
);

const foundationSkill = new Skill(
    "Foundation Application",
    "Evening out the skin tone for a fresh look.",
    [
        "Use a lightweight foundation or BB cream.",
        "Apply a small amount on your face.",
        "Blend using a sponge or brush, ensuring seamless edges."
    ]
);

const concealerSkill = new Skill(
    "Concealer",
    "Hiding dark circles and imperfections.",
    [
        "Apply concealer under your eyes and on blemishes.",
        "Gently blend using your finger or sponge."
    ]
);

const browsSkill = new Skill(
    "Eyebrow Grooming",
    "Defining eyebrows for a polished look.",
    [
        "Use a pencil or powder to fill in your brows.",
        "Blend with a brush for a natural finish.",
        "Set with eyebrow gel."
    ]
);

const eyesSkill = new Skill(
    "Natural Eye Makeup",
    "Enhancing the eyes for a gentle, everyday look.",
    [
        "Apply a light shade over your eyelid.",
        "Add a brown shade to the crease for depth.",
        "Curl lashes and apply a light coat of mascara."
    ]
);

const blushSkill = new Skill(
    "Blush Application",
    "Adding a touch of color for a healthy glow.",
    [
        "Apply blush to the apples of your cheeks.",
        "Blend upwards toward your temples."
    ]
);

const lipsSkill = new Skill(
    "Lip Makeup",
    "Completing the look with soft, natural lips.",
    [
        "Use a moisturizing lip balm or gloss.",
        "Add a touch of natural lipstick color if desired."
    ]
);