import { useState } from "react";
import { StyleSheet, Text, FlatList, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  { id: 1, course: 'Starters', name: 'Bruschetta', price: 8.99 },
  { id: 2, course: 'Starters', name: 'Fried Calamari', price: 10.99 },
  { id: 3, course: 'Mains', name: 'lasanga', price: 85.99 },
  { id: 4, course: 'Mains', name: 'Pan-Seared Salmon', price: 19.99 },
  { id: 5, course: 'Dessert', name: 'Tiramisu', price: 6.99 },

];

const filterByCourse = (course: string) => {
  return menuItems.filter((item: { course: string; }) => item.course === course);
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>
      {['Starters', 'Mains', 'Dessert'].map(course => (
        <View key={course}>
          <Text style={styles.courseTitle}>{course}</Text>
          <FlatList
            data={filterByCourse(course)}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) => (
              <Text>{item.name} - ${item.price}</Text>
            )}
          />
        </View>
      ))}
    </View>
  );
};
function MyComponent() {
    const navigation = useNavigation();
  
    return (
      <View>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});


export default App;