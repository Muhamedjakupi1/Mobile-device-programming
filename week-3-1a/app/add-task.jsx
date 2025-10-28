import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function AddTask() {
    const [task, setTask] = useState("");
    const [error, setError] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const addTask = async () => {
        if (task.trim() === "") {
            setError("Task is required!");
        }

        if (task.length < 3) {
            setError("Task must be at least 3 characters!");
            return;
        }
        setError("");
        const newTask = { id: Date.now().toString(), title: task };

        const stored = await AsyncStorage.getItem("tasks");
        const tasks = stored ? JSON.parse(stored) : [];
        tasks.push(newTask);

        await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
        setTask("");
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false)
        router.push("/")
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
                <Text style={styles.title}>Add New Task</Text>
                <Link href="/" style={{ marginTop: 10, color: "#007AFF" }}>
                    ← Back to Tasks
                </Link>
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a new task"
                    value={task}
                    onChangeText={setTask}
                />
                <TouchableOpacity style={styles.addBtn} onPress={addTask}>
                    <Text style={styles.btnText}>Add</Text>
                </TouchableOpacity>
            </View>
            {error ? <Text style={{color: 'red', fontSize: 14}}>{error}</Text> : null}
            <Modal visible={modalVisible} transparent animationType="fade">
                <View style={styles.modalOVerlay}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>Task created successfully!</Text>
                        <TouchableOpacity onPress={handleModalClose}>
                            <Text style={styles.modalBtn}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {padding: 20 },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
    row: { flexDirection: "row", marginBottom: 12 },
    input: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 10,
        height: 40
    },
    addBtn: {
        backgroundColor: "#007AFF",
        marginLeft: 8,
        paddingHorizontal: 16,
        justifyContent: "center",
        borderRadius: 8,
    },
    btnText: { color: "white", fontWeight: "bold" },
    modalOVerlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    modalBox: {
        backgroundColor: "white",
        borderRadius: 8,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
        width: "80%",
        minHeight: 180
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    modalBtn: {
        backgroundColor: "#007AFF",
        color: "white",
        padding: 10,
        borderRadius: 8
    }
});
