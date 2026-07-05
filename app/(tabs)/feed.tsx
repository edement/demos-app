import ClassCard from '@/components/feed/class-card';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FeaturedBanner from '../../components/feed/feature-banner';
import FeedTabs from '../../components/feed/feed-tabs';
import SearchBar from '../../components/feed/search-bar';
import StyleFilters from '../../components/feed/style-filters';
import { colors } from '../../constants/colors';

const CLASSES = [
  {
    id: '1',
    title: 'Брейкданс для начинающих',
    trainer: 'Иван Петров',
    date: '15 марта',
    time: '18:00',
    location: 'Студия Demokrat, зал 1',
    price: '1000 ₽',
    style: 'Брейк',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1974',
    tag: 'all',
  },
  {
    id: '2',
    title: 'Хип-хоп интенсив',
    trainer: 'Мария Сидорова',
    date: '16 марта',
    time: '19:00',
    location: 'Студия Demokrat, зал 2',
    price: '1200 ₽',
    style: 'Хип-хоп',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1974',
    tag: 'foryou',
  },
  {
    id: '3',
    title: 'Поппинг воркшоп',
    trainer: 'Алексей Иванов',
    date: '17 марта',
    time: '17:00',
    location: 'Парк Горького',
    price: '800 ₽',
    style: 'Поппинг',
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1974',
    tag: 'nearby',
  },
  {
    id: '4',
    title: 'Вакинг для всех',
    trainer: 'Дмитрий Козлов',
    date: '18 марта',
    time: '20:00',
    location: 'Студия Demokrat, зал 1',
    price: '1000 ₽',
    style: 'Вакинг',
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=1974',
    tag: 'week',
  },
];

export default function Feed() {
  return (
  <View style={styles.debugPosition}>
    <ClassCard 
      key={4}
      title={'Вакинг для всех'}
      trainer={'Дмитрий Козлов'}
      date={'18 марта'}
      time={'20:00'}
      location={'Студия Demos, зал 1'}
      price={'1000 ₽'}
      style={'Вакинг'}
      image={'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=1974'}
      onPress={() => {}}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  debugPosition: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  empty: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  emptyText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 15,
  },
});