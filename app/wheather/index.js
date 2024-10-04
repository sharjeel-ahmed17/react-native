import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = '358fe43e4amshe3764f1f3955eb5p17b7f0jsnc2747aba7b8a';

const WheatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(response.data);
        } catch (error) {
            alert('City not found!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather App</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter City"
                value={city}
                onChangeText={setCity}
            />
            <TouchableOpacity style={styles.button} onPress={fetchWeather}>
                <Text style={styles.buttonText}>Get Weather</Text>
            </TouchableOpacity>

            {weatherData && (
                <View style={styles.weatherContainer}>
                    <Text style={styles.cityText}>{weatherData.name}</Text>
                    <Text style={styles.tempText}>{weatherData.main.temp} °C</Text>
                    <Text>{weatherData.weather[0].description}</Text>
                    <Text>Humidity: {weatherData.main.humidity}%</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5, width: '80%' },
    button: { backgroundColor: '#333', padding: 10, borderRadius: 5 },
    buttonText: { color: '#fff' },
    weatherContainer: { marginTop: 20 },
    cityText: { fontSize: 24, fontWeight: 'bold' },
    tempText: { fontSize: 48 },
});

export default WheatherApp;
