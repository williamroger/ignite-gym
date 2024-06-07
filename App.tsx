import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { View, StatusBar } from 'react-native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from "./config/gluestack-ui.config";

import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Loading /> : <View />}
    </GluestackUIProvider>
  );
}
