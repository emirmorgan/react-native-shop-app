import React, {FC, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Header from '../components/Header';

const dimensions = Dimensions.get('window');
const screenWidth = dimensions.width;
const screenHeight = dimensions.height;
const imageHeight = '40%';

const colors = ['blue', 'black', 'white'];
const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

interface ColorProps {
  color: string;
  activeColor: string;
  setActiveColor: React.Dispatch<React.SetStateAction<string>>;
}

interface SizeProps {
  size: string;
  activeSize: string;
  setActiveSize: React.Dispatch<React.SetStateAction<string>>;
}

const ItemScreen: FC = ({route}: any) => {
  const {label, price, src} = route.params;

  const [activeColor, setActiveColor] = useState('blue');
  const [activeSize, setActiveSize] = useState('M');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} resizeMode="cover" source={src} />
        <Header />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.headtitle}>{label}</Text>
        <Text style={styles.subtitle}>{price}</Text>
        <View style={{marginTop: 32}}>
          <Text style={{fontSize: 18, color: '#666'}}>Color</Text>
          <View
            style={{marginTop: 4, flexDirection: 'row', alignItems: 'center'}}>
            {colors.map((color, index) => (
              <ColorPick
                key={index}
                color={color}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
              />
            ))}
          </View>
        </View>
        <View style={{marginTop: 32}}>
          <Text style={{fontSize: 18, color: '#666'}}>Sizes</Text>
          <View
            style={{
              marginTop: 8,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 32,
              paddingRight: 32,
            }}>
            {sizes.map((size, index) => (
              <SizePick
                key={index}
                size={size}
                activeSize={activeSize}
                setActiveSize={setActiveSize}
              />
            ))}
          </View>
        </View>
        <View style={{marginTop: 32, alignItems: 'center'}}>
          <View style={styles.buyButton}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
              Add to cart
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const ColorPick: FC<ColorProps> = ({color, activeColor, setActiveColor}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => setActiveColor(color)}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'skyblue',
          borderWidth: activeColor === color ? 2 : 0,
          borderRadius: 999,
          width: 52,
          height: 52,
          marginLeft: 8,
          marginRight: 8,
        }}>
        <View
          style={{
            backgroundColor: color,
            width: 32,
            height: 32,
            borderRadius: 999,
            elevation: 3,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const SizePick: FC<SizeProps> = ({size, activeSize, setActiveSize}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{flex: 1, alignItems: 'center'}}
      onPress={() => setActiveSize(size)}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: activeSize === size ? '#4287f5' : 'lightgray',
          width: '100%',
          height: activeSize === size ? 52 : 36,
          elevation: activeSize === size ? 3 : 0,
          shadowColor: 'blue',
          borderRadius: activeSize === size ? 12 : 0,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: activeSize === size ? 'white' : '#bababa',
          }}>
          {size}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
    minHeight: screenHeight,
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    width: screenWidth,
    height: imageHeight,
    borderBottomLeftRadius: 64,
    borderBottomRightRadius: 64,
    elevation: 6,
  },
  imageStyle: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 16,
  },
  headtitle: {
    color: 'black',
    fontSize: 48,
    fontWeight: '600',
  },
  subtitle: {
    color: '#666',
    fontSize: 24,
  },
  buyButton: {
    width: '90%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4287f5',
    borderRadius: 12,
    elevation: 6,
    shadowColor: 'blue',
  },
});

export default ItemScreen;
