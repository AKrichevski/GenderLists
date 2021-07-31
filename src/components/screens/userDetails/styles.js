import { StyleSheet } from "react-native";

let styles;
export default (styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },

  container: {
    paddingHorizontal: 15,
    marginTop: 15,
  },

  imageContainer: {
    alignItems: "center",
    alignContent: "center"
  },

  userInfo: {
    paddingTop: 10
  },

  buttons: {
    paddingTop: 25,
  },

  button: {
    marginBottom: 15,
  }
}));
