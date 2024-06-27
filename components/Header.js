import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import profile from '../assets/image/profile.png';

const Header = () => (
  <View style={styles.header}>
    <TextInput style={styles.searchBar} placeholderTextColor="grey" placeholder="Search for restaurants, cuisine or a dish" />
    
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.5,
    color:'grey',
    borderColor: 'grey',
    paddingLeft: 20,
    marginRight: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
