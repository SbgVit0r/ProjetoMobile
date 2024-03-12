import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';

import logo from './assets/NATIVE.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo}/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
