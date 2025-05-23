import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#25292e",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen for this app</Text>
    </View>
  );
}
