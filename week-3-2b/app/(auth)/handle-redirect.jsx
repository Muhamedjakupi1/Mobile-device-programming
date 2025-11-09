// app/(auth)/handle-redirect.jsx
import { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../../firebase';
import { router } from 'expo-router';

export default function HandleRedirect() {
  useEffect(() => {
    const handleRedirect = async () => {
      try {
        console.log("Handling redirect result...");
        const result = await getRedirectResult(auth);
        
        if (result?.user) {
          console.log('Redirect sign-in successful!', result.user.email);
          router.replace('/'); 
        } else {
          console.log('No user found in redirect result');
          router.replace('/register');
        }
      } catch (error) {
        console.error('Error handling redirect:', error);
        router.replace('/register');
      }
    };

    handleRedirect();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={{ marginTop: 10 }}>Processing sign-in...</Text>
    </View>
  );
}