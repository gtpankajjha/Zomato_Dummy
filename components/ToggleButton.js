import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleButton = ({ isDelivery, handleToggle }) => (
  <View style={styles.toggleContainer}>
    <TouchableOpacity style={[styles.toggleButton, isDelivery ? styles.activeToggle : styles.inactiveToggle]} onPress={handleToggle}>
      <Text style={[styles.toggleText, isDelivery ? styles.activeToggleText : styles.inactiveToggleText]}>Delivery</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.toggleButton, !isDelivery ? styles.activeToggle : styles.inactiveToggle]} onPress={handleToggle}>
      <Text style={[styles.toggleText, !isDelivery ? styles.activeToggleText : styles.inactiveToggleText]}>Self Pickup</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#e6dfdf',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 2,
  },
  toggleButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  activeToggle: {
    backgroundColor: '#fff',
  },
  inactiveToggle: {
    backgroundColor: '#e6dfdf',
  },
  toggleText: {
    fontSize: 16,
  },
  activeToggleText: {
    color: '#000',
  },
  inactiveToggleText: {
    color: '#000',
  },
});

export default ToggleButton;
