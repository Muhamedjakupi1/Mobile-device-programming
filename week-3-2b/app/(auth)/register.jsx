import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Alert } from "react-native";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { router } from "expo-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const validateInputs = () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("All fields are required");
      return false;
    }
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      setError("Email is not valid");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    setError("");
    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) return;
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      setModalVisible(true);
    } catch (err) {
      setError(err.code === "auth/email-already-in-use" ? "Email already exists" : err.message);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      console.log("Starting Google Sign In...");
      
      // Përdor signInWithPopup
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign In Successful!", result);
      
      setLoading(false);
      router.push("/"); // Shko në faqen kryesore
      
    } catch (err) {
      console.log("Google Sign In Error:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.btn} onPress={handleSignUp} disabled={loading}>
        <Text style={styles.btnText}>{loading ? "Creating user..." : "Create Account"}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, styles.googleBtn]}
        onPress={handleGoogleSignIn}
        disabled={loading}
      >
        <Text style={styles.btnText}>
          {loading ? "Signing in..." : "Sign up with Google"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.link}>Already have an account? Log In</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Success!</Text>
            <Text style={styles.modalText}>User created successfully!</Text>
            <TouchableOpacity onPress={handleModalClose} style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 20,
    backgroundColor: "#fff"
  },
  title: { 
    fontSize: 26, 
    fontWeight: "bold", 
    marginBottom: 25, 
    textAlign: "center" 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 12, 
    marginVertical: 5, 
    borderRadius: 8 
  },
  btn: { 
    backgroundColor: "#007AFF", 
    padding: 14, 
    borderRadius: 8, 
    marginTop: 15 
  },
  googleBtn: {
    backgroundColor: "#DB4437",
  },
  btnText: { 
    color: "white", 
    textAlign: "center", 
    fontWeight: "600" 
  },
  link: { 
    marginTop: 10, 
    textAlign: "center", 
    color: "#007AFF" 
  },
  error: { 
    color: "red", 
    marginTop: 10, 
    textAlign: "center" 
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center"
  },
  modalBtn: { 
    backgroundColor: "#007AFF", 
    padding: 10, 
    borderRadius: 8, 
    width: "100%"
  },
  modalBtnText: { 
    color: "white", 
    textAlign: "center", 
    fontWeight: "bold" 
  },
});