import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tela de configurações</Text>

      <Link href="/">
        <Text>Clique aqui para navegar até a Home</Text>
      </Link>

      <Link href="/ajuda">
        <Text>Clique aqui para navegar até a Ajuda</Text>
      </Link>
    </View>
  );
}