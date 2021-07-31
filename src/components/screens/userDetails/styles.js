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
    borderWidth: 1,
    marginTop: 5
  },

  content: {
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#3a3a3a"
  },

  text: {
    fontSize: 22,
  },

  textInput: {
    fontSize: 22,
    height: 35,
    borderWidth: 0.5
  },

  image: {
    width: "100%", height: 300, borderRadius: 15
  }
}));
