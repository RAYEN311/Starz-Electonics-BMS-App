import React from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import Lightbox from 'react-native-lightbox';

const { width, height } = Dimensions.get('window');

const images = [
  require('./page1.jpg'),
  require('./page2.jpg'),
  // Add more images as needed
];

const St = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageItem}>
            <Lightbox
              springConfig={{ tension: 15, friction: 7 }}
              swipeToDismiss={true}
              renderHeader={close => null}
              underlayColor="transparent"
              backgroundColor="rgba(0, 0, 0, 0.9)"
              didOpen={() => {
                // Code to handle the opening of the image
              }}
              onClose={() => {
                // Code to handle the closing of the image
              }}>
              <Image
                source={image}
                style={styles.image}
                resizeMode="contain"
              />
            </Lightbox>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems : 'center',
  },
  imageItem: {
    padding: 0,
  },
  image: {
    width: width - 20, // Adjusted to fit the screen
    height: height - 200, // Adjusted to fit the screen
    resizeMode: 'contain',
  },
});

export default St;
