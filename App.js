/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UsersList from "./src/components/screens/usersList/UsersList";
import UserDetails from "./src/components/screens/userDetails/UserDetails";
import GenderSelection from "./src/components/screens/genderSelection/GenderSelection";


const App = () => {
  const UsersStack = createStackNavigator();
  const UsersStackScreen = () => (
    <UsersStack.Navigator>
      <UsersStack.Screen
        name="GenderSelection"
        component={GenderSelection}
        options={{
          headerTitle: "Select a gender",
        }}
      />
      <UsersStack.Screen
        name="UsersList"
        component={UsersList}
        options={{
          headerTitle: "User List",
        }}
      />
      <UsersStack.Screen
        name="UserDetails"
        component={UserDetails}
        options={({ route }) => {
          return {
            headerTitle: `${route.params.user.name.first} ${route.params.user.name.last}`,
          };
        }}
      />
    </UsersStack.Navigator>
  );

  return (
    <NavigationContainer>
      <UsersStackScreen />
    </NavigationContainer>
  );

};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "600",
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: "400",
//   },
//   highlight: {
//     fontWeight: "700",
//   },
// });

export default App;
