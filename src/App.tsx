import React, { useState } from 'react';
import { BookOpen, CheckCircle2, CircleDot, GraduationCap, RotateCcw } from 'lucide-react';

type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
};

type Category = {
  id: string;
  title: string;
  icon: React.ReactNode;
  questions: Question[];
};

const categories: Category[] = [
  {
    id: 'a1',
    title: 'A1 Level Test',
    icon: <BookOpen className="w-6 h-6" />,
    questions: [
      {
        id: 1,
        text: 'What ___ your name?',
        options: ['is', 'are', 'am', 'be'],
        correctAnswer: 'is'
      },
      {
        id: 2,
        text: 'She ___ from Spain.',
        options: ['is', 'are', 'am', 'be'],
        correctAnswer: 'is'
      },
      {
        id: 3,
        text: 'How old ___ you?',
        options: ['is', 'are', 'am', 'be'],
        correctAnswer: 'are'
      },
      {
        id: 4,
        text: '___ you like coffee?',
        options: ['Do', 'Does', 'Are', 'Is'],
        correctAnswer: 'Do'
      },
      {
        id: 5,
        text: 'I ___ a student.',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 'am'
      },
      {
        id: 6,
        text: 'They ___ my friends.',
        options: ['are', 'is', 'am', 'be'],
        correctAnswer: 'are'
      },
      {
        id: 7,
        text: '___ he your brother?',
        options: ['Is', 'Are', 'Am', 'Be'],
        correctAnswer: 'Is'
      },
      {
        id: 8,
        text: 'We ___ students.',
        options: ['are', 'is', 'am', 'be'],
        correctAnswer: 'are'
      },
      {
        id: 9,
        text: '___ this your book?',
        options: ['Is', 'Are', 'Am', 'Be'],
        correctAnswer: 'Is'
      },
      {
        id: 10,
        text: 'I ___ not from England.',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 'am'
      },
      {
        id: 11,
        text: '___ there a bank near here?',
        options: ['Is', 'Are', 'Am', 'Be'],
        correctAnswer: 'Is'
      },
      {
        id: 12,
        text: 'The books ___ on the table.',
        options: ['are', 'is', 'am', 'be'],
        correctAnswer: 'are'
      },
      {
        id: 13,
        text: '___ you hungry?',
        options: ['Are', 'Is', 'Am', 'Be'],
        correctAnswer: 'Are'
      },
      {
        id: 14,
        text: 'She ___ not happy.',
        options: ['is', 'are', 'am', 'be'],
        correctAnswer: 'is'
      },
      {
        id: 15,
        text: '___ these your keys?',
        options: ['Are', 'Is', 'Am', 'Be'],
        correctAnswer: 'Are'
      }
    ]
  },
  {
    id: 'a2',
    title: 'A2 Level Test',
    icon: <GraduationCap className="w-6 h-6" />,
    questions: [
      {
        id: 1,
        text: 'He usually ___ coffee in the morning.',
        options: ['drink', 'drinks', 'drinking', 'is drinking'],
        correctAnswer: 'drinks'
      },
      {
        id: 2,
        text: 'What time ___ the movie start?',
        options: ['do', 'does', 'is', 'are'],
        correctAnswer: 'does'
      },
      {
        id: 3,
        text: 'They ___ in London for two years.',
        options: ['live', 'lives', 'living', 'lived'],
        correctAnswer: 'lived'
      },
      {
        id: 4,
        text: 'I ___ to the gym twice a week.',
        options: ['go', 'goes', 'going', 'went'],
        correctAnswer: 'go'
      },
      {
        id: 5,
        text: '___ you ever visited Paris?',
        options: ['Have', 'Has', 'Did', 'Do'],
        correctAnswer: 'Have'
      },
      {
        id: 6,
        text: 'She ___ her homework yesterday.',
        options: ['finished', 'finishes', 'finish', 'finishing'],
        correctAnswer: 'finished'
      },
      {
        id: 7,
        text: 'We ___ to the beach next weekend.',
        options: ['are going', 'go', 'goes', 'went'],
        correctAnswer: 'are going'
      },
      {
        id: 8,
        text: '___ you like to watch movies?',
        options: ['Do', 'Does', 'Are', 'Is'],
        correctAnswer: 'Do'
      },
      {
        id: 9,
        text: 'He ___ English for five years.',
        options: ['has studied', 'studied', 'studies', 'studying'],
        correctAnswer: 'has studied'
      },
      {
        id: 10,
        text: 'I ___ television last night.',
        options: ['watched', 'watch', 'watches', 'watching'],
        correctAnswer: 'watched'
      },
      {
        id: 11,
        text: 'They ___ to the party tomorrow.',
        options: ['will come', 'come', 'comes', 'came'],
        correctAnswer: 'will come'
      },
      {
        id: 12,
        text: '___ you help me with this?',
        options: ['Could', 'Can', 'Will', 'Should'],
        correctAnswer: 'Could'
      },
      {
        id: 13,
        text: 'She ___ never been to Japan.',
        options: ['has', 'have', 'had', 'having'],
        correctAnswer: 'has'
      },
      {
        id: 14,
        text: 'We ___ lunch when you called.',
        options: ['were having', 'had', 'have', 'having'],
        correctAnswer: 'were having'
      },
      {
        id: 15,
        text: '___ you mind opening the window?',
        options: ['Would', 'Will', 'Could', 'Should'],
        correctAnswer: 'Would'
      }
    ]
  },
  {
    id: 'present-simple',
    title: 'Present Simple',
    icon: <CircleDot className="w-6 h-6" />,
    questions: [
      {
        id: 1,
        text: 'She ___ tennis every weekend.',
        options: ['plays', 'play', 'playing', 'is playing'],
        correctAnswer: 'plays'
      },
      {
        id: 2,
        text: 'We ___ to work by bus.',
        options: ['go', 'goes', 'going', 'is going'],
        correctAnswer: 'go'
      },
      {
        id: 3,
        text: 'The sun ___ in the east.',
        options: ['rises', 'rise', 'rising', 'is rising'],
        correctAnswer: 'rises'
      },
      {
        id: 4,
        text: 'He ___ breakfast at 8 AM.',
        options: ['has', 'have', 'having', 'is having'],
        correctAnswer: 'has'
      },
      {
        id: 5,
        text: 'They ___ in London.',
        options: ['live', 'lives', 'living', 'is living'],
        correctAnswer: 'live'
      },
      {
        id: 6,
        text: 'The shop ___ at 9 AM.',
        options: ['opens', 'open', 'opening', 'is opening'],
        correctAnswer: 'opens'
      },
      {
        id: 7,
        text: 'I ___ coffee every morning.',
        options: ['drink', 'drinks', 'drinking', 'is drinking'],
        correctAnswer: 'drink'
      },
      {
        id: 8,
        text: 'The train ___ at 3 PM.',
        options: ['leaves', 'leave', 'leaving', 'is leaving'],
        correctAnswer: 'leaves'
      },
      {
        id: 9,
        text: 'She ___ English very well.',
        options: ['speaks', 'speak', 'speaking', 'is speaking'],
        correctAnswer: 'speaks'
      },
      {
        id: 10,
        text: 'The bank ___ on Sundays.',
        options: ['closes', 'close', 'closing', 'is closing'],
        correctAnswer: 'closes'
      },
      {
        id: 11,
        text: 'Water ___ at 100 degrees Celsius.',
        options: ['boils', 'boil', 'boiling', 'is boiling'],
        correctAnswer: 'boils'
      },
      {
        id: 12,
        text: 'My sister ___ as a doctor.',
        options: ['works', 'work', 'working', 'is working'],
        correctAnswer: 'works'
      },
      {
        id: 13,
        text: 'The Earth ___ around the Sun.',
        options: ['moves', 'move', 'moving', 'is moving'],
        correctAnswer: 'moves'
      },
      {
        id: 14,
        text: 'He ___ his teeth twice a day.',
        options: ['brushes', 'brush', 'brushing', 'is brushing'],
        correctAnswer: 'brushes'
      },
      {
        id: 15,
        text: 'The library ___ at 8 PM.',
        options: ['closes', 'close', 'closing', 'is closing'],
        correctAnswer: 'closes'
      }
    ]
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous',
    icon: <CheckCircle2 className="w-6 h-6" />,
    questions: [
      {
        id: 1,
        text: 'Look! It ___ right now.',
        options: ['is raining', 'rains', 'rain', 'raining'],
        correctAnswer: 'is raining'
      },
      {
        id: 2,
        text: 'What ___ you ___ right now?',
        options: ['are/doing', 'do/do', 'is/doing', 'does/do'],
        correctAnswer: 'are/doing'
      },
      {
        id: 3,
        text: 'They ___ for their exam this week.',
        options: ['are studying', 'study', 'studies', 'studying'],
        correctAnswer: 'are studying'
      },
      {
        id: 4,
        text: 'She ___ dinner at the moment.',
        options: ['is cooking', 'cooks', 'cook', 'cooking'],
        correctAnswer: 'is cooking'
      },
      {
        id: 5,
        text: 'I ___ to music right now.',
        options: ['am listening', 'listen', 'listens', 'listening'],
        correctAnswer: 'am listening'
      },
      {
        id: 6,
        text: 'The children ___ in the garden.',
        options: ['are playing', 'play', 'plays', 'playing'],
        correctAnswer: 'are playing'
      },
      {
        id: 7,
        text: 'He ___ a book at the moment.',
        options: ['is reading', 'reads', 'read', 'reading'],
        correctAnswer: 'is reading'
      },
      {
        id: 8,
        text: 'We ___ lunch right now.',
        options: ['are having', 'have', 'has', 'having'],
        correctAnswer: 'are having'
      },
      {
        id: 9,
        text: 'The sun ___ brightly today.',
        options: ['is shining', 'shines', 'shine', 'shining'],
        correctAnswer: 'is shining'
      },
      {
        id: 10,
        text: '___ it ___ outside?',
        options: ['Is/snowing', 'Does/snow', 'Do/snow', 'Are/snowing'],
        correctAnswer: 'Is/snowing'
      },
      {
        id: 11,
        text: 'They ___ to move to a new house.',
        options: ['are planning', 'plan', 'plans', 'planning'],
        correctAnswer: 'are planning'
      },
      {
        id: 12,
        text: 'The baby ___ peacefully.',
        options: ['is sleeping', 'sleeps', 'sleep', 'sleeping'],
        correctAnswer: 'is sleeping'
      },
      {
        id: 13,
        text: 'Why ___ you ___ at me?',
        options: ['are/looking', 'do/look', 'does/look', 'is/looking'],
        correctAnswer: 'are/looking'
      },
      {
        id: 14,
        text: 'The situation ___ worse.',
        options: ['is getting', 'gets', 'get', 'getting'],
        correctAnswer: 'is getting'
      },
      {
        id: 15,
        text: 'I ___ forward to the weekend.',
        options: ['am looking', 'look', 'looks', 'looking'],
        correctAnswer: 'am looking'
      }
    ]
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    if (selectedCategory && answer === selectedCategory.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex === (selectedCategory?.questions.length || 0) - 1) {
        setShowResult(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      }
    }, 1000);
  };

  const resetTest = () => {
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">English Knowledge Tests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
            >
              <div className="text-blue-600">{category.icon}</div>
              <span className="text-lg font-medium text-gray-700">{category.title}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Test Complete!</h2>
          <p className="text-lg text-gray-600 mb-4">
            Your score: {score}/{selectedCategory.questions.length}
          </p>
          <p className="text-gray-600 mb-6">
            {score === selectedCategory.questions.length
              ? 'Perfect! Excellent work! 🎉'
              : score >= selectedCategory.questions.length / 2
              ? 'Good job! Keep practicing! 👍'
              : 'Keep studying! You can do better! 💪'}
          </p>
          <button
            onClick={resetTest}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 w-full"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Try Another Test</span>
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = selectedCategory.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">{selectedCategory.title}</h2>
            <span className="text-gray-600">
              Question {currentQuestionIndex + 1}/{selectedCategory.questions.length}
            </span>
          </div>
          <p className="text-lg text-gray-700 mb-6">{currentQuestion.text}</p>
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                disabled={selectedAnswer !== null}
                className={`w-full p-3 rounded-lg text-left transition-colors ${
                  selectedAnswer === null
                    ? 'hover:bg-gray-100 bg-gray-50'
                    : selectedAnswer === option
                    ? option === currentQuestion.correctAnswer
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                    : option === currentQuestion.correctAnswer
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-50 text-gray-500'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={resetTest}
          className="text-gray-600 hover:text-gray-800 flex items-center justify-center space-x-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Back to Categories</span>
        </button>
      </div>
    </div>
  );
}

export default App;