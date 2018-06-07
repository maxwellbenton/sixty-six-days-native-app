import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  const {header, textStyle} = styles
  return (
    <View style={header}>
      <Text style={textStyle}>Sixty Six Days</Text>
    </View>
  )
}

export default Header

const styles = {
  header: {
    flexBasis: '12%',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 30,
    color: 'red'
  }
};
// const styles = {
//   textStyle: {
//     fontSize: 20
//   }
// };
