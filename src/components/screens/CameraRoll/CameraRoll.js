import React, { Component } from "react";
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
  Image,
  FlatList
} from "react-native";

import axiosInstance from "axios";
import FontAwesome, { Icons } from "react-native-fontawesome";
import index from "react-native-safe-area-view";

const { width } = Dimensions.get("window");

class CameraRollComponent extends Component {
  //state = {modalVisible: false,photos: [],index: null};
  state = {
    data: []
  };

  componentDidMount() {

    axiosInstance.get('https://jsonplaceholder.typicode.com/photos')
    .then(response=>{
      
      ToastAndroid.show(` Total response length ${response.data.length} `,ToastAndroid.SHORT);

      if(response.data.length)
      {
          this.setState({data:response.data});
      }


    })
    .catch(error=>{



    });

  }

  render() {
    let pre_format_data = this.state.data;
    let post_format_data = pre_format_data;

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index}
          ListEmptyComponent={
            <View style={{ paddingTop: 20 }}>
              <ActivityIndicator
                color="#000"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 40,
                  padding: 6,
                  shadowColor: "#000",
                  shadowOffset: { width: 2, height: 2 }
                }}
                elevation={5}
                size={40}
              />
            </View>
          }
          renderItem={({ item }) => {

            let width_divident = (width/3);
            return (
              <View>
                <TouchableOpacity
                  onPress={()=>{

                    ToastAndroid.show(`${item.url}`,ToastAndroid.SHORT);
                    
                  }}
                >
                  <Image source={{uri:item.url}} style={{width:width_divident,height:width_divident}}  />
                  </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: "wrap",
    flexDirection: "row"
  },
  shareButton: {
    position: "absolute",
    width,
    padding: 10,
    bottom: 0,
    left: 0
  }
});

export default CameraRollComponent;
