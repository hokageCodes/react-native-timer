import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15m" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="30m" onPress={() => onChangeTime(30)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="45m" onPress={() => onChangeTime(45)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
