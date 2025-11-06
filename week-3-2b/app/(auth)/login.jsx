import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../../firebase';
import { router } from 'expo-router';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
        .then(() => router.push('/'))
        .catch(err => setError(err.message));
    }
  }, [response]);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError('Both fields are required');
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      router.push('/');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>{loading ? 'Logging in...' : 'Login'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { backgroundColor: '#DB4437', marginTop: 10 }]} disabled={!request} onPress={() => promptAsync()}>
        <Text style={styles.btnText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 25, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginVertical: 5, borderRadius: 8 },
  btn: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8, marginTop: 15 },
  btnText: { color: 'white', textAlign: 'center', fontWeight: '600' },
  link: { marginTop: 10, textAlign: 'center', color: '#007AFF' },
  error: { color: 'red', marginTop: 10, textAlign: 'center' },
});
