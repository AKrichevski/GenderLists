import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { loadUsers } from "../../../store/users/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";

const GenderSelection = ({ navigation }) => {
  const usersList = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push("UsersList", { usersGender: "male" })}
      >
        <Text>Male ({usersList.male.length})</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push("UsersList", { usersGender: "female" })}
      >
        <Text>Female ({usersList.female.length})</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderSelection;


