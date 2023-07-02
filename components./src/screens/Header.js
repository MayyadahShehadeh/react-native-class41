import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cupertinoHeaderWithBackgroundStack}>
        <CupertinoHeaderWithBackground
          style={styles.cupertinoHeaderWithBackground}
        ></CupertinoHeaderWithBackground>
        <Text style={styles.gallery}>Gallery</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1
  // },
  cupertinoHeaderWithBackground: {
    height: 55,
    width: 375,
    position: "absolute",
    top: 0,
    left: 0
  },
  gallery: {
    top: 17,
    left: 153,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 22
  },
  cupertinoHeaderWithBackgroundStack: {
    width: 375,
    height: 55
  }
});

export default Untitled;
