import React, { useState } from 'react';
import { Star } from "lucide-react";

export default function Quiz() {
    // --- 1. New Quiz Data ---
    const quizData = [
        {
          id: 1,
          question: "Who wears a special uniform called scrubs and helps the doctor take care of you at the hospital?",
          options: ["A Firefighter", "A Chef", "A Nurse", "A Teacher"],
          correctAnswer: "A Nurse", 
        },
        {
          id: 2,
          question: "What is the tool a doctor puts on your chest or back to listen to your heart and breathing?",
          options: ["A Toy Train", "A Headband", "A Stethoscope", "A Spoon"],
          correctAnswer: "A Stethoscope", 
        },
        {
          id: 3,
          question: "Where do we go when we feel very sick, have a big accident, and need a lot of help from doctors and nurses?",
          options: ["The Library", "The Supermarket", "The Hospital", "The Playground"],
          correctAnswer: "The Hospital", 
        },
        {
          id: 4,
          question: "If you fall down and get a small scratch, or 'boo-boo,' what does an adult put on it to keep it clean and help it heal?",
          options: ["A Bandage", "A Crayon", "A Water Balloon", "A Blanket"],
          correctAnswer: "A Bandage", 
        },
        {
          id: 5,
          question: "The doctor says, 'Let me check if your forehead is hot.' What is the tool they use to measure your body's temperature?",
          options: ["A Whistle", "A Shoe", "A Car Key", "A Thermometer"],
          correctAnswer: "A Thermometer", 
        },
    ];

    // --- 2. State Logic ---
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    // Function to handle the user selecting an answer
    const handleAnswerOptionClick = (selectedAnswer) => {
        // Check if the answer is correct and update the score
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        // Determine the next question index
        const nextQuestion = currentQuestion + 1;

        // Check if the quiz is over
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // If all questions are answered, show the final score
            setShowScore(true);
        }
    };
    
    // Get the current question object
    const currentQ = quizData[currentQuestion];

    return (
        <section id="quiz" className="scroll-mt-28 xl:scroll-mt-0 py-10">
            <div className="rounded-3xl bg-gray-50 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6 ">
                    <Star className="w-6 h-6 text-ink" />
                    <h2 className="text-lg font-semibold">Quiz</h2>
                </div>
                
                <div className="mt-4 flex flex-col gap-8 md:flex-row">
                    
                    {/* LEFT SIDE: Question/Score Display */}
                    <div className="space-y-6 w-full md:w-1/2">
                        
                        {showScore ? (
                            // --- SHOW FINAL SCORE ---
                            <div className="p-6 bg-white rounded-xl text-center shadow-lg">
                                <h3 className="text-xl font-bold text-sky-600 mb-4">Quiz Complete!</h3>
                                <p className="text-lg">
                                    You scored {score} out of {quizData.length}!
                                </p>
                                <p className="text-sm text-ink/70 mt-2">
                                    Great job learning about hospital helpers!
                                </p>
                            </div>
                        ) : (
                            // --- SHOW CURRENT QUESTION ---
                            <div className="space-y-3">
                                <div className="text-sm text-ink/70">
                                    Question {currentQ.id} of {quizData.length}:
                                </div>
                                <div className="font-bold text-xl mb-4">{currentQ.question}</div>
                                
                                <div className="mt-3 grid gap-2">
                                    {currentQ.options.map((a) => (
                                        <button
                                            key={a}
                                            // Pass the selected answer text to the handler
                                            onClick={() => handleAnswerOptionClick(a)}
                                            className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-left shadow-md hover:bg-sky-100 transition-colors duration-200"
                                        >
                                            {a}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                    </div>
                    
                    {/* RIGHT SIDE: Quiz Illustration (Always visible) */}
                    <div className="rounded-2xl min-h-64 grid place-items-center bg-white w-full md:w-1/2 p-4">
                        <img 
                            src="/images/quiz-doctor.png" 
                            alt="Cartoon Hippopotamus Doctor with Question Marks"
                            width="200px"
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}