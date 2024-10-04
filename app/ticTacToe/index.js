import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Tic Tac Toe Component
const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));  // 3x3 board
    const [isXNext, setIsXNext] = useState(true);             // Track turn: 'X' or 'O'
    const [winner, setWinner] = useState(null);               // Track the winner

    // Handle the press event for a cell
    const handlePress = (index) => {
        if (winner || board[index]) return; // Ignore clicks if game over or cell occupied

        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O'; // Update board with 'X' or 'O'
        setBoard(newBoard);
        setIsXNext(!isXNext);

        const gameWinner = calculateWinner(newBoard);
        if (gameWinner) setWinner(gameWinner); // Check for a winner
    };

    // Restart the game
    const restartGame = () => {
        setBoard(Array(9).fill(null));  // Reset board
        setIsXNext(true);               // Set to 'X' starts
        setWinner(null);                // Clear winner
    };

    // Check for a winner
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6],            // Diagonals
        ];

        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]; // Return 'X' or 'O' as the winner
            }
        }

        return null; // No winner
    };

    // Check for a tie
    const isTie = () => {
        return board.every((cell) => cell !== null) && !winner;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>
            <View style={styles.board}>
                {board.map((cell, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.cell}
                        onPress={() => handlePress(index)}
                    >
                        <Text style={styles.cellText}>{cell}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {winner && <Text style={styles.winnerText}>Winner: {winner}!</Text>}
            {isTie() && !winner && <Text style={styles.winnerText}>It's a Tie!</Text>}

            <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
                <Text style={styles.restartButtonText}>Restart Game</Text>
            </TouchableOpacity>
        </View>
    );
};

// Get screen dimensions for responsive design
const screen = Dimensions.get('window');

// Styling for the application
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    board: {
        width: screen.width * 0.8,
        height: screen.width * 0.8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    cell: {
        width: '30%',
        height: '30%',
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1.5%',
        borderRadius: 10,
    },
    cellText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
    },
    winnerText: {
        fontSize: 24,
        marginTop: 20,
        color: '#333',
    },
    restartButton: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 10,
    },
    restartButtonText: {
        fontSize: 18,
        color: '#fff',
    },
});

export default TicTacToe;
