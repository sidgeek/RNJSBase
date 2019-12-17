import React, { Component } from "react";
import { View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> hello </Text>
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
