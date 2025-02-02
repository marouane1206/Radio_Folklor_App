import React, { useContext } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../constants';
import { LanguageContext } from '../context/LanguageContext';
import ScreenHeader from '../components/ScreenHeader';
import LanguageSelector from '../components/LanguageSelector';

function Settings() {
  const { t } = useContext(LanguageContext);
  return (
    <View style={styles.container}>
      
      <ScreenHeader title={t('settings')} showBack={false} />
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('language')}</Text>
          <View style={styles.sectionContent}>
            <LanguageSelector />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionContent: {
    marginTop: 16,
    alignItems: 'flex-start',
  },
  sectionHeader: {
    marginBottom: 15,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
  container: {
    backgroundColor: '#000',
    flex: 1
  }
});

export default Settings;
