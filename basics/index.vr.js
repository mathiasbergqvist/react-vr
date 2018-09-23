import React, { Component } from "react";
import { AppRegistry, asset, Pano, Text, View, StyleSheet } from "react-vr";

class Row extends Component {
  render() {
    return (
      <View
        style={[{backgroundColor: this.props.color}, styles.row]}
      >
        <Text style={styles.text}>{this.props.color}</Text>
      </View>
    );
  }
}

export default class basics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Pano source={asset("starry-sky.jpg")} />
        <Row color='red' />
        <Row color='green' />
        <Row color='blue' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 0.2,
    textAlign: "center"
  },
  row: {
    width: 0.5,
    height: 0.3,
    margin: 0.1
  },
  container: {
    flex: 1,
    width: 2,
    flexDirection: 'row',
    transform: [{translate: [-1, 0, -3]}]
  }
});

AppRegistry.registerComponent("basics", () => basics);
