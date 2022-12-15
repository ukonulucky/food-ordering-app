import React, {useState, useRef} from 'react'
import { color } from '@rneui/base'

import {View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableNativeFeedback} from "react-native"
import Header from '../../components/Header'
import { colors } from '../../global/styles'
import * as animatable from "react-native-animatable"
import { Icon } from 'react-native-elements'


function SignIn() {
const [inputAnimate, setInputAnimate] = useState(false)

const input1 = useRef(1)
const input2 = useRef(2)


  return( 
    <View>
      <Header
      iconType={"arrow-left"}
      title="MY ACCOUNT"
       />
      <View style={styles.container}>
        <Text style={styles.heading}> SignIn  </Text>
       <View style={styles.text} >
        <Text style={styles.word} >
          Please enter your the email and password 
        </Text>
        <Text style={styles.word}>
         registerd with your account.
        </Text>
       </View>
       <View style={styles.inputContainer}>
        <TextInput
        placeholder='Email'
        style={styles.input1}
        ref={input1}
        
        />
      <View  style={styles.input2}>
        <animatable.View
        animation={
          inputAnimate ? "fadeInLeft":""
        }
        duration={300}
        >
          <Icon 
          name="lock"
          type='material'
          iconStyle={{
            color: colors.grey4
          }}

          />
        </animatable.View>
        
        <TextInput
         style={styles.text}
        placeholder='Password'
        onFocus={() => {
            setInputAnimate(true)
        }}
        onBlur={() => {
          setInputAnimate(false)
        }}
        ref={input2}
        />
        <animatable.View
        animation={
          inputAnimate? "fadeInRight":""
        }
        duration={300}
        >
          <Icon 
          name="visibility-off"
          type='material'
          iconStyle={{
            color: colors.grey4
          }}
          
          />
        </animatable.View>
      </View>
      <View style={styles.buttonContainer}>
        
        <TouchableNativeFeedback>
        <Text style={styles.buttons}>
          SIGN IN
        </Text>
        </TouchableNativeFeedback>
      </View>
      
       </View>
    </View>
    </View> 
  )
}
 const styles = StyleSheet.create({
  container: {
   marginTop: 20,
   paddingHorizontal: 20,
  },
  text:{
  marginTop: 20,
  alignItems:"center",
  fontSize: colors.fontSize
  },
  word:{
     marginVertical:5,
     fontSize: colors.fontSize
  },
  heading:{
    color:colors.buttons,
    fontSize: colors.headerSize,
    fontWeight:"bolder"
  },
  inputContainer:{
     marginVertical:20,
    alignItems: "center"
  },
  input1:{
    borderStyle:"solid",
    borderWidth:1.5,
    borderColor:"gray",
    borderRadius:10,
    paddingHorizontal:10,
    width:"100%",
    height:colors.textInputHeight,
    fontSize:colors.textInputFontSize
  },
  input2:{
    borderStyle:"solid",
    borderWidth:1.5,
    borderColor:"gray",
    borderRadius:10,
    paddingHorizontal:10,
    width:"100%",
    flexDirection:"row",
    marginTop:10,
    height:colors.textInputHeight,
    fontSize:colors.textInputFontSize,
    justifyContent:"space-between",
    alignItems:"center"
   
  },
  buttons:{
    fontSize: colors.textInputFontSize,
    justifyContent:"center",
    textTransform:"uppercase",
    color:"white"
  },
  buttonContainer:{
    marginVertical:15,
    width:"100%",
    backgroundColor: colors.buttons,
    padding:10,
    alignItems:"center",
    borderRadius:10,
  },
  text:{
  flex: 1
  }
 })


export default SignIn