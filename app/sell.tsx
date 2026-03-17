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
import { useState } from "react";

const categories = [
  { id: "plastic", label: "Plastic", emoji: "🧴" },
  { id: "metal", label: "Metal", emoji: "🔩" },
  { id: "paper", label: "Paper", emoji: "🗞️" },
  { id: "carton", label: "Carton", emoji: "📦" },
];

export default function Sell() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");

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
          <Text style={styles.headerTitle}>List an Item</Text>
          <View style={{ width: 60 }} />
        </View>

        <View style={styles.body}>

          {/* Photo Section */}
          <Text style={styles.sectionTitle}>📸 Item Photo</Text>
          <TouchableOpacity style={styles.photoBox}>
            <Text style={styles.photoEmoji}>📷</Text>
            <Text style={styles.photoTitle}>Tap to take photo</Text>
            <Text style={styles.photoSub}>
              Take a clear photo of the item you want to sell
            </Text>
          </TouchableOpacity>

          {/* Item Name */}
          <Text style={styles.sectionTitle}>📦 Item Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Plastic bottles, Iron scraps..."
            placeholderTextColor="#9CA3AF"
          />

          {/* Category */}
          <Text style={styles.sectionTitle}>🏷️ Category</Text>
          <View style={styles.categoryRow}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={[
                  styles.categoryChip,
                  selectedCategory === cat.id && styles.categoryChipActive,
                ]}
                onPress={() => setSelectedCategory(cat.id)}
              >
                <Text style={styles.categoryEmoji}>{cat.emoji}</Text>
                <Text style={[
                  styles.categoryLabel,
                  selectedCategory === cat.id && styles.categoryLabelActive,
                ]}>
                  {cat.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Quantity */}
          <Text style={styles.sectionTitle}>⚖️ Quantity</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Amount"
              placeholderTextColor="#9CA3AF"
              keyboardType="numeric"
            />
            <View style={styles.unitPicker}>
              <Text style={styles.unitText}>kg</Text>
            </View>
          </View>

          {/* Price */}
          <Text style={styles.sectionTitle}>💰 Price (FCFA)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 500"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
          />

          {/* Description */}
          <Text style={styles.sectionTitle}>📝 Description</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Describe your item... condition, collection method, etc."
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          {/* Location */}
          <Text style={styles.sectionTitle}>📍 Pickup Location</Text>
          <View style={styles.locationBox}>
            <View style={styles.locationLeft}>
              <Text style={styles.locationEmoji}>📍</Text>
              <View>
                <Text style={styles.locationTitle}>Auto-detecting...</Text>
                <Text style={styles.locationSub}>
                  GPS will tag your pickup location
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.detectButton}>
              <Text style={styles.detectButtonText}>Detect</Text>
            </TouchableOpacity>
          </View>

          {/* Info Box */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>ℹ️ How it works</Text>
            <Text style={styles.infoStep}>1. You list your item with photo and price</Text>
            <Text style={styles.infoStep}>2. Buyers browse and find your item</Text>
            <Text style={styles.infoStep}>3. Buyer contacts you directly</Text>
            <Text style={styles.infoStep}>4. You agree on collection and payment</Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>📤 Post Item</Text>
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
  input: {
    backgroundColor: "#F0FDF4",
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    color: "#000000",
    borderWidth: 1,
    borderColor: "#BBF7D0",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  unitPicker: {
    backgroundColor: "#22C55E",
    borderRadius: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  unitText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
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
  categoryChipActive: {
    backgroundColor: "#22C55E",
    borderColor: "#22C55E",
  },
  categoryEmoji: {
    fontSize: 16,
  },
  categoryLabel: {
    fontSize: 13,
    color: "#000000",
    fontWeight: "600",
  },
  categoryLabelActive: {
    color: "#FFFFFF",
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