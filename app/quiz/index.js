import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: "Paris",
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Leo Tolstoy", "Mark Twain", "William Shakespeare", "Charles Dickens"],
        correctAnswer: "William Shakespeare",
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Mars", "Mercury", "Jupiter"],
        correctAnswer: "Mercury",
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
    },
];

const QuizApp = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleAnswer = (answer) => {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        if (answer === correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsQuizFinished(false);
    };

    return (
        <View style={styles.container}>
            {isQuizFinished ? (
                <View style={styles.scoreContainer}>
                    <Text style={styles.scoreText}>Your Score: {score} / {questions.length}</Text>
                    <TouchableOpacity style={styles.button} onPress={restartQuiz}>
                        <Text style={styles.buttonText}>Restart Quiz</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.quizContainer}>
                    <Text style={styles.question}>
                        {questions[currentQuestionIndex].question}
                    </Text>

                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.optionButton}
                            onPress={() => handleAnswer(option)}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    quizContainer: {
        width: '100%',
    },
    question: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    optionButton: {
        backgroundColor: '#3498db',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    optionText: {
        color: '#fff',
        fontSize: 18,
    },
    scoreContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#2ecc71',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default QuizApp;
