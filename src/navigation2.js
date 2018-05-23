import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const navigation2 =()=> {
   return(
       <View>
           <Text>You are on page 2</Text>
           <Button
               onPress={() => Actions.firstParent()}
               title="Learn More"
               color="#841584"
               accessibilityLabel="Learn more about this purple button"
           />        
       </View>
   );
}

export default navigation2;