import React from 'react';
import { View, Text, StyleSheet, Dimensions ,Image  } from 'react-native';
import Raybut from './rayen_butt'
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const AboutSlide = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
            <Image style={styles.im} source={require('../assets/rayen.png')}/>
            
        <Text style={styles.text}>
          Welcome to Starz BMS, created by Rayen Ben Brahim
          , your go-to solution for wireless Battery Management Systems (BMS) and API creation using ESP8266 technology. Our platform specializes in providing cutting-edge solutions for managing batteries wirelessly, ensuring optimal performance and efficiency.
        </Text>
        <Raybut></Raybut>
      </View>
      <View style={styles.slide}>
            <Image style={styles.im} source={require('../starz.png')}/>
        <Text style={styles.text}>
          At Starz BMS, we are dedicated to revolutionizing battery management through innovative technology. Our team at Straz Electronics leads the charge in developing state-of-the-art BMS solutions, leveraging the power of ESP8266 to create seamless wireless connectivity and robust API integrations.
        </Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>
          With Starz BMS, you can monitor and control your battery systems with ease, enabling remote access and real-time data analysis for enhanced performance and reliability. Whether you're a hobbyist, a professional, or an enterprise, our platform offers customizable solutions tailored to your specific needs.
        </Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>
          Join us on the journey towards smarter battery management and unlock the full potential of your energy systems with Starz BMS.
        </Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000022',
    paddingHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  im:{
    marginBottom : 20,
    borderRadius:10,
    height : 250,
    width : 200,
    objectFit: 'contain',

  }
});

export default AboutSlide;
