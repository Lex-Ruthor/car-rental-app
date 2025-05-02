import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons name="chevron-back" size={20} color="#000" style={styles.arrow} />
          <Text style={styles.logo}>TRN Renting</Text>
        </View>
        <Image source={require('../assets/profile_logo.png')} style={styles.profile} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search your vehicle" style={styles.searchInput} />
      </View>

      {/* Welcome & SOS */}
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcomeText}>Welcome back Alex!</Text>
          <Text style={styles.subtitle}>Which car are you going to choose today?</Text>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {/* Category 1 - Sport Cars */}
        <View style={styles.category_1}>
          <TouchableOpacity style={[styles.card, { backgroundColor: '#ffffff' }]}>
            <View>
              <Image source={require('../assets/consumption_logo.jpg')} style={styles.consumptionLogo} />
              <Image source={require('../assets/door_logo.jpg')} style={styles.doorLogo} />
              <Image source={require('../assets/meter_logo.jpg')} style={styles.meterLogo} />
              <Image source={require('../assets/price_logo.jpg')} style={styles.priceLogo} />
              <Text style={styles.cardTitle_1}>BMW iX</Text>
              <Text style={styles.cardAvailability_1}>Car Details {'>'}</Text>
            </View>
            <Image source={require('../assets/BMW_iX.jpg')} style={styles.cardImage_1} />
          </TouchableOpacity>
        </View>

        {/* Category 2 - SUV Cars */}
        <View style={styles.category_2}>
          <TouchableOpacity style={[styles.card, { backgroundColor: '#ffffff' }]}>
            <View>
              <Image source={require('../assets/consumption_logo.jpg')} style={styles.consumptionLogo} />
              <Image source={require('../assets/door_logo.jpg')} style={styles.doorLogo} />
              <Image source={require('../assets/meter_logo.jpg')} style={styles.meterLogo} />
              <Image source={require('../assets/price_logo.jpg')} style={styles.priceLogo} />
              <Text style={styles.cardTitle_2}>Porsche Taycan</Text>
              <Text style={styles.cardAvailability_2}>Car Details {'>'}</Text>
            </View>
            <Image source={require('../assets/porsche_taycan.jpg')} style={styles.cardImage_2} />
          </TouchableOpacity>
        </View>

        {/* Category 3 - Electric Cars */}
        <View style={styles.category_3}>
          <TouchableOpacity style={[styles.card, { backgroundColor: '#ffffff' }]} onPress={() => navigation.navigate('TeslaModel3Details')}>
            <View>
              <Image source={require('../assets/consumption_logo.jpg')} style={styles.consumptionLogo} />
              <Image source={require('../assets/door_logo.jpg')} style={styles.doorLogo} />
              <Image source={require('../assets/meter_logo.jpg')} style={styles.meterLogo} />
              <Image source={require('../assets/price_logo.jpg')} style={styles.priceLogo} />
              <Text style={styles.cardTitle_3}>Tesla Model 3</Text>
              <Text style={styles.cardAvailability_3}>Car Details {'>'}</Text>
            </View>
            <Image source={require('../assets/tesla_model_3.jpg')} style={styles.cardImage_3} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default function MainPageScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  
  return <HomeScreen navigation={navigation} />;

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
  },
  filterBtn: {
    backgroundColor: '#3f51b5',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: '#fff',
    marginLeft: 5,
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  categories: {
    gap: 15,
  },
  card: {
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:160,
    width:340,
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle_1: {
    color: '#000000',
    fontSize: 23,
    fontWeight: 'bold',
    position:'absolute',
    bottom:35,
    left:10,
  },
  cardTitle_2: {
    color: '#000000',
    fontSize: 23,
    fontWeight: 'bold',
    position:'absolute',
    bottom:35,
    left:10,
  },
  cardTitle_3: {
    color: '#000000',
    fontSize: 23,
    fontWeight: 'bold',
    position:'absolute',
    bottom:35,
    left:10,
  },
  cardTagline_1: {
    color: '#000000',
    fontSize: 14,
    position:'absolute',
    top:-40,
    left:205,
  },
  cardTagline_2: {
    color: '#000000',
    fontSize: 14,  
    position:'absolute',
    top:-40,
    left:205,
  },
  cardTagline_3: {
    color: '#000000',
    fontSize: 14,
    position:'absolute',
    top:-40,
    left:205,
  },
  cardPrice_1: {
    color: '#000000',
    fontSize: 12,
    marginTop: 5,
  },
  cardPrice_2: {
    color: '#000000',
    fontSize: 12,
    marginTop: 5,
  },
  cardPrice_3: {
    color: '#000000',
    fontSize: 12,
    marginTop: 5,
  },
  cardAvailability_1: {
    color: '#000000',
    marginTop: 5,
    fontSize: 12,
    position: 'absolute',
    fontWeight: 'bold',
    left:240,
    top:50,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginRight: 6,
  },
  cardAvailability_2: {
    color: '#000000',
    marginTop: 5,
    fontSize: 12,
    position: 'absolute',
    fontWeight: 'bold',
    left:240,
    top:50,
  },
  cardAvailability_3: {
    color: '#000000',
    marginTop: 5,
    fontSize: 12,
    position: 'absolute',
    fontWeight: 'bold',
    left:240,
    top:50,
  },
  cardImage_1: {
    width: 180, 
    height: 250, 
    resizeMode: 'contain',
    alignSelf: 'center', 
    position:'absolute',
    right:140,
    bottom:-60,
  },
  cardImage_2: {
    width: 200, 
    height: 150, 
    resizeMode: 'contain',
    alignSelf: 'center', 
    position:'absolute',
    right:125,
    bottom:-7,
  },
  cardImage_3: {
    width: 210, 
    height: 250, 
    resizeMode: 'contain',
    alignSelf: 'center', 
    position:'absolute',
    right:120,
    bottom:-40,
  },
  brandsHeader: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#3f51b5',
  },
  brandScroll: {
    marginTop: 15,
  },
  brandItem: {
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    width: 80,
  },
  brandLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  brandName: {
    fontSize: 12,
    marginTop: 5,
  },
  brandCount: {
    fontSize: 10,
    color: '#3f51b5',
  },
  consumptionLogo : {
    position: 'absolute',
    top:-55,
    right:-230,
  },
  doorLogo: {
    position: 'absolute',
    top:-25,
    right:-230,
  },
  priceLogo: {
    position: 'absolute',
    top:5,
    right:-230,
  },
  meterLogo: {
    position: 'absolute',
    top:35,
    right:-230,
  },
});
