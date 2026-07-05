import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';

interface ClassCardProps {
  title: string;
  trainer: string;
  date: string;
  time: string;
  location: string;
  price: string;
  style: string;
  image: string;
  onPress: () => void;
}

export default function ClassCard({
  title,
  trainer,
  date,
  time,
  location,
  price,
  style,
  image,
  onPress,
}: ClassCardProps) {
  const [day, month] = date.split(' ');
  const shortMonth = month.slice(0, 3).toUpperCase();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.95}
    >
      {/* Картинка */}
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.styleBadge}>
          <Text style={styles.styleBadgeDay}>{day}</Text>
          <Text style={styles.styleBadgeMonth}>{shortMonth}</Text>
        </View>
      </ImageBackground>

      {/* Информация */}
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.trainer}>{trainer}</Text>
        <View style={styles.location}>
          <View style={styles.locationIcon}><Ionicons name="location-outline" size={14} color={colors.textInputGray} /></View>
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 240,
    marginHorizontal: 16,
    backgroundColor: colors.charcoal,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: colors.purple,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    height: 130,
    justifyContent: 'flex-start',
  },
  imageStyle: {
    borderRadius: 10,
  },
  styleBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  styleBadgeDay: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  styleBadgeMonth: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '600',
  },
  info: {
    flex: 1,
    paddingVertical: 10,
  },
  title: {
    flex: 1,
    alignContent: 'flex-end',
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  trainer: {
    flex: 1,
    alignContent: 'center',
    color: colors.purple,
    fontSize: 14,
  },
  location: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: "row",
  },
  locationIcon: {

  },
  locationText: {
    color: 'rgba(255,255,255,0.5)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  price: {
    color: colors.purple,
    fontSize: 20,
    fontWeight: '800',
  },
  enrollBtn: {
    backgroundColor: colors.purple,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  enrollBtnText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
});