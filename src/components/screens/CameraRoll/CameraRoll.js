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
import GalleryListItemRow from "../../utility/UI/ImageSelectGallery/FlatListRowItem";

const { width } = Dimensions.get("window");

class CameraRollComponent extends Component {
  //state = {modalVisible: false,photos: [],index: null};

  onFetchCursor = [];
  state = {
    data: [],
    is_footer_loading: false
  };

  componentDidMount() {
    this.getCameraRollPhotos();

    // axiosInstance
    //   .get("https://jsonplaceholder.typicode.com/photos")
    //   .then(response => {
    //     if (response.data.length) {
    //       this.setState({ data: response.data });
    //     }
    //   })
    //   .catch(error => {});
  }

  render() {
    let pre_format_data_array = [...this.state.data];

    let final_result_array = [];

    if (pre_format_data_array.length) {
      for (let i = 0; pre_format_data_array.length; ) {
        const spliced_result = pre_format_data_array.splice(0, 3);
        final_result_array.push(spliced_result);
      }
    }

    let post_format_data = final_result_array;

    console.log("On render ", post_format_data);

    return (
      <View style={styles.container}>
        <FlatList
          data={post_format_data} //extraData={this.state}
          keyExtractor={(item, index) => index}
          onEndReachedThreshold={1}
          onEndReached={this.scrollEndReachHandler.bind(this)}
          ListFooterComponent={() => {
            console.log("On Footer ListFooterComponent ");

            return this.state.is_footer_loading ? (
              <View style={{ padding: 10 }}>
                <ActivityIndicator size={30} color="#000" />
              </View>
            ) : null;
          }}
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
                size={40}
              />
            </View>
          }
          renderItem={({ item }) => {
            return <GalleryListItemRow dimensionWidth={width} data={item} />;
          }}
        />
      </View>
    );
  }

  getCameraRollPhotos(after_cursor_parameter) {

    this.onFetchCursor.push(''+after_cursor_parameter);

    CameraRoll.getPhotos({
      first: 60,
      assetType: "Photos",
      after:after_cursor_parameter
    }).then(r => {
      this.setState(state => {

        let new_data_concated = [...state.data].concat(r.edges);
        return { ...state, data: new_data_concated, page_info: r.page_info,is_footer_loading:false };
      });
    });
  }

  scrollEndReachHandler(){

    this.setState(state => {
      return { ...state, is_footer_loading:true };
    });

    let end_cursor = (this.onFetchCursor.indexOf(''+this.state.page_info.end_cursor)===-1&&this.state.page_info && this.state.page_info.end_cursor?this.state.page_info.end_cursor:undefined;
    this.getCameraRollPhotos(end_cursor);

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
