import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {BaseURL} from '../../Connectivity/FetchService';

const PromotionalBanner = (props) => {
  const {item} = props.route.params;
  return (
    <View>
      <Text>{item.shopname}</Text>
      <Image
        source={{uri: `${BaseURL}/images/${item.promotionalbanner}`}}
        style={styles.image}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default PromotionalBanner;

const styles = StyleSheet.create({
  image: {width: '100%', height: Dimensions.get().height * 0.5},
});
