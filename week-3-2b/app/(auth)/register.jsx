import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../../firebase';
import { router } from 'expo-router';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri } from 'expo-auth-session';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

const WEB_CLIENT_ID = '1051830478503-r2sbvrv5cppp425su9i1363hmio6nvv4.apps.googleusercontent.com';

const [request, response, promptAsync] = Google.useAuthRequest({
  // Use the same client ID for both Expo/Native proxy and Web
  expoClientId: WEB_CLIENT_ID,
  webClientId: WEB_CLIENT_ID, // <--- Add this line
  redirectUri: makeRedirectUri({ useProxy: true }),
});

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          setModalVisible(true);
        })
        .catch(err => setError(err.message));
    }
  }, [response]);

  const validateInputs = () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('All fields are required');
      return false;
    }
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      setError('Email is not valid');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    setError('');
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
      setError(err.code === 'auth/email-already-in-use' ? 'Email already exists' : err.message);
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} autoCapitalize="none" />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={styles.input} />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
        <Text style={styles.btnText}>{loading ? 'Creating user...' : 'Create'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { backgroundColor: '#DB4437', marginTop: 10 }]} disabled={!request} onPress={() => promptAsync()}>
        <Text style={styles.btnText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.link}>Already have an account? Log In</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>User created successfully!</Text>
            <TouchableOpacity onPress={handleModalClose} style={styles.modalBtnContainer}>
              <Text style={styles.modalBtn}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 25, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginVertical: 5, borderRadius: 8 },
  btn: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8, marginTop: 15 },
  btnText: { color: 'white', textAlign: 'center', fontWeight: '600' },
  link: { marginTop: 10, textAlign: 'center', color: '#007AFF' },
  error: { color: 'red', marginTop: 10, textAlign: 'center' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalBox: { backgroundColor: 'white', borderRadius: 8, padding: 20, width: '80%', minHeight: 180, justifyContent: 'center', alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  modalBtnContainer: { backgroundColor: '#007AFF', padding: 10, borderRadius: 8, marginTop: 10 },
  modalBtn: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});
