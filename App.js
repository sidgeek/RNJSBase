import React, { Component } from "react";
import { View } from "react-native";
import MySelect from "./MySelect";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MySelect />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
