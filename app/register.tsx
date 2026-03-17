import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import { useRouter } from "expo-router";

export default function Register() {
    const router = useRouter();
    return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Logo */}
    <Text style={styles.emoji}>🗑️</Text>
    <Text style={styles.title}>Create Account</Text>
    <Text style={styles.tagline}>Join SmartTrash today</Text>

      {/* Full Name */}
    <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor={Colors.textGray}
    />

      {/* Email */}
    <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Colors.textGray}
        keyboardType="email-address"
    />

      {/* Phone */}
    <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor={Colors.textGray}
        keyboardType="phone-pad"
    />

      {/* Password */}
    <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={Colors.textGray}
        secureTextEntry
    />

      {/* Confirm Password */}
    <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={Colors.textGray}
        secureTextEntry
    />

      {/* Role selector */}
    <Text style={styles.label}>I am a:</Text>
    <View style={styles.roleContainer}>
        <TouchableOpacity style={[styles.roleButton, styles.roleActive]}>
        <Text style={styles.roleTextActive}>👤 Citizen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roleButton}>
        <Text style={styles.roleText}>🏛️ Authority</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roleButton}>
        <Text style={styles.roleText}>🤝 Association</Text>
        </TouchableOpacity>
    </View>

      {/* Register Button */}
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
    </TouchableOpacity>

      {/* Login Link */}
    <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={styles.loginLink}>login here</Text>
        </Text>
    </TouchableOpacity>
    

    </ScrollView>
    );
}

const styles = StyleSheet.create({
container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
    },
    emoji: {
    fontSize: 56,
    marginBottom: 12,
    },
    title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.textDark,
    marginBottom: 8,
    },
    tagline: {
    fontSize: 14,
    color: Colors.primary,
    marginBottom: 36,
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
    label: {
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.textDark,
    marginBottom: 12,
    marginTop: 4,
    },
    roleContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
    width: "100%",
    },
    roleButton: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
    backgroundColor: Colors.primaryLight,
    alignItems: "center",
},
    roleActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
},
    roleText: {
    color: Colors.textGray,
    fontSize: 12,
    fontWeight: "600",
    },
    roleTextActive: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "600",
    },
    button: {
    width: "100%",
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 24,
},
    buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
},
    loginText: {
    color: Colors.textGray,
    fontSize: 14,
},
    loginLink: {
    color: Colors.primary,
    fontWeight: "bold",
    },
});
