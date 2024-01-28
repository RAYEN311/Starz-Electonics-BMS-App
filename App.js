import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('BMS'); // Initially, 'BMS' is active

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsSidebarOpen(false); // Close sidebar after item click
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.burgerIcon} onPress={toggleSidebar}>
          <Ionicons name={isSidebarOpen ? 'close' : 'menu'} size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Starz BMS</Text>
        <Image source={require('./starz.png')} style={styles.logo} />
      </View>
      <View style={styles.content}>
        {isSidebarOpen && (
          <View style={styles.sidebar}>
        <Image source={require('./starz.png')} style={styles.logo2} />
            <TouchableOpacity
              style={[styles.sidebarItem, activeItem === 'BMS' && styles.activeItem]}
              onPress={() => handleItemClick('BMS')}>
              <Text style={[styles.sidebarItemText, activeItem === 'BMS' && styles.activeItemText]}>BMS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sidebarItem, activeItem === 'WEB' && styles.activeItem]}
              onPress={() => handleItemClick('WEB')}>
              <Text style={[styles.sidebarItemText, activeItem === 'WEB' && styles.activeItemText]}>WEB</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sidebarItem, activeItem === 'STARZ ELECTRONICS' && styles.activeItem]}
              onPress={() => handleItemClick('STARZ ELECTRONICS')}>
              <Text style={[styles.sidebarItemText, activeItem === 'STARZ ELECTRONICS' && styles.activeItemText]}>STARZ ELECTRONICS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sidebarItem, activeItem === 'About' && styles.activeItem]}
              onPress={() => handleItemClick('About')}>
              <Text style={[styles.sidebarItemText, activeItem === 'About' && styles.activeItemText]}>About</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.mainContent}>
          <Text style={styles.contentText}>{activeItem} Content</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingTop: 40,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  burgerIcon: {
    marginRight: 10,
    height: 25,
    width: 30,
    color : '#000',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logo2: {
    width: width * 0.26,
    height: width * 0.15,
    marginHorizontal:width * 0.17,
    marginVertical:width * 0.05
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    backgroundColor: '#2c3e50',
    width: width * 0.6,
    height: '100%',
    paddingTop: 20,
  },
  sidebarItem: {
    paddingVertical: 10,
  },
  sidebarItemText: {
    fontSize: 18,
    paddingLeft: 14,
    color: '#fff',
  },
  activeItem: {
    backgroundColor: '#fff',
  },
  activeItemText: {
    color: '#000',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
