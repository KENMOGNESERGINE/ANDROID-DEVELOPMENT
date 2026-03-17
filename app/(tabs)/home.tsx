import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Top Green Header */}
        <View style={styles.topHeader}>
          <View>
            <Text style={styles.greeting}>Good Morning 👋</Text>
            <Text style={styles.subGreeting}>📍 Yaoundé, Cameroon</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>
        </View>

        <View style={styles.body}>

          {/* Big Report Button */}
          <TouchableOpacity
            style={styles.reportButton}
            onPress={() => router.push("/report")}
          >
            <Text style={styles.reportButtonEmoji}>📸</Text>
            <View>
              <Text style={styles.reportButtonTitle}>Report Dirty Area</Text>
              <Text style={styles.reportButtonSub}>Tap to take photo + tag location</Text>
            </View>
          </TouchableOpacity>

          {/* 2 Action Cards */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.smallCard}
              onPress={() => router.push("/(tabs)/map")}
            >
              <Text style={styles.smallCardEmoji}>🗺️</Text>
              <Text style={styles.smallCardTitle}>View Map</Text>
              <Text style={styles.smallCardSub}>See reports near you</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.smallCard}
              onPress={() => router.push("/(tabs)/marketplace")}
            >
              <Text style={styles.smallCardEmoji}>♻️</Text>
              <Text style={styles.smallCardTitle}>Marketplace</Text>
              <Text style={styles.smallCardSub}>Buy & sell recyclables</Text>
            </TouchableOpacity>
          </View>

          {/* Community Stats */}
          <View style={styles.statsCard}>
            <Text style={styles.statsTitle}>🌍 Community Impact</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>0</Text>
                <Text style={styles.statLabel}>Reports</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>0</Text>
                <Text style={styles.statLabel}>Cleaned</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>0</Text>
                <Text style={styles.statLabel}>Recycled</Text>
              </View>
            </View>
          </View>

          {/* Recent Reports */}
          <Text style={styles.sectionTitle}>Recent Reports Near You</Text>
          <View style={styles.emptyBox}>
            <Text style={styles.emptyEmoji}>📭</Text>
            <Text style={styles.emptyTitle}>No reports yet</Text>
            <Text style={styles.emptyDesc}>Be the first in your community</Text>
            <TouchableOpacity
              style={styles.emptyBtn}
              onPress={() => router.push("/report")}
            >
              <Text style={styles.emptyBtnText}>Make First Report</Text>
            </TouchableOpacity>
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
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subGreeting: {
    fontSize: 13,
    color: "#FFFFFF",
    opacity: 0.85,
    marginTop: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#22C55E",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  reportButton: {
    backgroundColor: "#22C55E",
    borderRadius: 20,
    padding: 22,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 16,
  },
  reportButtonEmoji: {
    fontSize: 40,
  },
  reportButtonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  reportButtonSub: {
    fontSize: 12,
    color: "#FFFFFF",
    opacity: 0.85,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  smallCard: {
    flex: 1,
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#BBF7D0",
  },
  smallCardEmoji: {
    fontSize: 28,
    marginBottom: 10,
  },
  smallCardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  smallCardSub: {
    fontSize: 11,
    color: "#6B7280",
    lineHeight: 16,
  },
  statsCard: {
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#BBF7D0",
  },
  statsTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#22C55E",
  },
  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 36,
    backgroundColor: "#BBF7D0",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 12,
  },
  emptyBox: {
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BBF7D0",
    marginBottom: 32,
  },
  emptyEmoji: {
    fontSize: 44,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 6,
  },
  emptyDesc: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 20,
    textAlign: "center",
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
});