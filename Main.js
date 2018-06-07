import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {
  const {header, textStyle} = styles
  return (
    <View style={header}>
      <Text style={textStyle}>Main</Text>
    </View>
  )
}

export default Main

const styles = {
  header: {
    flex: 1,
    backgroundColor: 'red',
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
