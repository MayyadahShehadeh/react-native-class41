import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

function CupertinoFooter1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper4}></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(61,133,157,1)",
    flexDirection: "row",
    width: "100%"
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CupertinoFooter1;
