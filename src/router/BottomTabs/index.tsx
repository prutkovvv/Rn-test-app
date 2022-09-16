import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBarIcon } from '@src/components/TabBarIcon';
import { IonicProps } from '@src/components/TabBarIcon/types';
import { Home } from '@src/scenes/Home';

import { BottomTabsParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const homeScreenOptions = {
  tabBarIcon: (props: IonicProps) => {
    return <TabBarIcon name="home-outline" focusedIconName="home" {...props} />;
  },
};

export const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }} backBehavior="history" initialRouteName="Home">
      <Tab.Screen options={homeScreenOptions} name="Home" component={Home} />
    </Tab.Navigator>
  );
};
