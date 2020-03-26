import React, { useState } from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from "react-native";

const GoalInput = props => {
    const [ enteredGoal, setEnteredGoal ] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    const cancelHandler = () => {
        props.onCancel();
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button title="CANCEL" color="red" onPress={cancelHandler}/>
                    </View>
                    <View style={styles.button} >
                        <Button title="ADD" onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        width: '80%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;
