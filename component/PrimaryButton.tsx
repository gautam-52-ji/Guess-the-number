import React  from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

function PrimaryButton(props:any) {
  return (
    <View style={style.container}>
    <Pressable  style = { ({pressed}) => pressed ?[ style.pressable,style.pressedItem ] : style.pressable} onPress={()=>props.onPress()}>
        
        <Text style={style.buttonText}>{props.children}</Text>
        
      </Pressable>
      </View>
  )
}

export default PrimaryButton;

const style = StyleSheet.create({
    container:{
        margin:4,
        
    },
    pressable:{
        backgroundColor:'#72063c',
        paddingVertical:8,
        paddingHorizontal: 16,
        shadowColor:'white', 
        shadowOpacity:0.15,
        shadowOffset:{width:4 , height:-4},
        shadowRadius:3,
        borderRadius:28,
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    pressedItem: {
        opacity: 0.5,
        backgroundColor:'#782c52',
        borderRadius:28,
      },
    
})