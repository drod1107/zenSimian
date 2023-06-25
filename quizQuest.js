const quizQuestions = [
  {
    "question": "How do you typically respond to challenges?",
    "answers": [
      {
        "text": "Analyze the situation and carefully plan a strategy",
        "monkeys": ["Gorilla", "Orangutan"],
        "points": 4
      },
      {
        "text": "Take immediate action and adapt as needed",
        "monkeys": ["Chimpanzee", "Squirrel Monkey"],
        "points": 2
      },
      {
        "text": "Seek advice and collaborate with others",
        "monkeys": ["Baboon", "Capuchin"],
        "points": 3
      },
      {
        "text": "Explore different possibilities and experiment",
        "monkeys": ["Macaque", "Tamarin"],
        "points": 1
      },
      {
        "text": "Reflect and find a balanced approach",
        "monkeys": ["Lemur"],
        "points": 5
      }
    ]
  },
  {
    "question": "What is your preferred way of spending free time?",
    "answers": [
      {
        "text": "Enjoying the tranquility of nature and peaceful activities",
        "monkeys": ["Gorilla", "Lemur"],
        "points": 3
      },
      {
        "text": "Engaging in social interactions and exciting adventures",
        "monkeys": ["Chimpanzee", "Macaque"],
        "points": 5
      },
      {
        "text": "Exploring creative pursuits and personal interests",
        "monkeys": ["Baboon", "Tamarin"],
        "points": 2
      },
      {
        "text": "Seeking inner peace and relaxation",
        "monkeys": ["Orangutan"],
        "points": 1
      },
      {
        "text": "Connecting with others and building relationships",
        "monkeys": ["Capuchin"],
        "points": 4
      }
    ]
  },
  {
    "question": "How do you handle stress?",
    "answers": [
      {
        "text": "Find solace in solitude and personal reflection",
        "monkeys": ["Gorilla", "Orangutan"],
        "points": 4
      },
      {
        "text": "Seek support from loved ones and engage in calming activities",
        "monkeys": ["Chimpanzee", "Tamarin"],
        "points": 2
      },
      {
        "text": "Maintain a positive attitude and adaptability",
        "monkeys": ["Baboon", "Macaque"],
        "points": 5
      },
      {
        "text": "Embrace change and explore new opportunities",
        "monkeys": ["Squirrel Monkey"],
        "points": 5
      },
      {
        "text": "Value social connections and seek comfort in others",
        "monkeys": ["Capuchin"],
        "points": 3
      },
      {
        "text": "Stay calm and find peace through mindfulness",
        "monkeys": ["Lemur"],
        "points": 3
      }
    ]
  },
  {
    "question": "Which description resonates with you the most?",
    "answers": [
      {
        "text": "Wise and thoughtful, valuing introspection",
        "monkeys": ["Gorilla", "Orangutan"],
        "points": 4
      },
      {
        "text": "Energetic and adventurous, seeking new experiences",
        "monkeys": ["Chimpanzee", "Macaque"],
        "points": 5
      },
      {
        "text": "Playful and social, enjoying connections with others",
        "monkeys": ["Baboon", "Capuchin"],
        "points": 2
      },
      {
        "text": "Curious and inquisitive, always seeking knowledge",
        "monkeys": ["Tamarin", "Squirrel Monkey"],
        "points": 1
      },
      {
        "text": "Gentle and observant, appreciating the beauty of life",
        "monkeys": ["Lemur"],
        "points": 3
      }
    ]
  },
  {
    "question": "What motivates you in your personal and professional life?",
    "answers": [
      {
        "text": "Achieving goals and making a meaningful impact",
        "monkeys": ["Gorilla", "Baboon"],
        "points": 2
      },
      {
        "text": "Seeking knowledge and personal growth",
        "monkeys": ["Chimpanzee", "Tamarin"],
        "points": 4
      },
      {
        "text": "Building relationships and connecting with others",
        "monkeys": ["Macaque", "Capuchin"],
        "points": 5
      },
      {
        "text": "Embracing change and exploring new possibilities",
        "monkeys": ["Squirrel Monkey"],
        "points": 5
      },
      {
        "text": "Finding peace and contentment in the present moment",
        "monkeys": ["Lemur"],
        "points": 3
      }
    ]
  },
  {
    "question": "How do you approach problem-solving?",
    "answers": [
      {
        "text": "With logical analysis and attention to detail",
        "monkeys": ["Gorilla", "Baboon"],
        "points": 5
      },
      {
        "text": "By exploring multiple possibilities and thinking outside the box",
        "monkeys": ["Chimpanzee", "Tamarin"],
        "points": 4
      },
      {
        "text": "Through collaboration and seeking consensus",
        "monkeys": ["Macaque", "Capuchin"],
        "points": 2
      },
      {
        "text": "Adapting quickly and finding creative solutions",
        "monkeys": ["Squirrel Monkey"],
        "points": 5
      },
      {
        "text": "Trusting intuition and finding harmonious solutions",
        "monkeys": ["Lemur"],
        "points": 3
      }
    ]
  },
  {
    "question": "What type of social activities do you enjoy the most?",
    "answers": [
      {
        "text": "Spending quality time with a few close friends or family members",
        "monkeys": ["Gorilla", "Lemur"],
        "points": 3
      },
      {
        "text": "Engaging in lively conversations and group activities",
        "monkeys": ["Chimpanzee", "Macaque"],
        "points": 5
      },
      {
        "text": "Attending social events and meeting new people",
        "monkeys": ["Baboon", "Capuchin"],
        "points": 1
      },
      {
        "text": "Sharing experiences and creating connections",
        "monkeys": ["Tamarin", "Squirrel Monkey"],
        "points": 1
      },
      {
        "text": "Finding joy in meaningful interactions and deep connections",
        "monkeys": ["Lemur"],
        "points": 3
      }
    ]
  },
  {
    "question": "Which word best describes your communication style?",
    "answers": [
      {
        "text": "Thoughtful and deliberate",
        "monkeys": ["Gorilla", "Orangutan"],
        "points": 4
      },
      {
        "text": "Expressive and enthusiastic",
        "monkeys": ["Chimpanzee", "Baboon"],
        "points": 5
      },
      {
        "text": "Engaging and charismatic",
        "monkeys": ["Macaque", "Capuchin"],
        "points": 2
      },
      {
        "text": "Precise and detail-oriented",
        "monkeys": ["Tamarin", "Squirrel Monkey"],
        "points": 1
      },
      {
        "text": "Gentle and harmonious",
        "monkeys": ["Lemur"],
        "points": 3
      }
    ]
  },
  {
    "question": "How do you handle conflicts or disagreements?",
    "answers": [
      {
        "text": "Asserting your position and standing your ground",
        "monkeys": ["Gorilla", "Baboon"],
        "points": 5
      },
      {
        "text": "Seeking compromise and finding common ground",
        "monkeys": ["Chimpanzee", "Macaque"],
        "points": 4
      },
      {
        "text": "Maintaining harmony and avoiding confrontation",
        "monkeys": ["Capuchin", "Squirrel Monkey"],
        "points": 2
      },
      {
        "text": "Reflecting on different perspectives and seeking understanding",
        "monkeys": ["Orangutan", "Tamarin"],
        "points": 3
      },
      {
        "text": "Finding peace and resolution through calm communication",
        "monkeys": ["Lemur"],
        "points": 3
      }
    ]
  },
  {
    "question": "What is your outlook on life?",
    "answers": [
      {
        "text": "Focused on practicality and achieving tangible results",
        "monkeys": ["Gorilla", "Baboon"],
        "points": 2
      },
      {
        "text": "Embracing the joy and spontaneity of the present moment",
        "monkeys": ["Chimpanzee", "Squirrel Monkey"],
        "points": 5
      },
      {
        "text": "Seeking balance and harmony in all aspects of life",
        "monkeys": ["Orangutan", "Lemur"],
        "points": 3
      },
      {
        "text": "Nurturing deep connections and meaningful relationships",
        "monkeys": ["Macaque", "Capuchin"],
        "points": 1
      },
      {
        "text": "Exploring new experiences and embracing change",
        "monkeys": ["Tamarin"],
        "points": 4
      }
    ]
  }
  ]

