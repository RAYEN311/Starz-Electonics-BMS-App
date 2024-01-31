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
    backgroundColor: 'black',
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
const Gitbut = () => {
  return (
    <OpenURLButton url="https://github.com/rayen311">
      github
    </OpenURLButton>
  );
};

export default Gitbut;
