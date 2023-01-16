import React, {FC, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {carouselItems} from '../constants';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = 500;

interface CardProps {
  label: string;
  price: string;
  src: any;
}

const Carousel: FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  const handlePagination = (e: any) => {
    const x = e.nativeEvent.contentOffset.x;
    const sliderWidth = e.nativeEvent.layoutMeasurement.width;

    const slide = x / sliderWidth;
    setActiveImage(slide);
  };

  return (
    <>
      <View style={styles.carouselContainer}>
        <View style={styles.searchBox}>
          <Image
            style={{width: 22, height: 22, marginLeft: 4, marginRight: 8}}
            source={require('../assets/search.png')}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            placeholderTextColor="#d4d2d2"
            maxLength={120}
          />
        </View>
        <FlatList<CardProps>
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={carouselItems}
          renderItem={({item}) => (
            <CarouselCard
              label={item.label}
              price={item.price}
              src={item.src}
            />
          )}
          keyExtractor={item => item.src}
          onScroll={e => handlePagination(e)}
        />
      </View>
      <View style={styles.paginationContainer}>
        {carouselItems.map((item, index) => (
          <View
            key={index}
            style={
              activeImage === index
                ? styles.paginationDotActive
                : styles.paginationDot
            }
          />
        ))}
      </View>
    </>
  );
};

const CarouselCard: FC<CardProps> = ({label, price, src}) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.imageStyle} resizeMode="cover" source={src} />
      <View style={styles.carouselContent}>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#999'}}>
          Recommendations
        </Text>
        <Text style={{fontSize: 46, fontWeight: '700', color: 'white'}}>
          {label}
        </Text>
        <Text style={{fontSize: 24, fontWeight: '800', color: 'skyblue'}}>
          {price}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0,0, 0.6)',
    alignItems: 'center',
    width: '80%',
    height: 48,
    top: 15,
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 12,
    overflow: 'hidden',
  },
  searchInput: {
    color: 'white',
    flex: 1,
  },
  carouselContainer: {
    position: 'relative',
    width: imageWidth,
    height: imageHeight,
    alignItems: 'center',
    borderBottomLeftRadius: 64,
    borderBottomRightRadius: 64,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.0,

    elevation: 10,
  },
  carouselContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 32,
  },
  imageContainer: {
    width: imageWidth,
    alignItems: 'center',
  },
  imageStyle: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  paginationContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationDot: {
    backgroundColor: 'skyblue',
    opacity: 0.4,
    width: 10,
    height: 10,
    borderRadius: 99,
    margin: 3,
  },
  paginationDotActive: {
    backgroundColor: 'skyblue',
    width: 12,
    height: 12,
    borderRadius: 99,
    margin: 3,
  },
});

export default Carousel;
