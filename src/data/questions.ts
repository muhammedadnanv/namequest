export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questionBank: Question[] = [
  // Science Questions
  {
    id: 1,
    category: "Science",
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2
  },
  {
    id: 2,
    category: "Science",
    question: "How many planets are in our solar system?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 1
  },
  {
    id: 3,
    category: "Science",
    question: "What is the speed of light in vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    correctAnswer: 0
  },
  {
    id: 4,
    category: "Science",
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Brain", "Liver", "Skin"],
    correctAnswer: 3
  },
  {
    id: 5,
    category: "Science",
    question: "What is the atomic number of carbon?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1
  },
  
  // Geography Questions
  {
    id: 6,
    category: "Geography",
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: 2
  },
  {
    id: 7,
    category: "Geography",
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: 1
  },
  {
    id: 8,
    category: "Geography",
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: 1
  },
  {
    id: 9,
    category: "Geography",
    question: "Which desert is the largest in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
    correctAnswer: 3
  },
  {
    id: 10,
    category: "Geography",
    question: "What is the highest mountain in Africa?",
    options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Stanley", "Atlas Mountains"],
    correctAnswer: 1
  },

  // History Questions
  {
    id: 11,
    category: "History",
    question: "In which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2
  },
  {
    id: 12,
    category: "History",
    question: "Who was the first President of the United States?",
    options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
    correctAnswer: 2
  },
  {
    id: 13,
    category: "History",
    question: "The ancient city of Rome was built on how many hills?",
    options: ["5", "7", "9", "11"],
    correctAnswer: 1
  },
  {
    id: 14,
    category: "History",
    question: "What year did the Berlin Wall fall?",
    options: ["1987", "1989", "1991", "1993"],
    correctAnswer: 1
  },
  {
    id: 15,
    category: "History",
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    correctAnswer: 1
  },

  // Sports Questions
  {
    id: 16,
    category: "Sports",
    question: "How many players are on a soccer team on the field?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2
  },
  {
    id: 17,
    category: "Sports",
    question: "In which sport would you perform a slam dunk?",
    options: ["Volleyball", "Basketball", "Tennis", "Baseball"],
    correctAnswer: 1
  },
  {
    id: 18,
    category: "Sports",
    question: "How many rings are on the Olympic flag?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1
  },
  {
    id: 19,
    category: "Sports",
    question: "What is the maximum score in ten-pin bowling?",
    options: ["200", "250", "300", "350"],
    correctAnswer: 2
  },
  {
    id: 20,
    category: "Sports",
    question: "In which country did the Olympics originate?",
    options: ["Italy", "Greece", "Egypt", "Turkey"],
    correctAnswer: 1
  },

  // Literature Questions
  {
    id: 21,
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1
  },
  {
    id: 22,
    category: "Literature",
    question: "What is the first book in the Harry Potter series?",
    options: ["Chamber of Secrets", "Prisoner of Azkaban", "Philosopher's Stone", "Goblet of Fire"],
    correctAnswer: 2
  },
  {
    id: 23,
    category: "Literature",
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
    correctAnswer: 0
  },
  {
    id: 24,
    category: "Literature",
    question: "What is the name of Sherlock Holmes' assistant?",
    options: ["Dr. Wilson", "Dr. Watson", "Dr. House", "Dr. Jekyll"],
    correctAnswer: 1
  },
  {
    id: 25,
    category: "Literature",
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Charlotte Bronte", "Emily Bronte", "Jane Austen", "Mary Shelley"],
    correctAnswer: 2
  },

  // Music Questions
  {
    id: 26,
    category: "Music",
    question: "How many strings does a standard guitar have?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2
  },
  {
    id: 27,
    category: "Music",
    question: "Who is known as the 'King of Pop'?",
    options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
    correctAnswer: 1
  },
  {
    id: 28,
    category: "Music",
    question: "What is the highest female singing voice?",
    options: ["Alto", "Soprano", "Mezzo-soprano", "Contralto"],
    correctAnswer: 1
  },
  {
    id: 29,
    category: "Music",
    question: "Which instrument has 88 keys?",
    options: ["Organ", "Synthesizer", "Piano", "Harpsichord"],
    correctAnswer: 2
  },
  {
    id: 30,
    category: "Music",
    question: "Who composed the 'Four Seasons'?",
    options: ["Mozart", "Beethoven", "Vivaldi", "Bach"],
    correctAnswer: 2
  },

  // Movies & TV Questions
  {
    id: 31,
    category: "Movies & TV",
    question: "What year was the first Star Wars movie released?",
    options: ["1975", "1977", "1979", "1981"],
    correctAnswer: 1
  },
  {
    id: 32,
    category: "Movies & TV",
    question: "Who directed 'Jurassic Park'?",
    options: ["George Lucas", "James Cameron", "Steven Spielberg", "Ridley Scott"],
    correctAnswer: 2
  },
  {
    id: 33,
    category: "Movies & TV",
    question: "What is the highest-grossing film of all time (not adjusted for inflation)?",
    options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"],
    correctAnswer: 1
  },
  {
    id: 34,
    category: "Movies & TV",
    question: "In which city is the TV show 'Friends' set?",
    options: ["Los Angeles", "Chicago", "New York", "Boston"],
    correctAnswer: 2
  },
  {
    id: 35,
    category: "Movies & TV",
    question: "Who played Jack in 'Titanic'?",
    options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"],
    correctAnswer: 1
  },

  // Technology Questions
  {
    id: 36,
    category: "Technology",
    question: "What does 'HTTP' stand for?",
    options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Process", "High Tech Transfer Protocol"],
    correctAnswer: 0
  },
  {
    id: 37,
    category: "Technology",
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
    correctAnswer: 1
  },
  {
    id: 38,
    category: "Technology",
    question: "What does 'CPU' stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Processor Union", "Computer Processing Unit"],
    correctAnswer: 0
  },
  {
    id: 39,
    category: "Technology",
    question: "In what year was the first iPhone released?",
    options: ["2005", "2006", "2007", "2008"],
    correctAnswer: 2
  },
  {
    id: 40,
    category: "Technology",
    question: "What does 'WWW' stand for?",
    options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"],
    correctAnswer: 0
  },

  // Food & Drink Questions
  {
    id: 41,
    category: "Food & Drink",
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Pepper", "Onion"],
    correctAnswer: 1
  },
  {
    id: 42,
    category: "Food & Drink",
    question: "Which country is the origin of the croissant?",
    options: ["France", "Italy", "Austria", "Belgium"],
    correctAnswer: 2
  },
  {
    id: 43,
    category: "Food & Drink",
    question: "What type of pasta is shaped like little ears?",
    options: ["Fusilli", "Penne", "Orecchiette", "Farfalle"],
    correctAnswer: 2
  },
  {
    id: 44,
    category: "Food & Drink",
    question: "What is the most expensive spice in the world by weight?",
    options: ["Vanilla", "Saffron", "Cardamom", "Cinnamon"],
    correctAnswer: 1
  },
  {
    id: 45,
    category: "Food & Drink",
    question: "Which fruit has its seeds on the outside?",
    options: ["Raspberry", "Blackberry", "Strawberry", "Blueberry"],
    correctAnswer: 2
  },

  // Animals Questions
  {
    id: 46,
    category: "Animals",
    question: "What is the fastest land animal?",
    options: ["Lion", "Cheetah", "Leopard", "Gazelle"],
    correctAnswer: 1
  },
  {
    id: 47,
    category: "Animals",
    question: "How many hearts does an octopus have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2
  },
  {
    id: 48,
    category: "Animals",
    question: "What is the largest species of bear?",
    options: ["Grizzly Bear", "Polar Bear", "Brown Bear", "Black Bear"],
    correctAnswer: 1
  },
  {
    id: 49,
    category: "Animals",
    question: "Which bird is known for its ability to mimic human speech?",
    options: ["Eagle", "Parrot", "Crow", "Owl"],
    correctAnswer: 1
  },
  {
    id: 50,
    category: "Animals",
    question: "What is a group of lions called?",
    options: ["Pack", "Herd", "Pride", "Flock"],
    correctAnswer: 2
  },

  // Mathematics Questions
  {
    id: 51,
    category: "Mathematics",
    question: "What is the value of Pi (π) to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctAnswer: 1
  },
  {
    id: 52,
    category: "Mathematics",
    question: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1
  },
  {
    id: 53,
    category: "Mathematics",
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1
  },
  {
    id: 54,
    category: "Mathematics",
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2
  },
  {
    id: 55,
    category: "Mathematics",
    question: "What is 7 × 8?",
    options: ["54", "56", "58", "60"],
    correctAnswer: 1
  },

  // Art Questions
  {
    id: 56,
    category: "Art",
    question: "Which artist cut off part of his own ear?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dali"],
    correctAnswer: 1
  },
  {
    id: 57,
    category: "Art",
    question: "In which museum is the Mona Lisa displayed?",
    options: ["British Museum", "Louvre Museum", "Uffizi Gallery", "Metropolitan Museum"],
    correctAnswer: 1
  },
  {
    id: 58,
    category: "Art",
    question: "What art movement is Salvador Dali associated with?",
    options: ["Impressionism", "Cubism", "Surrealism", "Expressionism"],
    correctAnswer: 2
  },
  {
    id: 59,
    category: "Art",
    question: "Who painted 'The Starry Night'?",
    options: ["Claude Monet", "Vincent van Gogh", "Paul Cezanne", "Edgar Degas"],
    correctAnswer: 1
  },
  {
    id: 60,
    category: "Art",
    question: "What is the primary color that cannot be made by mixing other colors?",
    options: ["Green", "Orange", "Red", "Purple"],
    correctAnswer: 2
  },

  // Indian General Knowledge Questions
  {
    id: 61,
    category: "Indian General Knowledge",
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Bangalore", "Kolkata"],
    correctAnswer: 1
  },
  {
    id: 62,
    category: "Indian General Knowledge",
    question: "Who is known as the Father of the Nation in India?",
    options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
    correctAnswer: 2
  },
  {
    id: 63,
    category: "Indian General Knowledge",
    question: "In which year did India gain independence?",
    options: ["1945", "1947", "1950", "1952"],
    correctAnswer: 1
  },
  {
    id: 64,
    category: "Indian General Knowledge",
    question: "What is the national animal of India?",
    options: ["Lion", "Elephant", "Bengal Tiger", "Peacock"],
    correctAnswer: 2
  },
  {
    id: 65,
    category: "Indian General Knowledge",
    question: "Which is the longest river in India?",
    options: ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
    correctAnswer: 1
  },
  {
    id: 66,
    category: "Indian General Knowledge",
    question: "Who was the first Prime Minister of India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad"],
    correctAnswer: 1
  },
  {
    id: 67,
    category: "Indian General Knowledge",
    question: "What is the national sport of India?",
    options: ["Cricket", "Football", "Hockey", "Kabaddi"],
    correctAnswer: 2
  },
  {
    id: 68,
    category: "Indian General Knowledge",
    question: "Which Indian city is known as the 'Silicon Valley of India'?",
    options: ["Hyderabad", "Pune", "Bangalore", "Chennai"],
    correctAnswer: 2
  },
  {
    id: 69,
    category: "Indian General Knowledge",
    question: "Who wrote the Indian National Anthem 'Jana Gana Mana'?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhas Chandra Bose"],
    correctAnswer: 1
  },
  {
    id: 70,
    category: "Indian General Knowledge",
    question: "What is the currency of India?",
    options: ["Rupee", "Dollar", "Pound", "Yen"],
    correctAnswer: 0
  },
  {
    id: 71,
    category: "Indian General Knowledge",
    question: "Which monument is also known as the 'Symbol of Love'?",
    options: ["Red Fort", "Qutub Minar", "Taj Mahal", "India Gate"],
    correctAnswer: 2
  },
  {
    id: 72,
    category: "Indian General Knowledge",
    question: "How many states are there in India?",
    options: ["27", "28", "29", "30"],
    correctAnswer: 1
  },
  {
    id: 73,
    category: "Indian General Knowledge",
    question: "Which Indian festival is known as the 'Festival of Lights'?",
    options: ["Holi", "Diwali", "Durga Puja", "Eid"],
    correctAnswer: 1
  },
  {
    id: 74,
    category: "Indian General Knowledge",
    question: "Who was the first President of India?",
    options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Dr. Zakir Husain", "V.V. Giri"],
    correctAnswer: 0
  },
  {
    id: 75,
    category: "Indian General Knowledge",
    question: "Which is the highest civilian award in India?",
    options: ["Padma Vibhushan", "Padma Bhushan", "Bharat Ratna", "Padma Shri"],
    correctAnswer: 2
  }
];

// Function to generate a deterministic set of questions based on a name
export function getQuestionsForName(name: string): Question[] {
  // Create a simple hash from the name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Use the hash as a seed for pseudo-random selection
  const shuffled = [...questionBank];
  
  // Fisher-Yates shuffle with seeded random
  let seed = Math.abs(hash);
  const seededRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Return first 5 questions
  return shuffled.slice(0, 5);
}
