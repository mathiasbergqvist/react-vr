import React, { Component } from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box,
  Cylinder,
  Sphere,
  Plane
} from "react-vr";

export default class basics extends Component {
  render() {
    return (
      <View>
        <Pano source={asset("starry-sky.jpg")} />
        <Box
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe={true}
          style={{
            color: "#d22",
            transform: [
              { translate: [0, 0, -3] },
              { translateY: 1 },
              { translateX: -0.5 },
              { rotateY: 45 },
              { rotateZ: 45 }
            ]
          }}
        />
        <Cylinder
          dimHeight={0.5}
          radiusBottom={0.5}
          radiusTop={0.5}
          segments={15}
          wireframe={true}
          style={{
            color: "#2d2",
            transform: [
              { translate: [0, 0.5, -3] },
              { rotateY: 45 },
              { rotateZ: 45 }
            ]
          }}
        />
        <Sphere
          radius={0.5}
          heightSegments={10}
          widthSegments={10}
          texture={'http://i.imgur.com/bEBqA.jpg'}
          style={{
            color: "#aad",
            transform: [{ translate: [1, 0, -3] }, { rotateY: 45 }]
          }}
        />
        <Plane 
          dimHeight={2}
          dimWidth={5}
          texture={'http://i.imgur.com/3FAR9Kf.jpg'}
          style={{
            transform: [
              {translate: [0, 0, -5]},
              {rotateX: -65},
            ]
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("basics", () => basics);
