import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import locationIcon from '../assets/image/location.webp'; // Adjust the path as necessary
import profile from '../assets/image/profile.png';
const Location = () => (
  <View style={styles.container}>
    <View style={styles.container}>
    <Image source={locationIcon} style={styles.icon} />
    <Text style={styles.text}>Karol Bagh, New Delhi</Text>
    </View>
    <Image source={profile} style={styles.profileIcon} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    margin: 10,
  },
  locationcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  icon: {
    width: 20,
    height: 25,
    marginRight: 5,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Location;
