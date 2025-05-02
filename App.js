import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Import Stack Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import BottomTabNavigator
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ImageBackground } from 'react-native';
import RegisterScreen from './Screens/RegisterScreen.js'; // Import RegisterScreen
import LandingPage from './Screens/LandingPage'; // Import your LandingPage
import ElectricCars from './Screens/ElectricCarPage';
import TeslaModel3Details from './Screens/TeslaModel3';
import emptypage from './Screens/emptypage';
import chatbot from './firebase/functions/chatbot';
import { auth, onAuthStateChanged, signInWithEmailAndPassword } from './firebase/firebaseAuthen.js'; // Import auth from firebaseAuthen
import { Ionicons } from '@expo/vector-icons';


const logo = require('./assets/TRN_LOGO.jpg');
const background = require('./assets/Login_page_bg.jpg');

const Stack = createStackNavigator(); // Create a Stack Navigator
const Tab = createBottomTabNavigator(); // Create Bottom Tab Navigator

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        setIsAuthenticated(false); // User is not logged in
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  const handleLogin = (navigation) => {
    if (email === '' || password === '') {
      Alert.alert('Please fill in both fields');
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          Alert.alert('Logged in!', `Welcome ${user.email}`);
          navigation.navigate('BottomTabs'); // Navigate to BottomTabs on successful login
        })
        .catch((error) => {
          Alert.alert('Login failed', error.message);
        });
    }
  };

  // Bottom Tab Navigator
  function BottomTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false, }}>
        <Tab.Screen name="Home" component={LandingPage} options={{ tabBarIcon: () => <Ionicons name="home" size={28} color="#333" />,}}/>
        <Tab.Screen name="Chat" component={chatbot} options={{ tabBarIcon: () => <Ionicons name="chatbubbles" size={28} color="#333" />,}}/>
        <Tab.Screen name="Search" component={TeslaModel3Details} options={{ tabBarIcon: () => <Ionicons name="search" size={28} color="#333" />,}}/>
        <Tab.Screen name="Profile" component={emptypage} options={{ tabBarIcon: () => <Ionicons name="person" size={28} color="#333" />,}}/>
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? 'BottomTabs' : 'Login'}>
        {/* Login Screen */}
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => (
            <ImageBackground source={background} style={styles.background} resizeMode="cover">
              <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.title}>TRN Renting</Text>
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
                <Text style={styles.forgotpassword}>Forgot Password? Click Here</Text>
                <TouchableOpacity style={styles.button} onPress={() => handleLogin(props.navigation)}>
                  <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <Text style={styles.newAccount} onPress={() => props.navigation.navigate('Register')}>
                   New? Create an account Here
                </Text>
              </View>
            </ImageBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ElectricCars" component={ElectricCars} options={{ title: 'Electric Cars' }} />
        <Stack.Screen name="TeslaModel3Details" component={TeslaModel3Details} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="chatbot" component={chatbot} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="emptypage" component={emptypage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#ffffff',
  },
  forgotpassword: {
    color: '#ffffff',
    marginBottom: 25,
  },
  newAccount: {
    position: 'absolute',
    color: '#ffffff',
    bottom: 90,
  },
  input: {
    height: 55,
    width: '90%',
    borderColor: '#999',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 74,
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 74,
    alignItems: 'center',
    width: '65%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
