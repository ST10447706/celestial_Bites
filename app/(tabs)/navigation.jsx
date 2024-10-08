import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditMenuItem from './screens/EditMenuItem';
import LoginScreen from './LoginScreen';



const Stack = createStackNavigator();

const App = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => console.log(`Total items in menu: ${menuItems.length}`), [menuItems]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ menuItems }} />
        <Stack.Screen name="ViewMenu" component={ViewMenuScreen} initialParams={{ menuItems }} />
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} initialParams={{ setMenuItems, menuItems }} />
        <Stack.Screen name="EditMenuItem" component={EditMenuItem} initialParams={{ setMenuItems, menuItems }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;