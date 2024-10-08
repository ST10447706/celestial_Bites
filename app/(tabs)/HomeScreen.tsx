import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome to Celestial Bites</Text>

      {/* Description or Information */}
      <Text style={styles.subtitle}>Choose an option below to either view the menu or add/edit menu items.</Text>


  

      {/* Navigation Buttons */}
      <View style={styles.buttonsContainer}>
        <Button
          title="View Menu"
          onPress={() => navigation.navigate} // Navigate to ViewMenuScreen
        />
        <View style={styles.spacing} />
        <Button
          title="Edit Menu Item"
          onPress={() => navigation.navigate} // Navigate to EditMenuItemScreen
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffc0cb',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 30,
  },
  spacing: {
    marginVertical: 10,
  },
});
