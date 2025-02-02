import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LanguageSelector from './LanguageSelector';

const LanguageBar = () => {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.container, { 
      top: Platform.OS === 'ios' ? insets.top + 10 : 40 
    }]}>
      <LanguageSelector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16, 
    alignItems: 'flex-start',
    zIndex: 9999,
    elevation: 9999,
  }
});

export default LanguageBar;