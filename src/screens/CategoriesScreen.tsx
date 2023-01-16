import {Dimensions, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

const dimensions = Dimensions.get('window');
const screen = dimensions.height;

//Components
import Header from '../components/Header';
import Categories from '../components/Categories';

const CategoriesScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Categories" />
      <Categories onScreen={true} />
    </View>
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

export default CategoriesScreen;
