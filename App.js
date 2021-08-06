import React from 'react'
import { Button, Text,View,  } from 'react-native'
const App = () =>{
  return(
    <View style={{justifyContent:"center", flex:1, alignItems:"center"}}>
      
       
    <Text>You Learn something Today</Text>
    <Button
     title="Learn More"
     color="#841584"
    />
    </View>
    );
  }
export default App;