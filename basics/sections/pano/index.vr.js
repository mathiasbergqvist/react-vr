import React, { Component } from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

export default class basics extends Component {

  render() {
    return (
      <View>
        <Pano source={asset("starry-sky.jpg")} />
      </View>
    );
  }
}

AppRegistry.registerComponent("basics", () => basics);
