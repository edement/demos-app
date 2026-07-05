import { colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const STYLES = ['Брейк', 'Хип-хоп', 'Вакинг', 'Хай хилс', 'Контемп', 'Поппинг'];

export default function CreateClass() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={[styles.content, { paddingTop: insets.top + 16 }]}
          showsVerticalScrollIndicator={false}
        >

          {/* Шапка */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => router.back()}
            >
              <Ionicons name="chevron-back" size={24} color={colors.white} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Новое занятие</Text>
            <View style={{ width: 40 }} />
          </View>

          {/* Название */}
          <View style={styles.field}>
            <Text style={styles.label}>Название</Text>
            <TextInput
              style={styles.input}
              placeholder="Например: Брейкданс для начинающих"
              placeholderTextColor="rgba(255,255,255,0.3)"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          {/* Стиль танца */}
          <View style={styles.field}>
            <Text style={styles.label}>Стиль танца</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.stylesScroll}
            >
              {STYLES.map(style => (
                <TouchableOpacity
                  key={style}
                  style={[styles.stylePill, selectedStyle === style && styles.stylePillActive]}
                  onPress={() => setSelectedStyle(style)}
                >
                  <Text style={[styles.stylePillText, selectedStyle === style && styles.stylePillTextActive]}>
                    {style}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Дата и время */}
          <View style={styles.row}>
            <View style={[styles.field, { flex: 1 }]}>
              <Text style={styles.label}>Дата</Text>
              <TextInput
                style={styles.input}
                placeholder="ДД.ММ.ГГГГ"
                placeholderTextColor="rgba(255,255,255,0.3)"
                value={date}
                onChangeText={setDate}
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.field, { flex: 1 }]}>
              <Text style={styles.label}>Время</Text>
              <TextInput
                style={styles.input}
                placeholder="ЧЧ:ММ"
                placeholderTextColor="rgba(255,255,255,0.3)"
                value={time}
                onChangeText={setTime}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Место */}
          <View style={styles.field}>
            <Text style={styles.label}>Место</Text>
            <TextInput
              style={styles.input}
              placeholder="Адрес или название места"
              placeholderTextColor="rgba(255,255,255,0.3)"
              value={location}
              onChangeText={setLocation}
            />
          </View>

          {/* Цена */}
          <View style={styles.field}>
            <Text style={styles.label}>Цена (₽)</Text>
            <TextInput
              style={styles.input}
              placeholder="1000"
              placeholderTextColor="rgba(255,255,255,0.3)"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
          </View>

          {/* Кнопка */}
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Создать занятие</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
  },
  content: {
    padding: 24,
    paddingBottom: 60,
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.charcoal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  field: {
    gap: 8,
  },
  label: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: colors.charcoal,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: colors.white,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  stylesScroll: {
    gap: 8,
  },
  stylePill: {
    backgroundColor: colors.charcoal,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  stylePillActive: {
    backgroundColor: colors.purple,
    borderColor: colors.purple,
  },
  stylePillText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    fontWeight: '500',
  },
  stylePillTextActive: {
    color: colors.white,
    fontWeight: '700',
  },
  submitBtn: {
    backgroundColor: colors.purple,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 8,
  },
  submitBtnText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});