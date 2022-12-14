import React from 'react'
import {View, Text, StatusBar, StyleSheet} from "react-native"
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import { colors } from './src/global/styles'
import RootNavigation from './src/navigation/RootNavigation'
import SignIn from './src/screens/authScreen/SignIn'
import SignInWelComeScreen from './src/screens/authScreen/SignInWelComeScreen'
 
function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle="light-content"
      backgroundColor={colors.buttons}
      />

  <RootNavigation />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App