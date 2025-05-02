import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert, Image } from 'react-native';
// From a screen inside /screens folder
import { auth, createUserWithEmailAndPassword } from '../firebase/firebaseAuthen';

const background = require('C:/Projects/car-rental-app/assets/Register_page_bg.jpg');// Path to background image
const logo = require('../assets/TRN_LOGO.jpg');


export default function RegisterScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Please fill in all fields');
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Registration Successful', `Welcome ${email}`);
      navigation.navigate('Login'); // Optional: Navigate to login after registration
    } catch (error) {
      Alert.alert('Registration Error', error.message);
    }
  };
  

  return (
    <ImageBackground source={background} style={styles.background} resizeMode="cover">
      
      <Image source={logo} style={styles.logo} />

      <View style={styles.container}>        
        <Text style={styles.title}>Create Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account? Login here</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logo:{
    position: 'relative',
    marginBottom: 30,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for readability
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 55,
    width: '90%',
    borderColor: '#999',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 74,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 74,
    alignItems: 'center',
    width: '70%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 15,
    color: '#007bff',
  },
});
