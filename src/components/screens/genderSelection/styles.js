import { StyleSheet } from "react-native";

let styles;
export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#03fcf0",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width: 200,
    height: 100,
    padding: 10,
    borderRadius: 20,
    borderWidth:2,
    marginTop: 25
  }

}));
