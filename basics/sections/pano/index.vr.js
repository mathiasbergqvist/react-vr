import React, { Component } from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

class Task extends Component {
  render() {
    return (
      <Text
        style={{
          textAlign: "center",
          fontSize: 0.2
        }}
      >
        {this.props.text}
      </Text>
    );
  }
}

export default class basics extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("starry-sky.jpg")} />
        <View
          style={{
            transform: [{ translate: [0, 0, -3] }],
            layoutOrigin: [0.5, 0.5]
          }}
        >
          <Task text='Foo 1' />
          <Task text='Foo 2' />
          <Task text='Foo 3' />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("basics", () => basics);
