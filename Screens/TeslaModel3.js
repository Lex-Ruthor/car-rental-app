import React, { useLayoutEffect, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import BottomTabNavigator
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseAuthen'// make sure path is correct

export default function TeslaModel3() {
  const navigation = useNavigation();
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const formatTransmission = (text) => {
    return text.replace('Reduction', 'Reduction\n');
  };
  const formatEngine = (text) => {
    return text.replace('Electric', 'Electric\n');
  };
  const formatAutonomy = (text) => {
    return text.replace('Autonomy', 'Autonomy\n');
  };
  const formatAcceleration = (text) => {
    return text.replace('KM/H', 'KM/H\n');
  };

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'cars', 'car_type', 'electric', 'tesla_model_3_performance');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCarData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !carData) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading car details...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons name="chevron-back" size={20} color="#000" style={styles.arrow} />
          <Text style={styles.logo}>TRN Renting</Text>
        </View>
        <Image source={require('../assets/profile_logo.png')} style={styles.profile} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput placeholder="Search your vehicle" style={styles.searchInput} />
      </View>

      <View style={styles.logoContainer_2}>
        <Text style={styles.cardetailstitle}>CAR DETAILS</Text>
      </View>

      <View style={styles.TeslaModel3Container}>
        <Image source={require('../assets/tesla_model_3_desc.jpg')} style={styles.TeslaModel3DescPic} />
      </View>

    <View style={styles.carInfoContainer}>
      <Text style={styles.carName}>{carData.name}</Text>

      <View style={styles.containerPriceRow}>
        <Text style={styles.price}>Price: Rp {carData.price} per day</Text>
        <TouchableOpacity style={styles.bookButton} onPress={() => console.log('Book pressed')}>
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.keyspecs}>Key Specs: </Text>

      <View style={styles.detailRow_images_1}>
        <Image source={require('../assets/gas_pump.jpg')} style={styles.cardImage_1} />
        <Image source={require('../assets/transmission.jpg')} style={styles.cardImage_2} />
        <Image source={require('../assets/engine.png')} style={styles.cardImage_3} />
      </View>

      {/* First row: Autonomy, Transmission, Engine */}
      <View style={styles.detailRow}>
        <Text style={styles.autonomy}>{formatAutonomy(carData.autonomy)}</Text>
        <Text style={styles.transmission}>{formatTransmission(carData.transmission)}</Text>
        <Text style={styles.engine}>{formatEngine(carData.engine)}</Text>
      </View>

      <View style={styles.detailRow_images_2}>
        <Image source={require('../assets/seats.jpg')} style={styles.cardImage_4} />
        <Image source={require('../assets/wheels.png')} style={styles.cardImage_5} />
        <Image source={require('../assets/light.png')} style={styles.cardImage_6} />
      </View>

      {/* Second row: Seats, Torque, Acceleration */}
      <View style={styles.detailRow}>
        <Text style={styles.seats}>{carData.seats}</Text>
        <Text style={styles.torque}>{carData.torque}</Text>
        <Text style={styles.acceleration}>{formatAcceleration(carData.acceleration)}</Text>
      </View>
    </View>
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
    marginBottom: 20,
  },
  logoContainer_2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  TeslaModel3Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
  },
  TeslaModel3DescPic: {
    width:290,
    height:150,
    borderRadius:20,
  },
  cardetailstitle: {
   fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  detailRow_images_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    height:20,
    marginBottom:30,
  },
  detailRow_images_2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    height:20,
    marginBottom:30,
  },
  autonomy:{
    fontWeight: 'bold',
    marginBottom:50,
  },
  transmission:{
    fontWeight: 'bold',
    position: 'absolute',
    right:132,
  },
  engine: {
    fontWeight: 'bold',
    position: 'absolute',
    right:20,
  },
  seats: {
    fontWeight: 'bold',
    position: 'absolute',
    left:10,
  },
  torque: {
    fontWeight: 'bold',
    position: 'absolute',
    right:165,
  },
  acceleration: {
    fontWeight: 'bold',
    position: 'absolute',
    right:10,
  },
  cardImage_1: {
    position: 'absolute',
    width:40,
    height:40,
    left:15,
  },
  cardImage_2: {
    position: 'absolute',
    width:40,
    height:40,
    right:170,
  },
  cardImage_3: {
    position: 'absolute',
    width:40,
    height:40,
    right:45,
  },
  cardImage_4: {
    position: 'absolute',
    width:40,
    height:40,
    left:15,
  },
  cardImage_5: {
    position: 'absolute',
    width:40,
    height:40,
    right:170,
  },
  cardImage_6: {
    position: 'absolute',
    width:30,
    height:60,
    right:45,
    top:-15,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 10,
  },
  containerPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  price: {
    fontWeight: 'bold',
    paddingBottom:20,
  },
  bookButton: {
    backgroundColor: '#3330E5',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginBottom:20,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  keyspecs: {
    fontWeight: 'bold',
    paddingBottom:40,
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
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginRight: 6,
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



