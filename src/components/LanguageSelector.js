import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, I18nManager } from 'react-native';
import { LanguageContext } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, t } = useContext(LanguageContext);

  const handleLanguageChange = async (lang) => {
    // Handle RTL for Arabic
    if (lang === 'ar') {
      await I18nManager.forceRTL(true);
    } else {
      await I18nManager.forceRTL(false);
    }
    changeLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, currentLanguage === 'en' && styles.activeButton]}
        onPress={() => handleLanguageChange('en')}
      >
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, currentLanguage === 'fr' && styles.activeButton]}
        onPress={() => handleLanguageChange('fr')}
      >
        <Text style={styles.buttonText}>Français</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, currentLanguage === 'ar' && styles.activeButton]}
        onPress={() => handleLanguageChange('ar')}
      >
        <Text style={styles.buttonText}>العربية</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#333',
  },
  activeButton: {
    backgroundColor: '#666',
  },
  buttonText: {
    color: 'white',
  },
});

export default LanguageSelector;