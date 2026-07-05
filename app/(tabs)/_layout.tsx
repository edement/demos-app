import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';

function CenterButton() {
  const router = useRouter();

  return (
    <View
      style={[
        styles.centerButtonContainer, 
        { bottom: 90 - 30 }
      ]}
      pointerEvents="box-none"
    >
      <TouchableOpacity
        style={styles.centerButton}
        activeOpacity={0.85}
        onPress={() => router.push('/create-class')}
      >
        <Text style={styles.centerButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: colors.purple,
          tabBarInactiveTintColor: 'rgba(255,255,255,0.3)',
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '500',
            marginTop: 2,
          },
        }}
      >
        <Tabs.Screen
          name="feed"
          options={{
            tabBarLabel: 'Лента',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            tabBarLabel: 'Расписание',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="create-class"
          options={{
            tabBarIcon: () => null,
            tabBarButton: () => <View style={{ flex: 1 }} />,
          }}
        />
        <Tabs.Screen
          name="dashboard"
          options={{
            tabBarLabel: 'Аналитика',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="stats-chart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: 'Профиль',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>

      <CenterButton />
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.charcoal,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
    height: 90,
    paddingBottom: 20,
    paddingTop: 10,
  },
  centerButtonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.purple,

  },
  centerButton: {
    width: 22,
    height: 22,
    borderRadius: 5,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  centerButtonText: {
    color: colors.purple,
    alignItems: 'center',
    fontSize: 26,
    fontWeight: '300',
    lineHeight: 25,
  },
});