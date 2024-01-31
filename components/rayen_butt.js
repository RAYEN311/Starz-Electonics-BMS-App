import React from 'react';
import { TouchableOpacity, Linking, Text, StyleSheet } from 'react-native';

const OpenURLButton = ({ url, children }) => {
  const handlePress = () => {
    // Open the URL using Linking
    Linking.openURL(url).catch((err) =>
      console.error('An error occurred', err)
    );
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

// Example usage:
const Raybut = () => {
  return (
    <OpenURLButton url="https://rayen311.github.io">
      Rayen ben Brahim 
    </OpenURLButton>
  );
};

export default Raybut;
