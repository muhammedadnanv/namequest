export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questionBank: Question[] = [
  // Indian History
  {
    id: 1,
    category: "Indian History",
    question: "In which year did India gain independence?",
    options: ["1945", "1947", "1950", "1952"],
    correctAnswer: 1
  },
  {
    id: 2,
    category: "Indian History",
    question: "Who was the first Prime Minister of India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad"],
    correctAnswer: 1
  },
  {
    id: 3,
    category: "Indian History",
    question: "Who was the first President of India?",
    options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Dr. Zakir Husain", "V.V. Giri"],
    correctAnswer: 0
  },
  {
    id: 4,
    category: "Indian History",
    question: "Who is known as the Father of the Nation in India?",
    options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
    correctAnswer: 2
  },
  {
    id: 5,
    category: "Indian History",
    question: "When was the Constitution of India adopted?",
    options: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1947"],
    correctAnswer: 2
  },
  {
    id: 6,
    category: "Indian History",
    question: "Who gave the slogan 'Give me blood, and I shall give you freedom'?",
    options: ["Mahatma Gandhi", "Bhagat Singh", "Subhas Chandra Bose", "Chandrashekhar Azad"],
    correctAnswer: 2
  },
  {
    id: 7,
    category: "Indian History",
    question: "The Quit India Movement was launched in which year?",
    options: ["1940", "1942", "1944", "1945"],
    correctAnswer: 1
  },
  {
    id: 8,
    category: "Indian History",
    question: "Who was known as the 'Iron Man of India'?",
    options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Lal Bahadur Shastri", "Indira Gandhi"],
    correctAnswer: 1
  },
  {
    id: 9,
    category: "Indian History",
    question: "The Jallianwala Bagh massacre took place in which year?",
    options: ["1917", "1919", "1921", "1923"],
    correctAnswer: 1
  },
  {
    id: 10,
    category: "Indian History",
    question: "Who was the first woman Prime Minister of India?",
    options: ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sonia Gandhi"],
    correctAnswer: 1
  },

  // Indian Geography
  {
    id: 11,
    category: "Indian Geography",
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Bangalore", "Kolkata"],
    correctAnswer: 1
  },
  {
    id: 12,
    category: "Indian Geography",
    question: "Which is the longest river in India?",
    options: ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
    correctAnswer: 1
  },
  {
    id: 13,
    category: "Indian Geography",
    question: "How many states are there in India?",
    options: ["27", "28", "29", "30"],
    correctAnswer: 1
  },
  {
    id: 14,
    category: "Indian Geography",
    question: "Which is the largest state in India by area?",
    options: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"],
    correctAnswer: 2
  },
  {
    id: 15,
    category: "Indian Geography",
    question: "Which Indian city is known as the 'Silicon Valley of India'?",
    options: ["Hyderabad", "Pune", "Bangalore", "Chennai"],
    correctAnswer: 2
  },
  {
    id: 16,
    category: "Indian Geography",
    question: "What is the southernmost point of India?",
    options: ["Kanyakumari", "Indira Point", "Cape Comorin", "Rameswaram"],
    correctAnswer: 1
  },
  {
    id: 17,
    category: "Indian Geography",
    question: "Which is the highest mountain peak in India?",
    options: ["Nanda Devi", "Kangchenjunga", "K2", "Mount Everest"],
    correctAnswer: 1
  },
  {
    id: 18,
    category: "Indian Geography",
    question: "Which state is known as the 'Land of Five Rivers'?",
    options: ["Haryana", "Punjab", "Himachal Pradesh", "Uttarakhand"],
    correctAnswer: 1
  },
  {
    id: 19,
    category: "Indian Geography",
    question: "Which is the smallest state in India by area?",
    options: ["Sikkim", "Tripura", "Goa", "Mizoram"],
    correctAnswer: 2
  },
  {
    id: 20,
    category: "Indian Geography",
    question: "Which desert is located in India?",
    options: ["Gobi Desert", "Sahara Desert", "Thar Desert", "Kalahari Desert"],
    correctAnswer: 2
  },

  // Indian Culture & Festivals
  {
    id: 21,
    category: "Indian Culture",
    question: "Which Indian festival is known as the 'Festival of Lights'?",
    options: ["Holi", "Diwali", "Durga Puja", "Eid"],
    correctAnswer: 1
  },
  {
    id: 22,
    category: "Indian Culture",
    question: "What is the national animal of India?",
    options: ["Lion", "Elephant", "Bengal Tiger", "Peacock"],
    correctAnswer: 2
  },
  {
    id: 23,
    category: "Indian Culture",
    question: "What is the national bird of India?",
    options: ["Eagle", "Peacock", "Parrot", "Sparrow"],
    correctAnswer: 1
  },
  {
    id: 24,
    category: "Indian Culture",
    question: "What is the national flower of India?",
    options: ["Rose", "Lotus", "Jasmine", "Sunflower"],
    correctAnswer: 1
  },
  {
    id: 25,
    category: "Indian Culture",
    question: "Who wrote the Indian National Anthem 'Jana Gana Mana'?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhas Chandra Bose"],
    correctAnswer: 1
  },
  {
    id: 26,
    category: "Indian Culture",
    question: "What is the national sport of India?",
    options: ["Cricket", "Football", "Hockey", "Kabaddi"],
    correctAnswer: 2
  },
  {
    id: 27,
    category: "Indian Culture",
    question: "Which classical dance form originates from Tamil Nadu?",
    options: ["Kathak", "Bharatanatyam", "Odissi", "Manipuri"],
    correctAnswer: 1
  },
  {
    id: 28,
    category: "Indian Culture",
    question: "Holi is known as the festival of what?",
    options: ["Lights", "Colors", "Harvest", "Victory"],
    correctAnswer: 1
  },
  {
    id: 29,
    category: "Indian Culture",
    question: "Which festival marks the beginning of the Hindu New Year?",
    options: ["Diwali", "Holi", "Ugadi", "Pongal"],
    correctAnswer: 2
  },
  {
    id: 30,
    category: "Indian Culture",
    question: "Which Indian state celebrates Onam festival?",
    options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
    correctAnswer: 1
  },

  // Indian Monuments & Heritage
  {
    id: 31,
    category: "Indian Monuments",
    question: "Which monument is also known as the 'Symbol of Love'?",
    options: ["Red Fort", "Qutub Minar", "Taj Mahal", "India Gate"],
    correctAnswer: 2
  },
  {
    id: 32,
    category: "Indian Monuments",
    question: "The Taj Mahal was built by which Mughal emperor?",
    options: ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"],
    correctAnswer: 1
  },
  {
    id: 33,
    category: "Indian Monuments",
    question: "In which city is the Red Fort located?",
    options: ["Agra", "Delhi", "Jaipur", "Lucknow"],
    correctAnswer: 1
  },
  {
    id: 34,
    category: "Indian Monuments",
    question: "The Gateway of India is located in which city?",
    options: ["Delhi", "Kolkata", "Mumbai", "Chennai"],
    correctAnswer: 2
  },
  {
    id: 35,
    category: "Indian Monuments",
    question: "Which monument is the tallest brick minaret in the world?",
    options: ["Charminar", "Qutub Minar", "Victoria Memorial", "Hawa Mahal"],
    correctAnswer: 1
  },

  // Indian Politics & Constitution
  {
    id: 36,
    category: "Indian Politics",
    question: "Which is the highest civilian award in India?",
    options: ["Padma Vibhushan", "Padma Bhushan", "Bharat Ratna", "Padma Shri"],
    correctAnswer: 2
  },
  {
    id: 37,
    category: "Indian Politics",
    question: "Who is known as the 'Father of the Indian Constitution'?",
    options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
    correctAnswer: 1
  },
  {
    id: 38,
    category: "Indian Politics",
    question: "How many fundamental rights are guaranteed by the Indian Constitution?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1
  },
  {
    id: 39,
    category: "Indian Politics",
    question: "When is Republic Day celebrated in India?",
    options: ["15 August", "26 January", "2 October", "26 November"],
    correctAnswer: 1
  },
  {
    id: 40,
    category: "Indian Politics",
    question: "The President of India is elected for how many years?",
    options: ["4 years", "5 years", "6 years", "7 years"],
    correctAnswer: 1
  },

  // Indian Economy & Currency
  {
    id: 41,
    category: "Indian Economy",
    question: "What is the currency of India?",
    options: ["Rupee", "Dollar", "Pound", "Yen"],
    correctAnswer: 0
  },
  {
    id: 42,
    category: "Indian Economy",
    question: "Who is known as the 'Father of Indian Economics'?",
    options: ["Amartya Sen", "M.G. Ranade", "Manmohan Singh", "P. Chidambaram"],
    correctAnswer: 1
  },
  {
    id: 43,
    category: "Indian Economy",
    question: "The Reserve Bank of India was established in which year?",
    options: ["1930", "1935", "1940", "1945"],
    correctAnswer: 1
  },
  {
    id: 44,
    category: "Indian Economy",
    question: "Which Indian city is known as the 'Financial Capital of India'?",
    options: ["Delhi", "Bangalore", "Mumbai", "Kolkata"],
    correctAnswer: 2
  },
  {
    id: 45,
    category: "Indian Economy",
    question: "What is the symbol on the Indian rupee note?",
    options: ["Lotus", "Ashoka Chakra", "Rupee Symbol", "Tricolor"],
    correctAnswer: 2
  },

  // Indian Sports
  {
    id: 46,
    category: "Indian Sports",
    question: "Who is known as the 'God of Cricket' in India?",
    options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Kapil Dev"],
    correctAnswer: 2
  },
  {
    id: 47,
    category: "Indian Sports",
    question: "In which year did India win its first Cricket World Cup?",
    options: ["1975", "1983", "2007", "2011"],
    correctAnswer: 1
  },
  {
    id: 48,
    category: "Indian Sports",
    question: "Which Indian badminton player won the Olympic bronze medal in 2012?",
    options: ["P.V. Sindhu", "Saina Nehwal", "Jwala Gutta", "Ashwini Ponnappa"],
    correctAnswer: 1
  },
  {
    id: 49,
    category: "Indian Sports",
    question: "Who was the first Indian to win an individual Olympic gold medal?",
    options: ["Milkha Singh", "P.T. Usha", "Abhinav Bindra", "Leander Paes"],
    correctAnswer: 2
  },
  {
    id: 50,
    category: "Indian Sports",
    question: "Which Indian cricketer is known as 'Captain Cool'?",
    options: ["Sourav Ganguly", "Virat Kohli", "MS Dhoni", "Rahul Dravid"],
    correctAnswer: 2
  },

  // Indian Cinema
  {
    id: 51,
    category: "Indian Cinema",
    question: "Which is the largest film industry in India?",
    options: ["Tollywood", "Kollywood", "Bollywood", "Sandalwood"],
    correctAnswer: 2
  },
  {
    id: 52,
    category: "Indian Cinema",
    question: "Who is known as the 'King of Bollywood'?",
    options: ["Amitabh Bachchan", "Shah Rukh Khan", "Salman Khan", "Aamir Khan"],
    correctAnswer: 1
  },
  {
    id: 53,
    category: "Indian Cinema",
    question: "Which was the first Indian film to be nominated for an Oscar?",
    options: ["Lagaan", "Mother India", "Salaam Bombay", "Gandhi"],
    correctAnswer: 1
  },
  {
    id: 54,
    category: "Indian Cinema",
    question: "Who directed the movie 'Sholay'?",
    options: ["Yash Chopra", "Ramesh Sippy", "Raj Kapoor", "Guru Dutt"],
    correctAnswer: 1
  },
  {
    id: 55,
    category: "Indian Cinema",
    question: "Which Indian film won the Oscar for Best Original Song in 2009?",
    options: ["Lagaan", "Slumdog Millionaire", "3 Idiots", "Taare Zameen Par"],
    correctAnswer: 1
  },

  // Indian Science & Technology
  {
    id: 56,
    category: "Indian Science",
    question: "Who is known as the 'Missile Man of India'?",
    options: ["Vikram Sarabhai", "Homi Bhabha", "A.P.J. Abdul Kalam", "C.V. Raman"],
    correctAnswer: 2
  },
  {
    id: 57,
    category: "Indian Science",
    question: "Who was the first Indian woman to go to space?",
    options: ["Sunita Williams", "Kalpana Chawla", "Tessy Thomas", "Ritu Karidhal"],
    correctAnswer: 1
  },
  {
    id: 58,
    category: "Indian Science",
    question: "ISRO stands for?",
    options: ["Indian Space Research Organisation", "International Space Research Organisation", "Indian Scientific Research Organisation", "Indian Space Research Organization"],
    correctAnswer: 0
  },
  {
    id: 59,
    category: "Indian Science",
    question: "Which Indian scientist won the Nobel Prize in Physics in 1930?",
    options: ["Homi Bhabha", "C.V. Raman", "Vikram Sarabhai", "Jagadish Chandra Bose"],
    correctAnswer: 1
  },
  {
    id: 60,
    category: "Indian Science",
    question: "India's first satellite was named?",
    options: ["Rohini", "Bhaskara", "Aryabhata", "INSAT"],
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
