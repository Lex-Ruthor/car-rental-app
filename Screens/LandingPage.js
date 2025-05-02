import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // for icons
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import BottomTabNavigator 
import ElectricCars from '../Screens/ElectricCarPage';
import { createStackNavigator } from '@react-navigation/stack'; // Import Stack Navigator


const brands = [
  { name: 'Audi', count: 3, logo: require('../assets/audi_logo.png')},
  { name: 'BMW', count: 10, logo: require('../assets/bmw_logo.png')},
  { name: 'Mercedes', count: 4, logo: require('../assets/mercedes_logo.png') },
  { name: 'Peugeot', count: 1, logo: require('../assets/peugeot_logo.png') },
  { name: 'Porsche', count: 4, logo: require('../assets/porsche_logo.png') },
//   { name: 'Renault', count: 1, logo: require('../assets/logos/renault.png') },
//   { name: 'Tesla', count: 3, logo: require('../assets/logos/tesla.png') },
//   { name: 'Toyota', count: 9, logo: require('../assets/logos/toyota.png') },
];

export default function MainPageScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>TRN Renting</Text>
        <Image source={require('../assets/profile_logo.png')} style={styles.profile} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search your vehicle" style={styles.searchInput} />
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="options" size={20} color="#fff" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome & SOS */}
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcomeText}>Welcome back Alex!</Text>
          <Text style={styles.subtitle}>Which car are you going to choose today?</Text>
        </View>
        <TouchableOpacity style={styles.sosButton}>
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
    <View style={styles.categories}>
        {/* Category 1 - Sport Cars */}
        <View style={styles.category_1}>
            <TouchableOpacity style={[styles.card, { backgroundColor: '#c62828' }]}>
            <View>
                <Text style={styles.cardTitle_1}>Sport Cars</Text>
                <Text style={styles.cardTagline_1}>Start your week {'\n'} with some {'\n'} power</Text>
                {/* <Text style={styles.cardPrice_1}>Starting from Rp 2.000.000 / Day</Text> */}
                <Text style={styles.cardAvailability_1}>10 cars available {'>'}</Text>
            </View>
            <Image source={require('../assets/sportcar.jpg')} style={styles.cardImage_1} />
            </TouchableOpacity>
        </View>

        {/* Category 2 - SUV Cars */}
        <View style={styles.category_2}>
            <TouchableOpacity style={[styles.card, { backgroundColor: '#f9a825' }]}>
            <View>
                <Text style={styles.cardTitle_2}>SUV Cars</Text>
                <Text style={styles.cardTagline_2}>Start your week {'\n'} with comfort</Text>
                {/* <Text style={styles.cardPrice_2}>Starting from Rp 1.000.000 / Day</Text> */}
                <Text style={styles.cardAvailability_2}>26 cars available {'>'}</Text>
            </View>
            <Image source={require('../assets/suv.jpg')} style={styles.cardImage_2} />
            </TouchableOpacity>
        </View>

        {/* Category 3 - Electric Cars */}
        <View style={styles.category_3}>
        <TouchableOpacity style={[styles.card, { backgroundColor: '#2e7d32' }]}onPress={() => navigation.navigate('ElectricCars')}>
            <View>
                <Text style={styles.cardTitle_3}>Electric Cars</Text>
                <Text style={styles.cardTagline_3}>Start your week {'\n'} with silence</Text>
                {/* <Text style={styles.cardPrice_3}>Starting from Rp 2.000.000 / Day</Text> */}
                <Text style={styles.cardAvailability_3}>6 cars available {'>'}</Text>
            </View>
            <Image source={require('../assets/electric.jpg')} style={styles.cardImage_3} />
            </TouchableOpacity>
        </View>
        </View>




      {/* Brands */}
      <View style={styles.brandsHeader}>
        <Text style={styles.brandsTitle}>Brands</Text>
        <TouchableOpacity>
        <Text style={styles.seeAll}>See All {'>'}</Text>

        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.brandScroll}>
        {brands.map((brand, idx) => (
          <View key={idx} style={styles.brandItem}>
            <Image source={brand.logo} style={styles.brandLogo} />
            <Text style={styles.brandName}>{brand.name}</Text>
            <Text style={styles.brandCount}>{brand.count} Cars</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
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
    fontSize: 26,
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
  sosButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sosText: {
    color: '#fff',
    fontWeight: 'bold',
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
    height:180,
    width:340,
  },
  cardTitle_1: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    position:'absolute',
    bottom:43,
    left:10,
  },
  cardTitle_2: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    position:'absolute',
    bottom:43,
    left:10,
  },
  cardTitle_3: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    position:'absolute',
    bottom:43,
    left:10,
  },
  cardTagline_1: {
    color: '#fff',
    fontSize: 14,
    position:'absolute',
    top:-40,
    left:205,
  },
  cardTagline_2: {
    color: '#fff',
    fontSize: 14,  
    position:'absolute',
    top:-40,
    left:205,
  },
  cardTagline_3: {
    color: '#fff',
    fontSize: 14,
    position:'absolute',
    top:-40,
    left:205,
  },
  cardPrice_1: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  cardPrice_2: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  cardPrice_3: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  cardAvailability_1: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
    position: 'absolute',
    left:210,
    top:55,
  },
  cardAvailability_2: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
    position: 'absolute',
    left:210,
    top:55,
  },
  cardAvailability_3: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
    position: 'absolute',
    left:210,
    top:55,
  },
  cardImage_1: {
    width: 260, 
    height: 250, 
    resizeMode: 'contain',
    alignSelf: 'center', 
    position:'absolute',
    right:110,
    bottom:-40,
  },
  cardImage_2: {
    width: 150, 
    height: 150, 
    resizeMode: 'contain',
    alignSelf: 'center', 
    position:'absolute',
    right:160,
    bottom:-7,
  },
  cardImage_3: {
    width: 250, 
    height: 250, 
    resizeMode: 'contain',
    alignSelf: 'center', 
    position:'absolute',
    right:95,
    top:-10,
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
    marginBottom:20,
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
});
