import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryList from './pages/CategoryList';
import FoodList from './pages/FoodList';
import FoodDetail from './pages/FoodDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoryList" component={CategoryList} options={{
          title: 'Categories',
          headerStyle: { backgroundColor: '#fff'},
          headerTintColor: '#ffa500',
          headerTitleStyle: { fontWeight: 'bold', color: '#ffa500'},
          headerTitleAlign: 'center',
        }} />

        <Stack.Screen name="FoodList" component={FoodList} options={{
          title: 'Meals',
          headerStyle: { backgroundColor: '#fff'},
          headerTintColor: '#ffa500',
          headerTitleStyle: { fontWeight: 'bold', color: '#ffa500'},
          headerTitleAlign: 'center',
        }} />
        
        <Stack.Screen name="FoodDetail" component={FoodDetail} options={{
          title: 'Detail',
          headerStyle: { backgroundColor: '#fff'},
          headerTintColor: '#ffa500',
          headerTitleStyle: { fontWeight: 'bold', color: '#ffa500'},
          headerTitleAlign: 'center',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;