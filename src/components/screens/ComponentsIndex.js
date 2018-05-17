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
                            
                            let renderItem = (<View style={styles.SectionListItemTouchableHightInnerViewStyle}  >
                                <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} >
                                    {item}
                                </Text>
                                <Text style={{ marginRight: 10 }} >
                                    <FontAwesome>{Icons.chevronRight}</FontAwesome>
                                </Text>
                            </View>);
                            
                            let renderReturn = ((index%2 == 0)?(<TouchableWithoutFeedback>{renderItem}</TouchableWithoutFeedback>):(<TouchableOpacity>{renderItem}</TouchableOpacity>));

                            return renderReturn;

                        }}
                        ListEmptyComponent={<Text>No items in under this section</Text>}
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
        fontSize: 14,
        padding: 5,
        color: '#333',
        backgroundColor: '#FFFFFF'
    },
    SectionListItemDisabledStyle: {
        fontSize: 14,
        padding: 5,
        color: '#333',
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