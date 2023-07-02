import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoFooter1 from "../components/CupertinoFooter1";

function Footer(props) {
  return (
    <View style={styles.container}>
      <CupertinoFooter1 style={styles.cupertinoFooter1}></CupertinoFooter1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoFooter1: {
    height: 49,
    width: 375,
    marginTop: 40
  }
});

export default Footer;
