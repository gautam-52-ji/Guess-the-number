import React from 'react'
import { StyleSheet, Text } from 'react-native'

function Title(props:any) {
  return (
    <Text style={style.title}>{props.children}</Text>
  )
}

export default Title

const style = StyleSheet.create({
    
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderWidth:2,
        borderColor:'white',
        padding:12,
        borderRadius:10
    }

    

})