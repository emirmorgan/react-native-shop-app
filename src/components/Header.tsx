import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/left-arrow.png')}
          style={{width: 42, height: 26}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.navText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 75,
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
  },
  navText: {
    color: '#444',
    fontSize: 26,
    fontWeight: '700',
  },
});

export default Header;
