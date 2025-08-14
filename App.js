import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import screens
import ListItems from './src/screens/ListItems';
import AddItem from './src/screens/AddItem';
import EditItem from './src/screens/EditItem';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack for Items (List + Edit)
function ItemsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListItems"
        component={ListItems}
        options={{
          title: 'Items List',
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="EditItem"
        component={EditItem}
        options={{
          title: 'Edit Item',
          headerStyle: { backgroundColor: '#FF9800' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Add') {
              iconName = 'add-circle-outline';
            }
            return <Ionicons name="home-outline" size={50} color="green" />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: '#aaa',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 5,
            height: 60,
            paddingBottom: 5,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={ItemsStack} />
        <Tab.Screen name="Add" component={AddItem} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
