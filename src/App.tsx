import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.view}>
      <Text style={styles.welcomeMessage}>
        Welcome! Use [yarn start] to get started
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeMessage: {
    fontSize: 21,
    fontWeight: '700',
  },
});
