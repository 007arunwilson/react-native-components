import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const navigation1 =()=> {
   return(
       <View>
           <Text>Hello there</Text>
           <Button
               onPress={()=>Actions.reset('secondParent')}
               title="Learn More"
               color="#841584"
               accessibilityLabel="Learn more about this purple button"
           />  
       </View>
   );
}

export default navigation1;