import React from 'react'
import {View, Text, StyleSheet,Dimensions} from 'react-native'
import {parameters, colors} from "../global/styles"
import  {Icon}  from "react-native-elements"
function Header({title, iconType}) {
  return (
 <View style={
  headerStyles.container
 }>
  <View style={
    headerStyles.icon
  }>
  <Icon
    type="material-community" 
    name={iconType}
    size={30} 
    color="white"
  onPress={() => {
    console.log("running...");
   }}
  />
  </View >
  <View>
    <Text style={headerStyles.text}>{title}</Text>
  </View>

 </View>
  ) 
}

const headerStyles = StyleSheet.create({
  container: { 
    flexDirection: "row",
    alignItems:"center",
    height: parameters.headerHeight,
    backgroundColor: colors.buttons
  },
  icon:{
    marginLeft:20,
  },
  text:{
    marginLeft:20,
    color: colors.header,
    fontSize:colors.headerSize,
    fontWeight: "bolder"
  }
  })

export default Header