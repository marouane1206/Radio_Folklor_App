import * as React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import Background from '../components/Background';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

// navigation
import TabNavigation from './TabNavigation';

// components
import LanguageBar from '../components/LanguageBar';

// screens
import ModalMusicPlayer from '../screens/ModalMusicPlayer';
import ModalMoreOptions from '../screens/ModalMoreOptions';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Background>
        <LanguageBar />
        <Stack.Navigator
          screenOptions={{
            presentation: 'fullScreenModal'
          }}
      >
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="ModalMusicPlayer"
          component={ModalMusicPlayer}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ModalMoreOptions"
          component={ModalMoreOptions}
          options={{
            animation: 'slide_from_bottom',
            headerShown: false,
            presentation: 'transparentModal'
          }}
        />
      </Stack.Navigator>
      </Background>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});

export default RootStack;
