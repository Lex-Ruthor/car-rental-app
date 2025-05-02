import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TeslaModel3Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Empty page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
