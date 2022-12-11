import React from 'react'
import {View, Text, StyleSheet,Dimensions} from 'react-native'
import {parameters, colors} from "../global/styles"
function Header() {
  return (
 <View style={
    headerStles.container
 }>

 </View>
  )
}

const headerStles = StyleSheet.create({
  container: { 
    flexDirection: "row",
    height: parameters.headerHeight,
    backgroundColor: colors.buttons
  }
  })

export default Header