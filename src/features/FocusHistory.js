import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) {
    return (
      <>
        <Text style={styles.title}>YOU have not focused on anything yet.</Text>
        <Text style={styles.instructions}>- Enter a task you want to focus on.</Text>
        <Text style={styles.instructions}>
          - Select from either 15, 30, or 45 mins.
        </Text>
        <Text style={styles.instructions}>
          - If you are not done yet, you can click start again and the timer
          will continue
        </Text>
        <Text style={styles.instructions}>
          - If you are done, hit the reset button. It will bring you back to this page and you can keep track of your completed tasks here!
        </Text>
        <Text style={styles.instructions}>
          - The phone vibrates when the timer ends. The timer is set to .6seconds by default incase you just want to test the app and not have to wait 15mins or more
        </Text>
        <Text style={styles.instructions}>
          - Lastly, if you click 'reset' before the timer ends, it does not count as a completed task
        </Text>
        
        <Text style={styles.instructions}>
          - E N J O Y
        </Text>

      </>
    );
  }

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things you have focused on successfully:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: 'white',
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instructions: {
    paddingTop: spacing.lg,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',

  }
});
