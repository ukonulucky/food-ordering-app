import React from 'react'
import SignIn from '../screens/authScreen/SignIn'
import { createStackNavigator, TransitionPresets} from "@react-navigation/stack"
import SignInWelComeScreen from '../screens/authScreen/SignInWelComeScreen'

const authStack  = createStackNavigator()
const authNavigation = () => {
  return (
   <authStack.Navigator>
     <authStack.Screen
name = "Signin"
component={SignIn}
options={{
    headerShown: false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/>
<authStack.Screen
name = "SignInWelcomeScreen"
component={SignInWelComeScreen}
options={{
    headerShown: false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/> 
 </authStack.Navigator>
  )
}

export default authNavigation