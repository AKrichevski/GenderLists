import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UsersList from "../components/screens/usersList/UsersList";
import UserDetails from "../components/screens/userDetails/UserDetails";



const UsersStack = createStackNavigator();
const UsersStackScreen = () => (
  <UsersStack.Navigator>
    <UsersStack.Screen name="UsersList" component={UsersList} />
    <UsersStack.Screen name="UserDetails" component={UserDetails} />
  </UsersStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <UsersStackScreen />
  </NavigationContainer>
);