const results = {
  "chimpanzee": {
    "text": "Chimpanzee Archetype",
    "description":
      "The Chimpanzee Archetype is intelligent and assertive, often taking the lead in social situations. They are excellent problem solvers and communicators, making them effective in team settings. However, under stress, they can become territorial and competitive. It's important for this archetype to remember to balance their assertiveness with cooperation and to use their intelligence to navigate social dynamics effectively.",
    "imageUrl": "assets/images/chimpanzeeFinalBW.png"
  },
  "gorilla": {
    "text": "Gorilla Archetype",
    "description":
      "The Gorilla Archetype is known for their strength and gentle nature. They are peaceful beings who prefer to avoid conflict, often taking on the role of the peacemaker in their social circles. However, when resources are scarce or their loved ones are threatened, they can become defensive. This archetype needs to remember to harness their strength in a constructive manner and to not let their protective nature lead to unnecessary confrontations.",
    "imageUrl": "assets/images/gorillaFinalBW.png"
  },
  "orangutan": {
    "text": "Orangutan Archetype",
    "description":
      "The Orangutan Archetype is independent and observant. They are comfortable spending time alone and are often introspective, preferring to think deeply about things. However, in times of scarcity or threat, they can become overly cautious and self-reliant. This archetype needs to remember the value of social connections and to not let their independence turn into isolation.",
    "imageUrl": "assets/images/orangutanFinalBW.png"
  },
  "mandrill": {
    "text": "Mandrill Archetype",
    "description":
      "The Mandrill Archetype is expressive and confident. They are socially engaged and often the life of the party. However, they can become assertive and vigilant when resources are scarce or their status is threatened. This archetype needs to remember to use their expressive communication for positive influence and not let their sensitivity to social status lead to unnecessary conflicts.",
    "imageUrl": "assets/images/mandrillFinalBW.png"
  },
  "squirrelMonkey": {
    "text": "Squirrel Monkey Archetype",
    "description":
      "The Squirrel Monkey Archetype is energetic and playful. They are social butterflies who enjoy being in the company of others. However, under stress, they can become impulsive and overly influenced by their social environment. This archetype needs to remember to balance their sociability with personal boundaries and to not let their energy lead to impulsiveness.",
    "imageUrl": "assets/images/orangutanFinalBW.png"
  },
  "marmoset": {
    "text": "Marmoset Archetype",
    "description":
      "The Marmoset Archetype is cooperative and adaptive. They work well in teams and are often the glue that holds groups together. However, under stress, they can become overly protective and defensive. This archetype needs to remember to balance their cooperative nature with self-care and to not let their protective instincts lead to unnecessary stress.",
    "imageUrl": "assets/images/marmosetFinalBW.png"
  },
  "capuchin": {
    "text": "Capuchin Archetype",
    "description":
      "The Capuchin Archetype is resourceful and curious. They thrive in situations where creativity and problem-solving are needed. However, under stress, they can become possessive and territorial. This archetype needs to remember to use their resourcefulness in a positive way and to not let their curiosity lead to possessiveness.",
    "imageUrl": "assets/images/capuchinFinalBW.png"
  },
  "lemur": {
    "text": "Lemur Archetype",
    "description":
      "The Lemur Archetype is social and relaxed. They enjoy being part of a group and often bring a sense of calm to their social circles. However, under stress, they can become impulsive and overly influenced by their social environment. This archetype needs to remember to balance their sociability with personal boundaries and to not let their relaxed nature lead to impulsiveness.",
    "imageUrl": "assets/images/lemurFinalBW.png"
  }
};

export { quizQuestions, results };
