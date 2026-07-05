import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';

const TABS = [
  { id: 'all', label: 'Все события' },
  { id: 'foryou', label: 'Для вас' },
  { id: 'nearby', label: 'Ближайшие' },
  { id: 'week', label: 'На этой неделе' },
];

interface FeedTabsProps {
  activeTab: string;
  onTabPress: (id: string) => void;
}

export default function FeedTabs({ activeTab, onTabPress }: FeedTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {TABS.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tab}
          onPress={() => onTabPress(tab.id)}
        >
          <Text style={[styles.tabText, activeTab === tab.id && styles.tabTextActive]}>
            {tab.label}
          </Text>
          {activeTab === tab.id && <View style={styles.indicator} />}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 24,
    marginBottom: 16,
  },
  tab: {
    alignItems: 'center',
    paddingVertical: 8,
    gap: 6,
  },
  tabText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 14,
    fontWeight: '500',
  },
  tabTextActive: {
    color: colors.white,
    fontWeight: '700',
  },
  indicator: {
    width: '100%',
    height: 2,
    backgroundColor: colors.purple,
    borderRadius: 1,
  },
});