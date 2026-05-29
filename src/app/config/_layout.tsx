import { Tabs } from "expo-router";           // ← faltava esse
import Ionicons from "@expo/vector-icons/Ionicons"; // ← faltava esse

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="app"
        options={{
          title: "Aplicativos",
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? "apps" : "apps-outline"} size={24} color="blue" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="bluetooth"
        options={{
          title: "Bluetooth",
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? "bluetooth" : "bluetooth-outline"} size={24} color="blue" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? "settings" : "settings-outline"} size={24} color="blue" />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}