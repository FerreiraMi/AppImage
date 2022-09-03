import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import PictureList from './app/components/PictureList';
import CameraDialog from './app/components/CameraDialog';

export default class App extends Component {
  state = {
    pictureList: [
      {
        id: '1',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/280px-Lion_waiting_in_Namibia.jpg',
      },
    ],
    isModalOpen:false

  }
  onPictureSelect = item => {};
  openModal = () => {};

  render() {
    const {state} = this;
    return (
      <View style={StyleSheet.container}>
        <PictureList list={state.pictureList} onClick={this.onPictureSelect} />
        <View style={StyleSheet.footer}></View>
        <Button onPress={this.openModal} title="Nova Foto" color="#0062ac" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#f5fcff',
  },

  footer: {
    padding: 15,

    backgroundColor: '#999',

    width: '100%',

    textAlign: 'center',
  },
});
