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
    is_footer_loading: false,
    selected_objects: {
      byId: [],
      byIndex: []
    },
    uploadable:false,
  };

  lastFetchCursor = "";

  componentDidMount() {
    this.getCameraRollPhotos();
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

    return (
      <View  style={styles.container}>
        <FlatList
          data={post_format_data} //extraData={this.state}
          keyExtractor={(item, index) => "" + index}
          onEndReachedThreshold={2}
          onEndReached={this.scrollEndReachHandler.bind(this)}
          ListFooterComponent={() => {
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
            return (
              <GalleryListItemRow
                updateSelectionNumberHandler={this.updateSelectionNumberHandler.bind(
                  this
                )}
                dimensionWidth={width}
                data={item}
              />
            );
          }}
        />
        {this.state.uploadable?(
          <View style={styles.uploadButtonContainer} >
            <Button style={styles.uploadButton} onPress={()=>true} title={`Upload Images (${this.state.selected_objects.byId.length})`}  />
          </View>
        ):null}
      </View>
    );
  }

  getCameraRollPhotos(after_cursor_parameter) {
    this.lastFetchCursor = after_cursor_parameter;

    CameraRoll.getPhotos({
      first: 30,
      assetType: "Photos",
      after: after_cursor_parameter
    }).then(r => {
      this.setState(state => {
        let new_data_concated = [...state.data].concat(r.edges);
        return {
          ...state,
          data: new_data_concated,
          page_info: r.page_info,
          is_footer_loading: false
        };
      });
    });
  }

  scrollEndReachHandler() {
    let end_cursor =
      this.state.page_info && this.state.page_info.end_cursor
        ? this.state.page_info.end_cursor
        : undefined;
    console.log(this.lastFetchCursor, end_cursor);
    if (this.lastFetchCursor === end_cursor) return;

    this.getCameraRollPhotos(end_cursor);
  }

  updateSelectionNumberHandler(selection_status, item_data) {
    console.log("Update selection Handler");
    console.log(selection_status, item_data);

    const promiseObject = new Promise((resolve, reject) => {
      let selected_objects = { ...this.state.selected_objects };
      const index_of_item = selected_objects.byId.indexOf(
        item_data.node.image.uri
      );
      if (index_of_item === -1 && selection_status) {
        selected_objects.byId.push(item_data.node.image.uri);

        const selected_item_object = {
          uri: item_data.node.image.uri,
          type: item_data.node.type
        };

        selected_objects.byIndex.push(selected_item_object);
      } else if (!selection_status && index_of_item >= 0) {
        selected_objects.byId.splice(index_of_item, 1);
      }

      let state_immutable = null;
      this.setState(state => {
        state_immutable = { ...state };
        state_immutable.selected_objects = selected_objects;
        console.log('length outside : ',state_immutable.selected_objects.byId.length);
        let count_of_selected = state_immutable.selected_objects.byId.length;
        state_immutable.uploadable = !!count_of_selected;
        resolve({selection_status,count_of_selected});
        return state_immutable;
      });

    });

    //setTimeout(promiseObject.resolve,1000);

    return promiseObject;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent:"center",
    flex:1,
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
  },
  uploadButton:{
  },
  uploadButtonContainer:{
    position:"absolute",
    bottom:0,
    right:0,
  }
});

export default CameraRollComponent;
