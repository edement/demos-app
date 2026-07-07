import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';

  interface Class {
    id: string;
    title: string;
    trainer: string;
    date: string;
    time: string;
    location: string;
    price: string;
    style: string;
    image: string;
  }

  interface ClassCardProps {
    item: Class;
    onPress: () => void;
  }

  export default function ClassCard({
    item, onPress,
  }: ClassCardProps) {
    const [day, month] = item.date.split(' ');
    const shortMonth = month.slice(0, 3).toUpperCase();

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.95}
      >
        {/* Картинка */}
        <ImageBackground
          source={{ uri: item.image }}
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
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.trainer}>{item.trainer}</Text>
          <View style={styles.location}>
            <View style={styles.locationIcon}><Ionicons name="location-outline" size={14} color={colors.textInputGray} /></View>
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 16,
      padding: 10,
      backgroundColor: colors.charcoal,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: colors.purple,
    },
    image: {
      width: '100%',
      aspectRatio: 16 / 9,
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