import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBarIcon } from '@src/components/TabBarIcon';
import { Home } from '@src/scenes/Home';

import { BottomTabsParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const homeScreenOptions = { tabBarIcon: TabBarIcon };

export const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }} backBehavior="history" initialRouteName="Home">
      <Tab.Screen options={homeScreenOptions} name="Home" component={Home} />
    </Tab.Navigator>
  );
};
