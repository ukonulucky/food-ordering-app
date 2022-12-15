import React from 'react'
import {View, Text, StyleSheet} from "react-native"

import Header from './Header'
function Footer() {
  return (
    <View> 
        <Header
      iconType={"arrow-left"}
      title="MY ACCOUNT"
      />
       
       <View style={styles.container}>
        <Text style={styles.heading}> SignIn </Text>
    </View>
       
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    heading:{
       
     
    }
  })

export default Footer