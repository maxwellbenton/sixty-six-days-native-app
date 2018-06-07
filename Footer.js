import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  const {footer, textStyle} = styles
  return (
    <View style={footer}>
      <Text style={textStyle}>Footer</Text>
    </View>
  )
}

export default Footer

const styles = {
  footer: {
    flexBasis: '10%',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 30
  }
};
// const styles = {
//   textStyle: {
//     fontSize: 20
//   }
// };
