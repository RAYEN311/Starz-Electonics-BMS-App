import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import Raybut from './rayen_butt'
import Starzbut from './starz_butt'
import Repobut from './repo_butt'
import Gitbut from './github_butt'

const { width , height } = Dimensions.get('window');

const Web = () => {
  return (
<View style={styles.container}>
<Raybut></Raybut>
<Starzbut></Starzbut>
<Repobut></Repobut>
<Gitbut></Gitbut>
</View>
  );
};

const styles = StyleSheet.create(
{
  container : {
    width : width * 0.8 , 
    backgroundColor : '#00000022',
  }
}
)


export default Web;
