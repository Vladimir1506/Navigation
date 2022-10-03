import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

export default App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});