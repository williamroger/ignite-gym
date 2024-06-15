import { Platform } from 'react-native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useStyled } from '@gluestack-ui/themed';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';

import { Home } from '@screens/Home';
import { History } from '@screens/History';
import { Profile } from '@screens/Profile';
import { Exercise } from '@screens/Exercise';

type AppRoutes = {
  home: undefined;
  history: undefined;
  exercise: undefined;
  profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const styled = useStyled();
  const iconSize = styled.config.tokens.space[6];
  const tabBarActiveColor = styled.config.tokens.colors['green500'];
  const tabBarInactiveColor = styled.config.tokens.colors['trueGray200'];
  const tabBarBackgroundColor = styled.config.tokens.colors['trueGray600'];
  const tabBarPaddingBottom = styled.config.tokens.space[10];
  const tabBarPaddingTop = styled.config.tokens.space[6];

  return (
    <Navigator 
      screenOptions={{ 
        headerShown: false, 
        tabBarShowLabel: false, 
        tabBarActiveTintColor: tabBarActiveColor,
        tabBarInactiveTintColor: tabBarInactiveColor,
        tabBarStyle: {
          backgroundColor: tabBarBackgroundColor,
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: tabBarPaddingBottom,
          paddingTop: tabBarPaddingTop,
        }
        }}
    >
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="exercise"
        component={Exercise}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}