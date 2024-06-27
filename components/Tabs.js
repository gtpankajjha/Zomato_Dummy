import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import delivery from '../assets/image/delivery.png';
import dinning from '../assets/image/dining.png';
import offers from '../assets/image/offers.png';
import wallet from '../assets/image/wallet.png';

const Tabs = ({ handleTabClick }) => (
  <View style={styles.tabs}>
    <TouchableOpacity onPress={() => handleTabClick('Delivery')}>
      <Image source={delivery} style={styles.tabIcon} />
      <Text style={styles.activeTab}>Delivery</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleTabClick('Dining Out')}>
      <Image source={dinning} style={styles.tabIcon} />
      <Text style={styles.tab}>Dining</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleTabClick('Pro')}>
      <Image source={offers} style={styles.tabIcon} />
      <Text style={styles.tab}>Offers</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleTabClick('Nightlife')}>
      <Image source={wallet} style={styles.tabIcon} />
      <Text style={styles.tab}>Money</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  tabs: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  tabIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  tab: {
    fontSize: 16,
    color: 'grey',
  },
  activeTab: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Tabs;
