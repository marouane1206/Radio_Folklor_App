import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { LanguageContext } from '../context/LanguageContext';
import ScreenHeader from '../components/ScreenHeader';
import LanguageSelector from '../components/LanguageSelector';

function Settings() {
  const { t } = useContext(LanguageContext);
  return (
    <View style={styles.container}>
      <ScreenHeader title={t('settings')} />
      <LanguageSelector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1
  }
});

export default Settings;
