import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {trendingItems} from '../constants';

interface TrendingProps {
  onScreen?: boolean;
}

interface TrendingCardProps {
  onScreen?: boolean;
  label: string;
  price: string;
  src: any;
}

const Trending: FC<TrendingProps> = ({onScreen}) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={onScreen ? {display: 'none'} : styles.textContainer}>
        <Text style={styles.textHeadtitle}>Trending</Text>
        <Text
          testID="trending-nav"
          style={styles.textSubtitle}
          onPress={() => navigation.navigate('Trending')}>
          Show all
        </Text>
      </View>
      <FlatList
        horizontal={onScreen ? false : true}
        numColumns={onScreen ? 2 : 0}
        columnWrapperStyle={onScreen ? {justifyContent: 'space-around'} : null}
        showsHorizontalScrollIndicator={false}
        data={trendingItems}
        renderItem={({item}) => (
          <TrendingCard
            onScreen={onScreen}
            label={item.label}
            price={item.price}
            src={item.src}
          />
        )}
      />
    </View>
  );
};

const TrendingCard: FC<TrendingCardProps> = ({label, price, src, onScreen}) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate('Item', {label, price, src})}>
      <View style={onScreen ? styles.bigCardContainer : styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
            source={src}
          />
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.itemLabel}>{label}</Text>
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  textHeadtitle: {
    color: '#666',
    fontSize: 22,
    fontWeight: '600',
  },
  textSubtitle: {
    color: '#1c85fc',
    fontWeight: '700',
    fontSize: 16,
  },
  cardContainer: {
    width: 150,
    height: 160,
    borderRadius: 12,
    margin: 12,
    elevation: 4,
  },
  bigCardContainer: {
    width: 180,
    height: 190,
    borderRadius: 12,
    margin: 12,
    elevation: 2,
  },
  imageContainer: {
    width: '100%',
    height: '65%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  priceContainer: {
    width: '100%',
    height: '35%',
    backgroundColor: 'white',
    padding: 8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  itemLabel: {
    color: '#999',
    fontSize: 14,
  },
  priceText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '800',
  },
});

export default Trending;
