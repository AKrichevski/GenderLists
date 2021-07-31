import React from 'react';
import {
  Image,
  View,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import {launchImageLibrary} from 'react-native-image-picker';
import styles from './styles';

const picImageHandler = (callback) => {
  return 	launchImageLibrary(
    {
      title: 'העלאת תמונה',
      maxWidth: 800,
      maxHeight: 600,
      takePhotoButtonTitle: 'צלם תמונה',
      chooseFromLibraryButtonTitle: 'בחירה מגלריה',
      cancelButtonTitle: 'בטל',
    },
    res => {
      if (res.didCancel) {
        return false;
      }
      else if (res.error) {
        console.error('Error', res.error);
      } else {
        callback(res.assets[0].uri);
      }
    },
  );
};

export const EditPictureField = ({saveImage}) => {
  return (
    <TouchableWithoutFeedback onPress={() => picImageHandler(saveImage)}>
      <View style={styles.blueCircle}>
        <Image source={require("../../../assets/pencil.png")} style={{width: 30, height: 30}}/>
      </View>
    </TouchableWithoutFeedback>
  )
}
