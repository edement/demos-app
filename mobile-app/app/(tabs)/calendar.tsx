import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';

const CLASSES = [
  {
    id: '1',
    title: 'Брейкданс',
    trainer: 'Иван Петров',
    time: '18:00',
    location: 'Студия Demokrat, зал 1',
    date: '2025-03-15',
  },
  {
    id: '2',
    title: 'Хип-хоп',
    trainer: 'Мария Сидорова',
    time: '19:00',
    location: 'Студия Demokrat, зал 2',
    date: '2025-03-15',
  },
  {
    id: '3',
    title: 'Поппинг',
    trainer: 'Алексей Иванов',
    time: '17:00',
    location: 'Парк Горького',
    date: '2025-03-17',
  },
  {
    id: '4',
    title: 'Локинг',
    trainer: 'Дмитрий Козлов',
    time: '20:00',
    location: 'Студия Demokrat, зал 1',
    date: '2025-03-20',
  },
];

export default function CalendarScreen() {
  const insets = useSafeAreaInsets();
  const [selectedDate, setSelectedDate] = useState('2025-03-15');

  const filteredClasses = CLASSES.filter(c => c.date === selectedDate);

  const datesWithClasses = [...new Set(CLASSES.map(c => c.date))];

  const markedDates = datesWithClasses.reduce((acc, date) => {
    const isSelected = date === selectedDate;
    acc[date] = {
      customStyles: {
        container: {
          width: 32,
          height: 32,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.purple,
          ...(isSelected && {
            borderWidth: 2,
            borderColor: colors.white,
          }),
        },
        text: {
          color: colors.white,
          fontWeight: '700',
        },
      },
    };
    return acc;
  }, {} as any);

  // Если выбранная дата не имеет занятий — белый круг без заливки
  if (!markedDates[selectedDate]) {
    markedDates[selectedDate] = {
      customStyles: {
        container: {
          width: 32,
          height: 32,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: colors.white,
        },
        text: {
          color: colors.white,
          fontWeight: '700',
        },
      },
    };
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + 16 }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Календарь</Text>

      <Calendar
        markingType="custom"
        current={selectedDate}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
        theme={{
          backgroundColor: colors.charcoal,
          calendarBackground: colors.charcoal,
          textSectionTitleColor: 'rgba(255,255,255,0.4)',
          todayTextColor: colors.purple,
          dayTextColor: colors.white,
          textDisabledColor: 'rgba(255,255,255,0.2)',
          arrowColor: colors.purple,
          monthTextColor: colors.white,
          textDayFontWeight: '500',
          textMonthFontWeight: '700',
          textDayHeaderFontWeight: '600',
        }}
        style={styles.calendar}
      />

      <Text style={styles.sectionTitle}>
        {filteredClasses.length > 0
          ? `Занятия ${selectedDate}`
          : `Нет занятий ${selectedDate}`}
      </Text>

      {filteredClasses.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardLeft}>
            <Text style={styles.cardTime}>{item.time}</Text>
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDetail}>{item.trainer}</Text>
            <Text style={styles.cardDetail}>{item.location}</Text>
          </View>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  calendar: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  },
  sectionTitle: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
    marginLeft: 4,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.charcoal,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    marginBottom: 10,
    overflow: 'hidden',
  },
  cardLeft: {
    backgroundColor: 'rgba(139,92,246,0.15)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(139,92,246,0.2)',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 72,
  },
  cardTime: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: '700',
  },
  cardRight: {
    padding: 14,
    gap: 4,
    flex: 1,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
  cardDetail: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
  },
});