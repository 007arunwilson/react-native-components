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

    state = {modalVisible: false,photos: [],index: null};

    render() {
        return (
                <View style={styles.container}>
                  <Button
                    title='View Photos'
                    onPress={() => { this.toggleModal(),this.getCameraRollPhotos() }}
                  />
                  <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => console.log('closed')}
                  >
                    <View style={styles.modalContainer}>
                      <Button
                        title='Close'
                        onPress={this.toggleModal}
                      />
                      <ScrollView
                        contentContainerStyle={styles.scrollView}>
                        {
                          this.state.photos.map((p, i) => {
                            return (
                              <TouchableHighlight
                                style={{opacity: i === this.state.index ? 0.5 : 1}}
                                key={i}
                                underlayColor='transparent'
                                onPress={() => this.setIndex(i)}
                              >
                                <Image
                                  style={{
                                    width: width/3,
                                    height: width/3
                                  }}
                                  source={{uri: p.node.image.uri}}
                                />
                              </TouchableHighlight>
                            )
                          })
                        }
                      </ScrollView>
                      {
                        this.state.index !== null  && (
                          <View style={styles.shareButton}>
                            <Button
                                title='Share'
                                onPress={this.share}
                              />
                          </View>
                        )
                      }
                    </View>
                  </Modal>
                </View>          
        );
    }

    toggleModal = () => {
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    getCameraRollPhotos() {

        //this.setState({ json:'louis' })

        CameraRoll.getPhotos({
            first: 20,
            assetType: 'All'
        })
        .then(r => {

            let jsonStringified = JSON.stringify(r.edges);
            this.setState({ photos: r.edges })
            
        });

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