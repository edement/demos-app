import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function SearchBar() {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.island}>
        <Text style={styles.icon}>🔍</Text>
        <Text style={styles.placeholder}>Поиск занятий...</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 10,
    alignItems: 'center',
  },
  island: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(34,34,34,0.92)',
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 12,
    width: width * 0.7,
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  icon: {
    fontSize: 14,
  },
  placeholder: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 14,
  },
});