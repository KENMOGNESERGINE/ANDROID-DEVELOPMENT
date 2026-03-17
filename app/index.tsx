import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>

      {/* Logo */}
      <Text style={styles.emoji}>🗑️</Text>
      <Text style={styles.title}>SmartTrash</Text>
      <Text style={styles.tagline}>Report It. Clean It. Sell It.</Text>

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Colors.textGray}
        keyboardType="email-address"
      />

      {/* Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={Colors.textGray}
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/home")}>
  <Text style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity>

      {/* Register */}
      <TouchableOpacity onPress={() => router.push("/register")}>
  <Text style={styles.registerText}>
    Don't have an account?{" "}
    <Text style={styles.registerLink}>Register here</Text>
  </Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 12,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.textDark,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: Colors.primary,
    marginBottom: 48,
    fontStyle: "italic",
  },
  input: {
    width: "100%",
    backgroundColor: Colors.primaryLight,
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
    borderRadius: 10,
    padding: 16,
    color: Colors.textDark,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  registerText: {
    color: Colors.textGray,
    fontSize: 14,
  },
  registerLink: {
    color: Colors.primary,
    fontWeight: "bold",
  },
});
