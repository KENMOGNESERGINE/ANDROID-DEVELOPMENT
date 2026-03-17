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

const categories = [
  { id: "all", label: "All", emoji: "♻️" },
  { id: "plastic", label: "Plastic", emoji: "🧴" },
  { id: "metal", label: "Metal", emoji: "🔩" },
  { id: "paper", label: "Paper", emoji: "🗞️" },
  { id: "carton", label: "Carton", emoji: "📦" },
];

export default function Marketplace() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Top Header */}
        <View style={styles.topHeader}>
          <View>
            <Text style={styles.headerTitle}>Marketplace ♻️</Text>
            <Text style={styles.headerSub}>Buy & sell recyclable materials</Text>
          </View>
          <TouchableOpacity style={styles.sellButton} onPress={() => router.push("/sell")}>
            <Text style={styles.sellButtonText}>+ Sell</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.body}>

          {/* Search Bar */}
          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search items..."
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesScroll}
          >
            {categories.map((cat) => (
              <TouchableOpacity key={cat.id} style={styles.categoryChip}>
                <Text style={styles.categoryEmoji}>{cat.emoji}</Text>
                <Text style={styles.categoryLabel}>{cat.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Empty State */}
          <View style={styles.emptyBox}>
            <Text style={styles.emptyEmoji}>🛒</Text>
            <Text style={styles.emptyTitle}>No items listed yet</Text>
            <Text style={styles.emptyDesc}>
              Be the first to list a recyclable item and earn money from waste.
            </Text>
            <TouchableOpacity style={styles.emptyBtn} onPress={() => router.push("/sell")}>
              <Text style={styles.emptyBtnText}>+ List Your First Item</Text>
            </TouchableOpacity>
          </View>

          {/* How it works */}
          <Text style={styles.sectionTitle}>How it works</Text>

          <View style={styles.stepCard}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNumber}>1</Text>
            </View>
            <View style={styles.stepInfo}>
              <Text style={styles.stepTitle}>Collect recyclables</Text>
              <Text style={styles.stepDesc}>
                Gather plastic, metal, paper or carton
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNumber}>2</Text>
            </View>
            <View style={styles.stepInfo}>
              <Text style={styles.stepTitle}>List on SmartTrash</Text>
              <Text style={styles.stepDesc}>
                Take a photo, set your price and post
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNumber}>3</Text>
            </View>
            <View style={styles.stepInfo}>
              <Text style={styles.stepTitle}>Connect with buyers</Text>
              <Text style={styles.stepDesc}>
                Buyers contact you directly and collect
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNumber}>4</Text>
            </View>
            <View style={styles.stepInfo}>
              <Text style={styles.stepTitle}>Earn money</Text>
              <Text style={styles.stepDesc}>
                Turn your waste into income for your family
              </Text>
            </View>
          </View>

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
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  headerSub: {
    fontSize: 13,
    color: "#FFFFFF",
    opacity: 0.85,
    marginTop: 4,
  },
  sellButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },
  sellButtonText: {
    color: "#22C55E",
    fontWeight: "bold",
    fontSize: 14,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#BBF7D0",
    marginBottom: 16,
    gap: 10,
  },
  searchIcon: {
    fontSize: 18,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#000000",
  },
  categoriesScroll: {
    marginBottom: 24,
  },
  categoryChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#22C55E",
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
  emptyBox: {
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BBF7D0",
    marginBottom: 28,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  emptyDesc: {
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  emptyBtn: {
    backgroundColor: "#22C55E",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  emptyBtnText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
  },
  stepCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#BBF7D0",
    gap: 16,
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#22C55E",
    alignItems: "center",
    justifyContent: "center",
  },
  stepNumber: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  stepInfo: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  stepDesc: {
    fontSize: 12,
    color: "#6B7280",
    lineHeight: 18,
  },
});