import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
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
  const [pageOffset, setPageOffset] = useState(false);
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
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={pageOffset}
        style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: picture }} style={{ width: "100%", height: 300, borderRadius: 15 }} />
              <View>
                {editable && <EditPictureField saveImage={setPicture} />}
              </View>
            </View>
            <View style={styles.userInfo}>
              <View>
                <Text>First Name:</Text>
                <TextInput value={firstName} editable={editable} onChangeText={setFirstName} />
              </View>
              <View>
                <Text>Last Name:</Text>
                <TextInput value={lastName} editable={editable} onChangeText={setLastName} />
              </View>
              <View>
                <Text>Email:</Text>
                <TextInput value={email} editable={editable} onChangeText={setEmail} />
              </View>
            </View>
            <View style={styles.buttons}>
              <View style={styles.button}>
                <Button title={editable ? "SAVE" : "EDIT"} onPress={switchEditState} color={editable ? "green" : "blue"} />
              </View>
              {!editable && <Button title={"DELETE"} onPress={deleteUserFromList} color={"red"} />}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
