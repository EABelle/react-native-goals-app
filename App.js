import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [ courseGoals, setCourseGoals ] = useState([]);
    const [ isAddMode, setIsAddMode ] = useState(false);

    const addGoalHandler = (title) => {
        setCourseGoals(currentGoals => [...currentGoals, {
            id: Math.random().toString(),
            value: title
        }]);
        setIsAddMode(false);
    };

    const removeGoalHandler = (id) => {
        setCourseGoals(currentGoals =>
            currentGoals.filter(goal => id !== goal.id)
        );
    };

    const cancelHandler = () => {
        setIsAddMode(false);
    };

    return (
    <View style={styles.screen}>
        <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelHandler} />
        <FlatList
            keyExtractor={(item, index) => `${item.id}.${index}`}
            data={courseGoals}
            renderItem={(itemData) =>
                <GoalItem
                    id={itemData.item.id}
                    title={itemData.item.value}
                    onDelete={removeGoalHandler}
                />
            }
        />
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
});
