import React from 'react'
import Swiper from "react-native-swiper"
import {View, Text, StyleSheet,Image} from "react-native"
import Header from '../../components/Header'
import { colors, parameters } from '../../global/styles'
import * as animatable from "react-native-animatable"
import { Button, Icon,  SocialIcon } from 'react-native-elements'

function SignInWelComeScreen({navigation}) {
  return (
   <View style={{
    flex:1
   }}>
    <View style={{
        flex:3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop:40
        
    }}> 
        <Text style ={{
            color: colors.buttons,
            textTransform:"uppercase",
            fontSize:28,
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight:"bold",
            paddingHorizontal:10,
            paddingVertical:10

        }}>
            Discover restaurants
        </Text>
        <Text style ={{
            color: colors.buttons,
            textTransform:"uppercase",
            fontSize:28,
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight:"bold",
            paddingHorizontal:10,
            paddingVertical:10

        }}>
            In your area
        </Text>

    </View>
{/* // creating the slider section */}

<View style={{ 
    flex:4,
    justifyContent:'center'
}}>
 <Swiper 
 autoplay={true}
 >
<View style={styles.slide1}> 
<Image 
source={{
    uri:"https://cdn.pixabay.com/photo/2021/10/10/18/09/rice-6697953__340.jpg",
    width: "100%",
    height:"100%"
}}
styles={{
    width: "100%",
    height:"100%"
}}
/>
</View>
<View style={styles.slide2}>
<Image 
source={{
    uri:"https://media.istockphoto.com/id/1152159113/photo/grilled-ribs-in-spicy-marinade-with-salad-and-vegetables.jpg?s=612x612&w=0&k=20&c=2KV0OKX_LxSd8oKCzEqkHsrL41NMQjgxucQ6a2cYRpA=",
    width: "100%",
    height:"100%"
}}
styles={{
    width: "100%",
    height:"100%"
}}
/>
</View>
<View style={styles.slide3}>
<Image 
source={{
    uri:"https://cdn.pixabay.com/photo/2021/10/10/17/57/african-cuisine-6697867__340.jpg",
    width: "100%",
    height:"100%"
}}
styles={{
    width: "100%",
    height:"100%"
}}
/>
</View>
<View style={styles.slide4}>
<Image 
source={{
    uri:"https://cdn.pixabay.com/photo/2021/10/11/03/57/kebab-6699286__340.jpg",
    width: "100%",
    height:"100%"
}}
styles={{
    width: "100%",
    height:"100%"
}}
/>
</View>
 </Swiper>
</View>
 <View style={{
    flex: 4,
    justifyContent:'flex-end',
    paddingBottom:20,
}}>
     <View>
        <Button 
        title={"sign in"}
        buttonStyle={styles.createButtonStyle}
        titleStyle={styles.createButtonTitleStyle}
        onPress = {
            () => { navigation.navigate("Signin") }
        }
        />
     </View>
     <View>
        <Button 
        title={"Create your account"}
        buttonStyle={styles.createButtonStyle2}
        titleStyle={styles.createButtonTitleStyle2}
        onPress = {
            () => {navigation.navigate("Signin")}
        }
        />
     </View>
 </View>
   </View>
  )
}

const styles = StyleSheet.create({
    slide1:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    slide2:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    slide3:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    slide4:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    createButtonStyle:{
        border:0,
        marginHorizontal:20,
        borderRadius:10,
        paddingHorizontal:10,
        justifyContent:"center",
        alignContent:"flex-end",
        backgroundColor:colors.buttons,
        height:50,
        marginBottom:20
      },
      createButtonTitleStyle:{
        color:colors.buttons,
        fontSize:20,
        fontWeight:"bold",
        justifyContentce:"center",
        alignItems:"center",
        color:"white",
        textTransform:"uppercase",
       

      },
      createButtonStyle2:{
        borderWidth:2,
        marginHorizontal:20,
        borderRadius:10,
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:"white",
        height:50,
        borderColor:colors.grey3,
        marginTop:20
      },
      createButtonTitleStyle2:{
        fontSize:20,
        fontWeight:"bold",
        justifyContent:"center",
        alignItems:"center",
        color:colors.grey1,
        textTransform:"uppercase",
        height:"100%"
      }
})

export default SignInWelComeScreen 