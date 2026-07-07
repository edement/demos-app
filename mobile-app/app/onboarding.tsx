import PhoneShape from '@/assets/images/phone-shape.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';

const { width, height } = Dimensions.get('window');

const SLIDES = [
  {
    id: '1',
    title: 'Находи мастер классы рядом',
    subtitle: 'Смотри занятия по танцам рядом с тобой и записывайся в пару нажатий',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1974',
  },
  {
    id: '2',
    title: 'Следи за расписанием',
    subtitle: 'Все твои занятия в одном календаре — никогда не пропустишь тренировку',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1974',
  },
  {
    id: '3',
    title: 'Развивайся вместе с нами',
    subtitle: 'Demos — место где уличная культура живёт и развивается каждый день',
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1974',
  },
];

const PHONE_WIDTH = width * 0.75;
const PHONE_HEIGHT = PHONE_WIDTH * 2;

export default function Onboarding() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [current, setCurrent] = useState(0);

  const isLast = current === SLIDES.length - 1;
  const slide = SLIDES[current];

  const flatListRef = useRef<FlatList>(null);

  const handleNext = async () => {
    if (isLast) {
      await AsyncStorage.setItem('onboarded', 'true')
      router.replace('/auth');
    } else {
      flatListRef.current?.scrollToIndex({ index: current + 1, animated: true});
      setCurrent(prev => prev + 1);
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('onboarded', 'true')
    router.replace('/auth');
  };

  return (
    <View style={styles.container}>

      {/* Фон */}
      <View style={styles.background} />
      
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        onMomentumScrollEnd={(e) => {
            const index = Math.round(e.nativeEvent.contentOffset.x / width);
            if (index >= SLIDES.length) return;
            setCurrent(index);
        }}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.slide}>
            <PhoneShape style={styles.phone} />
          </View>
        )}
      />

      {/* Нижний блок */}
      <View style={[styles.bottomSheet, { paddingBottom: insets.bottom + 24 }]}>
        <View style={styles.title}>
            <Text style={styles.titleText}>{slide.title}</Text>
            <Text style={styles.subtitleText}>{slide.subtitle}</Text>
        </View>

        {/* Кнопки и прогресс */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.skipBtn} onPress={handleSkip}>
            <Text style={styles.skipText}>Пропустить</Text>
          </TouchableOpacity>

          {/* Точки */}
          <View style={styles.dots}>
            {SLIDES.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, i === current && styles.dotActive]}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
            <Text style={styles.nextText}>{isLast ? 'Начать' : 'Далее'}</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.charcoal,
  },

  // Телефон
  phone: {
    flex: 1,
    marginTop: 100,
    zIndex: 0,
  },

  // Нижний блок
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.purple,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 40,
    height: height * 0.35,
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 15,
  },
  subtitle: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
    textAlign: 'center',
  },
  subtitleText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  skipBtn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  skipText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    fontWeight: '500',
  },
  dots: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  dotActive: {
    backgroundColor: colors.white,
  },
  nextBtn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  nextText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  slide: {
    width,
    alignItems: 'center',
  }
});