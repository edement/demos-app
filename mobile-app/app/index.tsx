import GlowCircle from '@/components/ui/background-blobs';
import { colors } from '@/constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from '../assets/images/first-page-logo.svg';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const bootstrap = async () => {
      const onboarded = await AsyncStorage.getItem('onboarded');
      if (!onboarded) {
        router.replace('/onboarding');
        return;
      }

      const token = await AsyncStorage.getItem('token');
      if (token) {
        router.replace('/(tabs)/feed');
      } else {
        router.replace('/auth');
      }
    };

    bootstrap();
  }, []);

  return (
    <View style={styles.splash}>
      <GlowCircle id="loading-circleBotRight" size={400} opacity={0.3} top={450} left={250} />
      <GlowCircle id="loading-circleTopRight" size={300} opacity={0.3} top={-144} left={170} />
      <GlowCircle id="loading-circleBotLeft" size={300} opacity={0.35} top={720} left={-130} />

      <View style={styles.logoWrapper}>
        <Logo width={240} height={160} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: colors.charcoal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    zIndex: 1,
    alignItems: 'center',
  },
});