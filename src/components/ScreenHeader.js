import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';
import { colors, device, gStyle } from '../constants';

// components
import TouchIcon from './TouchIcon';

function ScreenHeader({ showBack, title }) {
  const navigation = useNavigation();

  return (
    <BlurView tint="dark" intensity={95} style={styles.container}>
      {showBack && (
        <View style={styles.left}>
          <TouchIcon
            icon={<Feather color={colors.white} name="chevron-left" />}
            onPress={() => navigation.goBack(null)}
          />
        </View>
      )}

      <View style={styles.containerText}>
        <Text style={styles.text}>{title}</Text>
      </View>

      {showBack && <View style={gStyle.flex1} />}
    </BlurView>
  );
}

ScreenHeader.defaultProps = {
  showBack: false
};

ScreenHeader.propTypes = {
  // required
  title: PropTypes.string.isRequired,

  // optional
  showBack: PropTypes.bool
};

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingHorizontal: 24,
    paddingTop: device.iPhoneNotch ? 48 : 24
  },
  containerText: {
    ...gStyle.flex5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    ...gStyle.textSpotifyBold16,
    color: colors.white,
    textAlign: 'center'
  },
  left: {
    ...gStyle.flex1,
    alignItems: 'flex-start'
  }
});

export default ScreenHeader;
