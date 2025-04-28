import { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
    'DancingScript-Bold': DancingScript_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Redirect to the tabs layout
  return <Redirect href="/(tabs)" />;
}