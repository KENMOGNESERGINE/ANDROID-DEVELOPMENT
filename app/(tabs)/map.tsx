import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

const filters = [
  { id: "all", label: "All" },
  { id: "pending", label: "Pending" },
  { id: "progress", label: "In Progress" },
  { id: "cleaned", label: "Cleaned" },
];

export default function Map() {
  const [activeFilter, setActiveFilter] = useState("all");
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Header */}
      <View style={styles.topHeader}>
        <View>
          <Text style={styles.headerTitle}>Reports Map 🗺️</Text>
          <Text style={styles.headerSub}>See dirty areas near you</Text>
        </View>
        <TouchableOpacity
          style={styles.reportButton}
          onPress={() => router.push("/report")}
        >
          <Text style={styles.reportButtonText}>+ Report</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Chips */}
      <View style={styles.filtersRow}>
        {filters.map((f) => (
          <TouchableOpacity
            key={f.id}
            style={[
              styles.filterChip,
              activeFilter === f.id && styles.filterChipActive,
            ]}
            onPress={() => setActiveFilter(f.id)}
          >
            <Text style={[
              styles.filterLabel,
              activeFilter === f.id && styles.filterLabelActive,
            ]}>
              {f.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Map Placeholder for Web */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapEmoji}>🗺️</Text>
        <Text style={styles.mapTitle}>Map View</Text>
        <Text style={styles.mapDesc}>
          The interactive map is available on the mobile app.{"\n"}
          Reports near Yaoundé will appear as pins on the map.
        </Text>

        {/* Fake Map Pins Preview */}
        <View style={styles.pinsPreview}>
          <View style={styles.pinRow}>
            <View style={[styles.pin, { backgroundColor: "#EF4444" }]} />
            <Text style={styles.pinLabel}>Dirty area near Mvog-Mbi market</Text>
          </View>
          <View style={styles.pinRow}>
            <View style={[styles.pin, { backgroundColor: "#F59E0B" }]} />
            <Text style={styles.pinLabel}>Blocked drainage at Bastos</Text>
          </View>
          <View style={styles.pinRow}>
            <View style={[styles.pin, { backgroundColor: "#22C55E" }]} />
            <Text style={styles.pinLabel}>Garbage dump at Melen — Cleaned ✅</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.reportNowButton}
          onPress={() => router.push("/report")}
        >
          <Text style={styles.reportNowText}>📸 Report a Dirty Area</Text>
        </TouchableOpacity>
      </View>

      {/* Legend */}
      <View style={styles.legend}>
        <Text style={styles.legendTitle}>Legend:</Text>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: "#EF4444" }]} />
          <Text style={styles.legendLabel}>Pending</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: "#F59E0B" }]} />
          <Text style={styles.legendLabel}>In Progress</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: "#22C55E" }]} />
          <Text style={styles.legendLabel}>Cleaned</Text>
        </View>
      </View>

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
    paddingBottom: 24,
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
  reportButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },
  reportButtonText: {
    color: "#22C55E",
    fontWeight: "bold",
    fontSize: 14,
  },
  filtersRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 8,
    backgroundColor: "#FFFFFF",
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F0FDF4",
    borderWidth: 1,
    borderColor: "#BBF7D0",
  },
  filterChipActive: {
    backgroundColor: "#22C55E",
    borderColor: "#22C55E",
  },
  filterLabel: {
    fontSize: 13,
    color: "#000000",
    fontWeight: "600",
  },
  filterLabelActive: {
    color: "#FFFFFF",
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: "#F0FDF4",
    margin: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    borderWidth: 1,
    borderColor: "#BBF7D0",
  },
  mapEmoji: {
    fontSize: 56,
    marginBottom: 16,
  },
  mapTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  mapDesc: {
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
  },
  pinsPreview: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#BBF7D0",
    gap: 12,
  },
  pinRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  pin: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  pinLabel: {
    fontSize: 13,
    color: "#000000",
    flex: 1,
  },
  reportNowButton: {
    backgroundColor: "#22C55E",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
  },
  reportNowText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  legend: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: "#F0FDF4",
  },
  legendTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000000",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  legendLabel: {
    fontSize: 12,
    color: "#6B7280",
  },
});