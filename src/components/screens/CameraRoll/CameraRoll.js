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
    TouchableWithoutFeedback,
    ToastAndroid,
    Button,
    CameraRoll,
    ScrollView,
    Dimensions,
    Modal,
    Image
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';

const { width } = Dimensions.get('window');

class CameraRollComponent extends Component {

    //state = {modalVisible: false,photos: [],index: null};
    state = {};

    render() {
        return (
                <View style={styles.container}>
                </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  shareButton: {
    position: 'absolute',
    width,
    padding: 10,
    bottom: 0,
    left: 0
  }
})


export default CameraRollComponent;