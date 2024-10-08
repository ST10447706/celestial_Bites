import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';



export default function ViewMenuScreen() {
  // Sample menu items
  const menuItems = [
    { id: '1', name: 'Steak', description: 'tender and delicious', price: 'R50.99' },
    { id: '2', name: ' Pork Ribs', description: 'Juicy and tasty', price: 'R75.99' },
    { id: '3', name: 'Chicken Wings', description: 'Spicy and juicy', price: 'R67.49' },
    { id: '4', name: 'Potato wedges and spinach', description: 'Fresh and tangy', price: 'R45.99' },
    { id: '5', name: 'Pasta Alfredo', description: 'Creamy and cheesy', price: 'R88.99' },
    { id: '6', name: ' lasanga ', description: 'Mushrooms, cheese, and basil', price: 'R105.99' },


  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* FlatList to render the menu items */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

<Button
  title="View Menu"
  onPress={() => navigation.navigate('ViewMenu')}
/>


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFC0CB',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
