import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button,  } from 'react-native';

export default function HomeScreen({} ) { //navigation

  const [customerUsername, setCustomerUsername] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');
  const [chefUsername, setChefUsername] = useState('');
  const [chefPassword, setChefPassword] = useState('');

  const handleCustomerLogin = () => {
    console.log('Customer login button pressed');
    { " Customer"}
  // customer login here
  };

  const handleChefLogin = () => {
    console.log('Chef login button pressed');
    { " Chef"}
   
  };

  const handleNextPage = () => {
    console.log('Next page button pressed');
    ('NextPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Celestial Bites</Text>

      <View style={styles.loginContainer}>
        {/* Customer Login Section */}
        <Text style={styles.label}>Customer Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={customerUsername}
          onChangeText={(text) => setCustomerUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={customerPassword}
          onChangeText={(text) => setCustomerPassword(text)}
        />
        <Button title="Login" onPress={handleCustomerLogin} />

        {/* Chef Login Section */}
        <Text style={styles.label}>Chef Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={chefUsername}
          onChangeText={(text) => setChefUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={chefPassword}
          onChangeText={(text) => setChefPassword(text)}
        />
        <Button title="Login" onPress={handleChefLogin} />
      </View>

      <Button title="Next Page" onPress={handleNextPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc0cb',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    width: 250,  
  },
});