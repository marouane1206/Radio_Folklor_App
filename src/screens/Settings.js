import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { View, StyleSheet } from 'react-native';
import ScreenHeader from '../components/ScreenHeader';
import LanguageSelector from '../components/LanguageSelector';

const Settings = () => {
  const { t } = useContext(LanguageContext);
  return (
    <View style={styles.container}>
      <ScreenHeader title={t('settings')} />
      <LanguageSelector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default Settings;