import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput, TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { deleteUser, editUser } from "../../../store/users/actions";
import { EditPictureField } from "../../../common/imagePicker/ImagePicker";
import styles from "./styles";

export default ({ route, navigation }) => {
  const [picture, setPicture] = useState(route.params.user.picture.large);
  const [firstName, setFirstName] = useState(route.params.user.name.first);
  const [lastName, setLastName] = useState(route.params.user.name.last);
  const [email, setEmail] = useState(route.params.user.email);
  const [editable, setEditable] = useState(false);
  const [pageOffset, setPageOffset] = useState(0);
  const dispatch = useDispatch();
  const gender = route.params.user.gender;
  const uuid = route.params.user.login.uuid;
  const { height: fullHeight } = Dimensions.get("window");

  const deleteUserFromList = () => {
    dispatch(deleteUser({ gender: gender, uuid: uuid }));
    navigation.pop();
  };

  const switchEditState = () => {
    if (editable) {
      updateUserInfo();
    }
    setEditable(!editable);
  };

  const updateUserInfo = () => {
    const updatedUserInfo = {
      ...route.params.user,
      email: email,
      name: {
        ...route.params.user.name,
        first: firstName,
        last: lastName,
      },
      picture: {
        ...route.params.user.picture,
        large: picture,
      },
    };
    dispatch(editUser({ gender: gender, uuid: uuid, updatedUserInfo }));
  };

  const onLayout = ({ nativeEvent: { layout: { height }}}) => {
    const pageOffset = fullHeight - height;
    setPageOffset({ pageOffset });
  };

  return (
    <View style={styles.viewContainer} onLayout={onLayout}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? 'height' : null}
        keyboardVerticalOffset={pageOffset}
        style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: picture }} style={styles.image} />
              <View>
                {editable && <EditPictureField saveImage={setPicture} />}
              </View>
            </View>
            <View style={styles.userInfo}>
              <View>
                <Text style={styles.text}>First Name:</Text>
                <TextInput style={styles.textInput} value={firstName} editable={editable} onChangeText={setFirstName} />
              </View>
              <View>
                <Text style={styles.text}>Last Name:</Text>
                <TextInput style={styles.textInput} value={lastName} editable={editable} onChangeText={setLastName} />
              </View>
              <View>
                <Text style={styles.text}>Email:</Text>
                <TextInput style={styles.textInput} value={email} editable={editable} onChangeText={setEmail} />
              </View>
            </View>
            <View style={styles.buttons}>
              <View style={styles.button}>
                <TouchableOpacity onPress={switchEditState} style={styles.button}>
                  <View style={[styles.content, editable ? {backgroundColor: "green"} : {backgroundColor: "blue"}]}>
                    <Text style={styles.title}>{editable ? "SAVE" : "EDIT"}</Text>
                  </View>
                </TouchableOpacity>
                {!editable && <TouchableOpacity onPress={deleteUserFromList} style={[styles.button, {backgroundColor: "red"}]}>
                  <View style={styles.content}>
                    <Text style={styles.title}>{"DELETE"}</Text>
                  </View>
                </TouchableOpacity>}
              </View>
              <View style={styles.button}>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
