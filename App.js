import React from'react';
import { View, StyleSheet } from'react-native';
import CurrentWeather from'./src/components/CurrentWeather';

const App = () => {
  return (
    <View style={styles.containter}>
      <CurrentWeather />
    </View>
    
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
  }
});

export default App;