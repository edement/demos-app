import GlowCircle from '@/components/ui/background-blobs';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import Logo from '../assets/images/first-page-logo.svg';
import { colors } from '../constants/colors';

SplashScreen.preventAutoHideAsync();

function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const exitOpacity = useSharedValue(1);

  // Стиль для обёртки логотипа — появление
  const logoStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  // Стиль для всего экрана — исчезновение
  const containerStyle = useAnimatedStyle(() => ({
    opacity: exitOpacity.value,
  }));

  useEffect(() => {
    // Появление
    opacity.value = withTiming(1, { duration: 600, easing: Easing.out(Easing.ease) });
    scale.value = withSpring(1, { damping: 12, stiffness: 100, mass: 0.8 });

    // Вызываем onFinish после полного завершения всех анимаций
    const timeout = setTimeout(() => onFinish(), 2300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View style={[styles.splash, containerStyle]}>
      <GlowCircle id="loading-circleBotRight" size={400} opacity={0.3} top={450} left={250} />
      <GlowCircle id="loading-circleTopRight" size={300} opacity={0.3} top={-144} left={170} />
      <GlowCircle id="loading-circleBotLeft" size={300} opacity={0.35} top={720} left={-130} />

      <Animated.View style={[styles.logoWrapper, logoStyle]}>
        <Logo width={240} height={160} />
      </Animated.View>

    </Animated.View>
  );
}

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
 
  // Функция ожидания + загрузки всего необходимого для приложения
  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 300));
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };
    prepare();
  }, []);

  if (!isReady || showSplash) {
    return <LoadingScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.charcoal },
      }}
    />
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