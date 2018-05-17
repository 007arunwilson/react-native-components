import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SectionList,
  TouchableHighlight
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';

class ComponentsIndex extends Component {

    state = {};

    render(){

        let SectionComponents = [
            'ActivityIndicator',
            'Button',
            'DrawerLayoutAndroid',
            'FlatList',
            'Image',
            'Modal',
            'Picker',
            'ProgressBarAndroid',
            'Slider'
        ];

        let SectionAPIs = [
            'AccessibilityInfo',
            'ActionSheetIOS',
            'Alert',
            'AlertIOS',
            'Animated',
            'AppRegistry',
            'AppState',
        ];

        let SectionMiscellaneous = [
            'Handling Text Input',
            'Handling Touches',
            'Using a ScrollView',
            'Using List Views',
        ];

        return (
            <View style={styles.baseView} >
                <View  style={styles.SectionListContainer}  >
                    <SectionList
                    sections={[
                        { title: 'Components', data: SectionComponents },
                        { title: 'APIs', data: SectionAPIs },
                        { title: 'Miscellaneous', data: SectionMiscellaneous },
                    ]}
                    renderSectionHeader={ ({section}) => (
                        <View>
                            <Text style={styles.SectionHeaderStyle}> { section.title } </Text>
                        </View>
                    ) }
                    renderItem={ ({item}) => (
                        <TouchableHighlight>
                            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}} >
                            <FontAwesome>{Icons.chevronLeft}</FontAwesome>
                            { item }
                            </Text>
                        </TouchableHighlight>
                    ) }
                    keyExtractor={ (item, index) => index }
                    />
                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    baseView: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
    },
    SectionHeaderStyle:{
        backgroundColor : '#333',
        fontSize : 18,
        padding: 5,
        color: '#fff',
    },
    SectionListItemActiveStyle:{
        fontSize : 14,
        padding: 5,
        color: '#333',
        backgroundColor : '#FFFFFF'
    },
    SectionListItemDisabledStyle:{
        fontSize : 14,
        padding: 5,
        color: '#333',
        backgroundColor : '#F8F8FF'
    },
    SectionListContainer:{
        flexDirection:'row',
    }
})

export default ComponentsIndex;