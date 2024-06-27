import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text,Image } from 'react-native';
import Header from './components/Header';
import ToggleButton from './components/ToggleButton';
import Banner from './components/Banner';
import RestaurantCard from './components/RestaurantCard';
import Tabs from './components/Tabs';
import Location from './components/Location';

const dummyRestaurants = [
  { id: '1', name: "Paul's Kitchen", image: require('./assets/image/resturant1.jpg'), rating: 4.5, time: '30 mins' },
  { id: '2', name: "Sophia's Diner", image: require('./assets/image/resturant3.jpeg'), rating: 4.0, time: '25 mins' },
  { id: '3', name: "Mike's Cafe", image: require('./assets/image/resturant3.jpeg'), rating: 4.7, time: '20 mins' },
  { id: '4', name: "Tina's Bistro", image: require('./assets/image/Non-veg-restaurants.jpeg'), rating: 4.3, time: '35 mins' },
  { id: '5', name: "Olivia's Eatery", image: require('./assets/image/resturant1.jpg'), rating: 4.6, time: '40 mins' },
  { id: '6', name: "Olivia's Eatery", image: require('./assets/image/resturant1.jpg'), rating: 4.6, time: '40 mins' },
];

function HomeScreen() {
  const [isDelivery, setIsDelivery] = useState(true);

  const handleToggle = () => {
    setIsDelivery(!isDelivery);
  };

  const handleTabClick = (tab) => {
    console.log(`${tab} tab clicked`);
    // Handle tab click functionality
  };

  const renderRestaurantCard = ({ item }) => {
   return( <View style={styles.restaurantCard}>
    <Image source={item.image} style={styles.restaurantImage} />
    <Text style={styles.restaurantName}>{item.name}</Text>
    <Text style={styles.restaurantDetails}>Rating: {item.rating} | {item.time}</Text>
  </View>)
  };

  return (
    <View style={styles.container}>
      <Location/>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Header />
        <ToggleButton isDelivery={isDelivery} handleToggle={handleToggle} />
        <Banner />
        <FlatList
          data={dummyRestaurants}
          renderItem={renderRestaurantCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.restaurantList}
          numColumns={2}
        />
      
      </ScrollView>
      <Tabs handleTabClick={handleTabClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  restaurantList: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  restaurantCard: {
    width: '49%',
    marginBottom: 10,
    marginLeft: 5
  },
  restaurantImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  restaurantDetails: {
    fontSize: 14,
    color: '#888',
  },
});

export default HomeScreen;
