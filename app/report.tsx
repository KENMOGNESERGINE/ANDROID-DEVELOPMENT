import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";

export default function Report() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Top Header */}
        <View style={styles.topHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Report Dirty Area</Text>
          <View style={{ width: 60 }} />
        </View>

        <View style={styles.body}>

          {/* Photo Section */}
          <Text style={styles.sectionTitle}>📸 Take a Photo</Text>
          <TouchableOpacity style={styles.photoBox}>
            <Text style={styles.photoEmoji}>📷</Text>
            <Text style={styles.photoTitle}>Tap to take photo</Text>
            <Text style={styles.photoSub}>
              Take a clear photo of the dirty area
            </Text>
          </TouchableOpacity>

          {/* Location Section */}
          <Text style={styles.sectionTitle}>📍 Location</Text>
          <View style={styles.locationBox}>
            <View style={styles.locationLeft}>
              <Text style={styles.locationEmoji}>📍</Text>
              <View>
                <Text style={styles.locationTitle}>Auto-detecting...</Text>
                <Text style={styles.locationSub}>
                  GPS will tag your exact location
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.detectButton}>
              <Text style={styles.detectButtonText}>Detect</Text>
            </TouchableOpacity>
          </View>

          {/* Description */}
          <Text style={styles.sectionTitle}>📝 Description</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Describe the dirty area... (e.g. garbage pile near the school gate)"
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          {/* Category */}
          <Text style={styles.sectionTitle}>🏷️ Category</Text>
          <View style={styles.categoryRow}>
            {[
              { emoji: "🗑️", label: "Garbage" },
              { emoji: "💧", label: "Drainage" },
              { emoji: "🪣", label: "Dumping" },
              { emoji: "🐀", label: "Infestation" },
            ].map((cat) => (
              <TouchableOpacity key={cat.label} style={styles.categoryChip}>
                <Text style={styles.categoryEmoji}>{cat.emoji}</Text>
                <Text style={styles.categoryLabel}>{cat.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* How it works info */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>ℹ️ What happens next?</Text>
            <Text style={styles.infoStep}>
              1. Your report is saved with GPS location
            </Text>
            <Text style={styles.infoStep}>
              2. Nearest authority is notified instantly
            </Text>
            <Text style={styles.infoStep}>
              3. You get updates when the area is cleaned
            </Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>📤 Submit Report</Text>
          </TouchableOpacity>

          <View style={{ height: 32 }} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topHeader: {
    backgroundColor: "#22C55E",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  backButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  backText: {
    color: "#22C55E",
    fontWeight: "bold",
    fontSize: 13,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 12,
    marginTop: 8,
  },
  photoBox: {
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#22C55E",
    borderStyle: "dashed",
    marginBottom: 24,
  },
  photoEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  photoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 6,
  },
  photoSub: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
  },
  locationBox: {
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#BBF7D0",
    marginBottom: 24,
  },
  locationLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  locationEmoji: {
    fontSize: 24,
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 2,
  },
  locationSub: {
    fontSize: 11,
    color: "#6B7280",
  },
  detectButton: {
    backgroundColor: "#22C55E",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  detectButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 13,
  },
  descriptionInput: {
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    padding: 16,
    fontSize: 14,
    color: "#000000",
    borderWidth: 1,
    borderColor: "#BBF7D0",
    marginBottom: 24,
    minHeight: 100,
  },
  categoryRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 24,
  },
  categoryChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#BBF7D0",
    gap: 6,
  },
  categoryEmoji: {
    fontSize: 16,
  },
  categoryLabel: {
    fontSize: 13,
    color: "#000000",
    fontWeight: "600",
  },
  infoBox: {
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: "#BBF7D0",
    marginBottom: 24,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 12,
  },
  infoStep: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 24,
  },
  submitButton: {
    backgroundColor: "#22C55E",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
  },
  submitText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});