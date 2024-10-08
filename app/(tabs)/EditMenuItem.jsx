import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


  


const EditMenuItem = () => {
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const menuItemId = route.params.menuItemId;
    const menuItemToEdit = menuItems.find((menuItem) => menuItem.id === menuItemId);
    setMenuItem(menuItemToEdit);
    setName(menuItemToEdit.name);
    setDescription(menuItemToEdit.description);
    setPrice(menuItemToEdit.price.toString());
  }, [route.params.menuItemId, menuItems]);

  const handleSave = () => {
    if (menuItem) {
      const updatedMenuItem = { ...menuItem, name, description, price: parseFloat(price) };
      const updatedMenuItems = menuItems.map((menuItem) => (menuItem.id === updatedMenuItem.id ? updatedMenuItem : menuItem));
      setMenuItems(updatedMenuItems);
      navigation.goBack();
    }
  };

  return (
    <View>
      <Text>Edit Menu Item</Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
      />
      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Description"
      />
      <TextInput
        value={price}
        onChangeText={(text) => setPrice(text)}
        placeholder="Price"
        keyboardType="numeric"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default EditMenuItem;