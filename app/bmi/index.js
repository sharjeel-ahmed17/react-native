import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState('');

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100; // convert height to meters
            const calculatedBMI = weight / (heightInMeters * heightInMeters);
            setBmi(calculatedBMI.toFixed(2)); // round BMI to 2 decimal places
            classifyBMI(calculatedBMI);
        } else {
            alert('Please enter both weight and height');
        }
    };

    const classifyBMI = (bmiValue) => {
        if (bmiValue < 18.5) {
            setBmiCategory('Underweight');
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            setBmiCategory('Normal weight');
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            setBmiCategory('Overweight');
        } else {
            setBmiCategory('Obese');
        }
    };

    const resetInput = () => {
        setWeight('');
        setHeight('');
        setBmi(null);
        setBmiCategory('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter weight in kg"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter height in cm"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
            />

            <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                <Text style={styles.buttonText}>Calculate BMI</Text>
            </TouchableOpacity>

            {bmi && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Your BMI: {bmi}</Text>
                    <Text style={styles.resultCategory}>{bmiCategory}</Text>
                </View>
            )}

            <TouchableOpacity style={styles.resetButton} onPress={resetInput}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
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
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        width: '80%',
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    resultCategory: {
        fontSize: 18,
        marginTop: 10,
        color: '#333',
    },
    resetButton: {
        width: '80%',
        backgroundColor: '#e74c3c',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
});

export default BMICalculator;
