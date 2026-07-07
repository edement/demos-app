import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';

const { width } = Dimensions.get('window');

export default function FeaturedBanner() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1974' }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>⭐ Топ занятие</Text>
          </View>
          <Text style={styles.title}>Брейкданс с Иваном</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>📅 15 марта</Text>
            <Text style={styles.infoText}>🕐 18:00</Text>
            <Text style={styles.price}>1000 ₽</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    height: 280,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 0,
  },
  content: {
    padding: 16,
    gap: 8,
  },
  badge: {
    backgroundColor: 'rgba(139,92,246,0.85)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
  },
  price: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 'auto',
  },
});