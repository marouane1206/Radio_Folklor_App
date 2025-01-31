import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants';
import { LanguageContext } from '../context/LanguageContext';

// navigation stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackLibrary from './StackLibrary';

// components
import CustomTabBar from '../components/CustomTabBar';

// icons
import SvgTabHome from '../icons/Svg.TabHome';
import SvgTabLibrary from '../icons/Svg.TabLibrary';
import SvgTabSearch from '../icons/Svg.TabSearch';
import { Ionicons } from '@expo/vector-icons';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const { t } = React.useContext(LanguageContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let icon = <SvgTabHome active={focused} />;

          if (route.name === 'StackSearch') {
            icon = <SvgTabSearch active={focused} />;
          } else if (route.name === 'StackLibrary') {
            icon = <SvgTabLibrary active={focused} />;
          } else if (route.name === 'Settings') {
            icon = <Ionicons name="settings-outline" size={24} color={focused ? colors.white : colors.greyInactive} />;
          }

          return icon;
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.greyInactive
      })}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{
          tabBarLabel: t('home')
        }}
      />
      <Tab.Screen
        name="StackSearch"
        component={StackSearch}
        options={{
          tabBarLabel: t('search')
        }}
      />
      <Tab.Screen
        name="StackLibrary"
        component={StackLibrary}
        options={{
          tabBarLabel: t('library')
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
