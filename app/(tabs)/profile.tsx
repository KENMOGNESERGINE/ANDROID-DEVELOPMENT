import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Top Green Header */}
        <View style={styles.topHeader}>
          <Text style={styles.headerTitle}>My Profile</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Avatar + Name */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>S</Text>
          </View>
          <Text style={styles.userName}>SmartTrash User</Text>
          <Text style={styles.userEmail}>user@smarttrash.cm</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationText}>📍 Yaoundé, Cameroon</Text>
          </View>
        </View>

        <View style={styles.body}>

          {/* My Stats */}
          <Text style={styles.sectionTitle}>My Activity</Text>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Reports{"\n"}Made</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Areas{"\n"}Cleaned</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Items{"\n"}Sold</Text>
            </View>
          </View>

          {/* My Reports */}
          <Text style={styles.sectionTitle}>My Reports</Text>
          <View style={styles.emptyBox}>
            <Text style={styles.emptyEmoji}>📭</Text>
            <Text style={styles.emptyTitle}>No reports yet</Text>
            <Text style={styles.emptyDesc}>
              Your submitted reports will appear here.
            </Text>
            <TouchableOpacity
              style={styles.emptyBtn}
              onPress={() => router.push("/report")}
            >
              <Text style={styles.emptyBtnText}>Make First Report</Text>
            </TouchableOpacity>
          </View>

          {/* My Listings */}
          <Text style={styles.sectionTitle}>My Listings</Text>
          <View style={styles.emptyBox}>
            <Text style={styles.emptyEmoji}>🛒</Text>
            <Text style={styles.emptyTitle}>No listings yet</Text>
            <Text style={styles.emptyDesc}>
              Items you list for sale will appear here.
            </Text>
            <TouchableOpacity
              style={styles.emptyBtn}
              onPress={() => router.push("/(tabs)/marketplace")}
            >
              <Text style={styles.emptyBtnText}>List First Item</Text>
            </TouchableOpacity>
          </View>

          {/* Settings */}
          <Text style={styles.sectionTitle}>Settings</Text>

          <TouchableOpacity style={styles.settingRow}>
            <Text style={styles.settingEmoji}>🔔</Text>
            <Text style={styles.settingLabel}>Notifications</Text>
            <Text style={styles.settingArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Text style={styles.settingEmoji}>🔒</Text>
            <Text style={styles.settingLabel}>Change Password</Text>
            <Text style={styles.settingArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Text style={styles.settingEmoji}>📍</Text>
            <Text style={styles.settingLabel}>My Location</Text>
            <Text style={styles.settingArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Text style={styles.settingEmoji}>ℹ️</Text>
            <Text style={styles.settingLabel}>About SmartTrash</Text>
            <Text style={styles.settingArrow}>→</Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => router.push("/")}
          >
            <Text style={styles.logoutText}>🚪 Logout</Text>
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
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 50,
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
  editButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 12,
  },
  editButtonText: {
    color: "#22C55E",
    fontWeight: "bold",
    fontSize: 14,
  },
  avatarSection: {
    alignItems: "center",
    marginTop: -40,
    marginBottom: 8,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#22C55E",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 8,
  },
  locationRow: {
    backgroundColor: "#F0FDF4",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#BBF7D0",
  },
  locationText: {
    fontSize: 12,
    color: "#22C55E",
    fontWeight: "600",
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 14,
    marginTop: 8,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BBF7D0",
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#22C55E",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 16,
  },
  emptyBox: {
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BBF7D0",
    marginBottom: 24,
  },
  emptyEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 6,
  },
  emptyDesc: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 16,
  },
  emptyBtn: {
    backgroundColor: "#22C55E",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  emptyBtnText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 13,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#BBF7D0",
    gap: 14,
  },
  settingEmoji: {
    fontSize: 20,
  },
  settingLabel: {
    flex: 1,
    fontSize: 14,
    color: "#000000",
    fontWeight: "500",
  },
  settingArrow: {
    fontSize: 16,
    color: "#22C55E",
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#FEF2F2",
    borderRadius: 14,
    padding: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FECACA",
    marginTop: 8,
    marginBottom: 8,
  },
  logoutText: {
    color: "#EF4444",
    fontWeight: "bold",
    fontSize: 16,
  },
});