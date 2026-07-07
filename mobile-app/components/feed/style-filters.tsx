import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';

const STYLES = [
  { id: '1', label: 'Брейк', emoji: '🕺' },
  { id: '2', label: 'Хип-хоп', emoji: '🎤' },
  { id: '3', label: 'Вакинг', emoji: '💃' },
  { id: '4', label: 'Хай хилс', emoji: '👠' },
  { id: '5', label: 'Контемп', emoji: '🌊' },
  { id: '6', label: 'Поппинг', emoji: '⚡' },
];

export default function StyleFilters() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handlePress = (id: string) => {
    //TODO: реализовать страницы с карточками по стиялм
    setSelected(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Стили</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {STYLES.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[styles.pill, selected === item.id && styles.pillActive]}
            onPress={() => handlePress(item.id)}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={[styles.label, selected === item.id && styles.labelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  scroll: {
    paddingHorizontal: 16,
    gap: 10,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.gray,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  pillActive: {
    backgroundColor: colors.purple,
    borderColor: colors.purple,
  },
  emoji: {
    fontSize: 14,
  },
  label: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    fontWeight: '500',
  },
  labelActive: {
    color: colors.white,
    fontWeight: '700',
  },
});