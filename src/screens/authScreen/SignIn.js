import React, {useState, useRef} from 'react'
import { color } from '@rneui/base'

import {View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableNativeFeedback} from "react-native"
import Header from '../../components/Header'
import { colors, parameters } from '../../global/styles'
import * as animatable from "react-native-animatable"
import { Button, Icon, SocialIcon } from 'react-native-elements'


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
         style={styles.inputText}
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
     
      
       </View>
       <View>
        <Button 
        title="sign in" 
        buttonStyle = {parameters.buttonStyles}
        titleStyle = {parameters.titleStyle}
        />
        
      </View>
     <View style={{marginVertical:20, justifyContent:"center", alignItems:"center"}}>
      <Text style={{...styles.word, textDecorationLine:"underline"}}>
       Forgot Password?
      </Text>
     </View>
     <View style={{
      marginBottom:20,
      justifyContent:"center",
      alignItems:"center"
     }}>
      <Text style={{
        fontSize:18,
        fontWeight:"bold",
        color:"darkGray",
      }}> 
        OR
      </Text>
     </View>
    <View>
    <SocialIcon 
     title='Sign In With Facebook'
     button 
     type='facebook'
     style={styles.socialIcon}
     onPress = {() => {
      console.log("running")
     }}
     />
    </View>
    <View>
    <SocialIcon 
     title='Sign In With Google'
     button 
     type='google'
     style={styles.socialIcon}
     onPress = {() => {
      console.log("running")
     }} 
     />
    </View>
    <View style={{
      marginTop: 20
    }}>
    <Text style={styles.word}>
         New on Xpress Food?
        </Text>
    </View>  

    <View style={{
     marginTop: 20,
     alignItems:"flex-end"
    }}>
      <Button 
      title="Create an account"
      buttonStyle={styles.createButtonStyle}
      titleStyle={styles.createButtonTitleStyle}
      />
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
  marginTop: 10,
  alignItems:"center",
  fontSize: colors.fontSize
  },
  word:{
     marginVertical:2,
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
     height:200
   
  },
  inputText:{
  flex: 1
  },
  socialIcon:{
    marginTop:10,
    borderRadius:10,
    height:50
  },
  createButtonStyle:{
    backgroundColor:"white",
    borderWidth:1,
    borderRadius:10,
    paddingHorizontal:10,
    justifyContent:"center",
    alignContent:"flex-end",
    borderColor:colors.buttons,
    height:40
  },
  createButtonTitleStyle:{
    color:colors.buttons,
    fontSize:16,
    fontWeight:"bold",
    justifyContentce:"center",
    alignItems:"center"
  }
 })


export default SignIn