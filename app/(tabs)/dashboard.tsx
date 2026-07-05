import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';

const USER = {
  name: 'Иван Петров',
  email: 'ivan@demokrat.ru',
  role: 'Тренер',
  avatar: 'ИП',
};

const STATS = [
  { label: 'Занятий', value: '12' },
  { label: 'Учеников', value: '48' },
  { label: 'Часов', value: '96' },
];

const SETTINGS = [
  { label: 'Уведомления' },
  { label: 'Язык' },
  { label: 'Конфиденциальность' },
  { label: 'О приложении' },
  { label: 'Выход' },
];

export default function Profile() {
  const insets = useSafeAreaInsets();
  const [settingsVisible, setSettingsVisible] = useState(false);

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.content, { paddingTop: insets.top + 16 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Аватар + инфо */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{USER.avatar}</Text>
          </View>
          <Text style={styles.name}>{USER.name}</Text>
          <Text style={styles.email}>{USER.email}</Text>
          <View style={styles.roleBadge}>
            <Text style={styles.roleText}>{USER.role}</Text>
          </View>

          <TouchableOpacity
            style={styles.settingsBtn}
            onPress={() => setSettingsVisible(true)}
          >
            <Text style={styles.settingsBtnText}>⚙️ Настройки</Text>
          </TouchableOpacity>
        </View>

        {/* Статистика */}
        <View style={styles.statsRow}>
          {STATS.map((stat, index) => (
            <View
              key={index}
              style={[
                styles.statItem,
                index < STATS.length - 1 && styles.statItemBorder,
              ]}
            >
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

      </ScrollView>

      {/* Модалка настроек */}
      <Modal
        visible={settingsVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setSettingsVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setSettingsVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>Настройки</Text>

            <View style={styles.settingsList}>
              {SETTINGS.map((setting, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.settingItem,
                    index < SETTINGS.length - 1 && styles.settingItemBorder,
                  ]}
                >
                  <Text style={[
                        styles.settingLabel,
                        setting.label === 'Выход' && styles.settingExitLabel,
                    ]}>
                        {setting.label}
                  </Text>
                  <Text style={styles.settingArrow}>›</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },

  // Профиль
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: 'rgba(139,92,246,0.2)',
    borderWidth: 2,
    borderColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: colors.purple,
    fontSize: 28,
    fontWeight: '700',
  },
  name: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  email: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    marginBottom: 12,
  },
  roleBadge: {
    backgroundColor: 'rgba(139,92,246,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(139,92,246,0.3)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 16,
  },
  roleText: {
    color: colors.purple,
    fontSize: 13,
    fontWeight: '600',
  },
  settingsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.charcoal,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  settingsBtnText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },

  // Статистика
  statsRow: {
    flexDirection: 'row',
    backgroundColor: colors.charcoal,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    marginBottom: 32,
    overflow: 'hidden',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  statItemBorder: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.05)',
  },
  statValue: {
    color: colors.purple,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
  },

  // Выход
  logoutBtn: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  logoutText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 15,
    fontWeight: '500',
  },

  // Модалка
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.charcoal,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: 40,
  },
  modalHandle: {
    width: 40,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  settingsList: {
    backgroundColor: colors.charcoal,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  settingItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  settingLabel: {
    color: colors.white,
    fontSize: 15,
  },
  settingArrow: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 22,
  },
  settingExitLabel: {
    color: 'rgba(219, 45, 45, 0.7)',
    fontSize: 15,
  },
});