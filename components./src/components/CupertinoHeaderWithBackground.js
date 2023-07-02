import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function CupertinoHeaderWithBackground(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}></View>
      <View style={styles.textWrapper}></View>
      <View style={styles.rightWrapper}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(61,133,157,1)",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  rightWrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  }
});

export default CupertinoHeaderWithBackground;
