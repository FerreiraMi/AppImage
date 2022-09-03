import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';

class CameraDialog extends Component {
  static defaultProps = {
    isOpen: false,
  };
state = {
    currentImage:'https://casa.abril.com.br/wp-content/uploads/2022/03/cabana-contemporanea-glamping-caxias-do-sul-guilherme-jordani-fachada-cabana-steel-frame-natureza.jpg?resize=630,420'
}
  render() {
    const {props} = this;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.isOpen}
        >
            <View>
                <Image source={{uri:state.currentImage}}/>
                <TouchableOpacity>
                    <Text>X</Text>
                </TouchableOpacity>
          
            <View>
                <Button
                title='Salvar'
                onPress={this.save}
                color='#0062ac'
                />
                <Button
                title='Colar'
                onPress={this.getImageFromClipboard}
                color='#0062ac'
                />
            </View>
            <CameraDialog isOpen={state.isModalOpen}/>
            </View>
        </Modal>
    );
  }
}
 export default CameraDialog;