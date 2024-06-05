import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Text, View, StatusBar } from 'react-native';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#202024', alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Text style={{ fontFamily: 'Roboto_700Bold' }}>Hello World!</Text> : <View /> }
    </View>
  );
}
