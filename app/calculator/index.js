import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    // Handle button press
    const handlePress = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input).toString());  // Calculate result
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');  // Clear input and result
            setResult('');
        } else {
            setInput((prev) => prev + value);  // Append value to input
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.input}>{input}</Text>
            <Text style={styles.result}>{result}</Text>

            <View style={styles.row}>
                <Button value="7" onPress={handlePress} />
                <Button value="8" onPress={handlePress} />
                <Button value="9" onPress={handlePress} />
                <Button value="/" onPress={handlePress} />
            </View>

            <View style={styles.row}>
                <Button value="4" onPress={handlePress} />
                <Button value="5" onPress={handlePress} />
                <Button value="6" onPress={handlePress} />
                <Button value="*" onPress={handlePress} />
            </View>

            <View style={styles.row}>
                <Button value="1" onPress={handlePress} />
                <Button value="2" onPress={handlePress} />
                <Button value="3" onPress={handlePress} />
                <Button value="-" onPress={handlePress} />
            </View>

            <View style={styles.row}>
                <Button value="0" onPress={handlePress} />
                <Button value="C" onPress={handlePress} />
                <Button value="=" onPress={handlePress} />
                <Button value="+" onPress={handlePress} />
            </View>
        </View>
    );
};

// Button component
const Button = ({ value, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
        <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
);

// Get screen dimensions for responsiveness
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    input: {
        fontSize: 40,
        textAlign: 'right',
        marginBottom: 10,
        color: '#333',
    },
    result: {
        fontSize: 30,
        textAlign: 'right',
        marginBottom: 20,
        color: '#888',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#333',
        paddingVertical: screen.height * 0.04,
        paddingHorizontal: screen.width * 0.1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 24,
        color: '#fff',
    },
});

export default Calculator;