import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet,
  AsyncStorage
} from "react-vr";

import Shape, { shapes } from "./vr/components/shape";

export default class ShapeGame extends React.Component {
  constructor() {
    super();
    this.state = {
      gameShapes: [1, 1, 1, 1],
      specialIndex: 0,
      score: 0
    };
  }

  pickShape(shapeIndex) {
    console.log("pickShape", shapeIndex);
    let score = this.state.score;
    score = this.state.specialIndex === shapeIndex ? score + 1 : score - 1;

    this.setState({
      score
    });

    AsyncStorage.setItem("score", score);

    this.newGameSet();
  }

  newGameSet() {
    let baseShapeId = Math.floor(Math.random() * shapes.length);

    let specialShapeId = baseShapeId;

    while (specialShapeId === baseShapeId) {
      specialShapeId = Math.floor(Math.random() * shapes.length);
    }

    console.log("Baseshapeid", baseShapeId);
    console.log("Special", specialShapeId);

    let newGameShapes = [];

    for (let i = 0; i < this.state.gameShapes.length; i++) {
      newGameShapes[i] = baseShapeId;
    }

    let specialShapeIndex = Math.floor(Math.random() * newGameShapes.length);

    newGameShapes[specialShapeIndex] = specialShapeId;

    this.setState({
      gameShapes: newGameShapes,
      specialIndex: specialShapeIndex
    });
  }

  componentDidMount() {
    AsyncStorage.getItem("score")
      .then(value => {
        console.log("score", value);
        this.setState({ score: value });
      });
    this.newGameSet();
  }

  render() {
    return (
      <View style={styles.game}>
        <Pano source={asset("chess-world.jpg")} />
        <Text style={styles.text}>Find the odd shape</Text>
        <Text style={styles.text}>{this.state.score}</Text>
        {this.state.gameShapes.map((shape, index) => (
          <View key={index} onEnter={() => this.pickShape(index)}>
            <Shape
              shapeNum={shape}
              colorNum={index}
              transform={[{ translate: [(index - 1.5) * 1.5, 0, -5] }]}
            />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  game: {
    transform: [{ translate: [-0.25, 0, 0] }]
  },
  text: {
    fontSize: 0.5,
    textAlign: "center",
    color: "#fff",
    transform: [{ translate: [-2, 2, -5] }]
  }
});

AppRegistry.registerComponent("ShapeGame", () => ShapeGame);
