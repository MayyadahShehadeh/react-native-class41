import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'


export default function Photos(props) {

  let url = props.link;
  let photographerName = props.name;
  return (
    <View style={styles.wrapper}>

      <Image
        style={styles.img}
        source={ url } />
      <Text>
        {photographerName}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height:1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 5,
    
  },
  img: {
    height: 120,
    width: 120,
    // cursor: 'pointer'
  }
});
