import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import banner2 from '../assets/image/banner2.jpg';

const Banner = () => (
  <>
    <View style={styles.banner}>
      <Image source={banner2} style={styles.bannerImage} />
    </View>
    <View style={styles.bannerTextHolder}>
      <Text style={styles.bannerText}>Eats What Make You Happy</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  banner: {
    height: 200,
    margin: 10,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  bannerTextHolder: {
    height: 30,
    margin: 10,
  },
  bannerText: {
    fontSize: 24,
    color: "#000",
    fontWeight: "500"
  },
});

export default Banner;
