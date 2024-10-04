import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Todos = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);

    // Add a new todo item
    const addTodo = () => {
        if (!todo.trim()) {
            Alert.alert("Error", "Please enter a valid todo item");
            return;
        }

        if (editId) {
            const updatedTodos = todos.map(item =>
                item.id === editId ? { ...item, text: todo } : item
            );
            setTodos(updatedTodos);
            setEditId(null);
        } else {
            const newTodo = { id: Date.now().toString(), text: todo };
            setTodos([newTodo, ...todos]);
        }
        setTodo('');
    };

    // Delete a todo item
    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(item => item.id !== id);
        setTodos(filteredTodos);
    };

    // Edit a todo item
    const editTodo = (id) => {
        const itemToEdit = todos.find(item => item.id === id);
        setTodo(itemToEdit.text);
        setEditId(id);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Todo Application</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a todo"
                    value={todo}
                    onChangeText={setTodo}
                />
                <Button title={editId ? "Update" : "Add"} onPress={addTodo} />
            </View>

            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Text style={styles.todoText}>{item.text}</Text>
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={() => editTodo(item.id)}>
                                <Text style={styles.editButton}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                                <Text style={styles.deleteButton}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: "100%",
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    todoItem: {
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    todoText: {
        fontSize: 18,
        color: '#333',
    },
    actions: {
        flexDirection: 'row',
    },
    editButton: {
        color: '#007bff',
        marginRight: 10,
    },
    deleteButton: {
        color: '#ff4d4d',
    },
});

export default Todos;
