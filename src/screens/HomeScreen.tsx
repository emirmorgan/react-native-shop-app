import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Dimensions, StyleSheet, ScrollView} from 'react-native';

const dimensions = Dimensions.get('window');
const screen = dimensions.height;

//Components
import Carousel from '../components/Carousel';
import Trending from '../components/Trending';
import Categories from '../components/Categories';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="never">
        <View style={styles.container}>
          <Carousel />
          <Trending />
          <Categories />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    minHeight: screen,
  },
});

export default HomeScreen;
