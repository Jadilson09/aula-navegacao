import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Ajuda() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tela de ajuda</Text>

      <Link href="/settings">
        <Text>Clique aqui para navegar até as Configurações</Text>
      </Link>

      <Link href="/">
        <Text>Clique aqui para navegar até a Home</Text>
      </Link>
    </View>
  );
}