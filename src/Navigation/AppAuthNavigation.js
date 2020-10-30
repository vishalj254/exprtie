/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import ShopDisplay from '../Screens/ShopDisplay/ShopDisplay';
import PromotionalBanner from '../Screens/PromotionalBanner/PromotionalBanner';

export default function AppAuthNavigation() {
  const Auth = createStackNavigator();

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Auth.Navigator>
        <Auth.Screen name={'ShopDisplay'} component={ShopDisplay} />
        <Auth.Screen name={'PromotionalBanner'} component={PromotionalBanner} />
      </Auth.Navigator>
    </NavigationContainer>
  );
}
