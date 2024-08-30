// Não importe react-native-gesture-handler na web
// import './gesture-handler';
import './src/apis/axiosInstances/axiosConfig';
import { useCallback, useEffect, useState } from 'react';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/context/store';
import { Provider } from 'react-redux';
import Index from './src/screens/Index';
import { defaultWhithTheme, defaultBlackTheme } from './src/themes/themes';
import * as SplashScreen from 'expo-splash-screen';


import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === 'dark'
      ? { ...DefaultTheme, colors: defaultBlackTheme.colors }
      : { ...DefaultTheme, colors: defaultWhithTheme.colors };



  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        if (!fontsLoaded) {
          setAppIsReady(false);
          return;
        }
        setAppIsReady(true);
      }
    }
    prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <NavigationContainer>
          <PaperProvider theme={paperTheme}>
            <NativeBaseProvider>
              <Index />
            </NativeBaseProvider>
          </PaperProvider>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});