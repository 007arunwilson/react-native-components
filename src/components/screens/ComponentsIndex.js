import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    SectionList,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';

class ComponentsIndex extends Component {

    state = {};

    render() {

        let SectionComponents = [
            {title:'ActivityIndicator',status:0},
            {title:'Button',status:0},
            {title:'DrawerLayoutAndroid',status:0},
            {title:'FlatList',status:0},
            {title:'Image',status:0},
            {title:'Modal',status:0},
            {title:'Picker',status:0},
            {title:'ProgressBarAndroid',status:0},
            {title:'Slider',status:0},
        ];

        let SectionAPIs = [
            {title:'AccessibilityInfo',status:0},
            {title:'Camera Roll',status:1},
            {title:'ActionSheetIOS',status:0},
            {title:'Alert',status:0},
            {title:'AlertIOS',status:0},
            {title:'Animated',status:0},
            {title:'AppRegistry',status:0},
            {title:'AppState',status:0},
        ];

        let SectionMiscellaneous = [
            {title:'Handling Text Input',status:0},
            {title:'Handling Touches',status:0},
            {title:'Using a ScrollView',status:0},
            {title:'Using List Views',status:0},
        ];

        return (
            <View style={styles.baseView} >
                <View style={styles.SectionListContainer}  >
                    <SectionList
                        sections={[
                            { title: 'Components', data: SectionComponents },
                            { title: 'APIs', data: SectionAPIs },
                            { title: 'Miscellaneous', data: SectionMiscellaneous },
                        ]}
                        renderSectionHeader={({ section }) => (
                            <View>
                                <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
                            </View>
                        )}
                        renderItem={({ item,index }) => {
                            
                            let renderItem = (<View style={[styles.SectionListItemTouchableHightInnerViewStyle,item.status&&styles.SectionListItemActiveStyle,!item.status&&styles.SectionListItemDisabledStyle]}  >
                                <Text style={{ margin: 10, fontSize: 15, textAlign: 'left', color:'#333' }} >
                                    {item.title}
                                </Text>
                                <Text style={{ marginRight: 10 }} >
                                    <FontAwesome>{Icons.chevronRight}</FontAwesome>
                                </Text>
                            </View>);
                            
                            let renderReturn = ((item.status !== 1)?(<TouchableWithoutFeedback>{renderItem}</TouchableWithoutFeedback>):(<TouchableOpacity>{renderItem}</TouchableOpacity>));

                            return renderReturn;

                        }}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    baseView: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    SectionHeaderStyle: {
        backgroundColor: '#333',
        fontSize: 18,
        padding: 5,
        color: '#fff',
    },
    SectionListItemActiveStyle: {
        backgroundColor: '#FFFFFF'
    },
    SectionListItemDisabledStyle: {
        backgroundColor: '#F8F8FF'
    },
    SectionListItemTouchableHightInnerViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    SectionListContainer: {
        flexDirection: 'row',
    }
})

export default ComponentsIndex;