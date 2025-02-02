import React, { useContext } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  I18nManager
} from 'react-native';
import { Image } from 'react-native';
import { flags } from '../constants/flags';
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
        <Image
          source={flags.en}
          style={styles.flag}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, currentLanguage === 'fr' && styles.activeButton]}
        onPress={() => handleLanguageChange('fr')}
      >
        <Image
          source={flags.fr}
          style={styles.flag}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, currentLanguage === 'ar' && styles.activeButton]}
        onPress={() => handleLanguageChange('ar')}
      >
        <Image
          source={flags.ar}
          style={styles.flag}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.75)',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    padding: 6,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  activeButton: {
    backgroundColor: '#666'
  },
  buttonText: {
    color: 'white'
  },
  flag: {
    width: 32,
    height: 24,
    resizeMode: 'contain'
  }
});

export default LanguageSelector;
