import { StyleSheet, Text, View } from "react-native";
import useProtectedText from "./hooks/useProtectedText";
import { SecurityStatus } from "@/enums/SecurityStatus.enum";
import { Icon } from "react-native-paper";

export interface SecretProps {
  name: string;
  password: string | null;
  date: string;
  id: number;
  isProtected: boolean;
  inCloud: boolean
}

export function Secret({ name, id, isProtected, date, password, inCloud }: SecretProps) {
  const { securityStatusText, securityStatus } = useProtectedText({
    isProtected,
    hasPassword: !!password,
  });

  const status = getStatus(securityStatus);

  return (
    <View style={[styles.container, status.container]}>
      <Icon size={32} color={status.icon?.color} source={status.icon?.name} />
      <View>
        <View style={styles.titleContainer}>
          <Text style={[styles.name, status.name]}>{name}</Text>
          {inCloud && <Icon source="cloud" color={status.icon?.color} size={14} />}
        </View>
        <View style={styles.detailsContainer}>
          <Text style={[styles.content, status.content]}>{securityStatusText}</Text>
          <Text style={[styles.content, status.content]}>●</Text>
          <Text style={[styles.content, status.content]}>{date}</Text>
        </View>
      </View>
    </View>
  );
}

function getStatus(status: SecurityStatus) {
  switch (status) {
    case SecurityStatus.ALL_SECURE:
      return {
        container: { backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" },
        name: { color: "#155724" },
        content: { color: "#155724" },
        icon: { name: 'shield-crown-outline', color: '#28a745' }
      };
    case SecurityStatus.SECURE:
      return {
        container: { backgroundColor: "#fefce8", borderColor: "#fef08a" },
        name: { color: "#856404" },
        content: { color: "#856404" },
        icon: { name: 'shield-half-full', color: '#ffc107' }
      };
    case SecurityStatus.ENCRIPTED:
      return {
        container: { backgroundColor: "#dfefff", borderColor: "#cce5ff"  },
        name: { color: "#004085" },
        content: { color: "#004085" },
        icon: { name: 'shield-key-outline', color: '#007bff' }
      };
    case SecurityStatus.INSECURE:
    default:
      return {
        container: { backgroundColor: "#fef2f2", borderColor: "#fecaca" },
        name: { color: "#721c24" },
        content: { color: "#721c24" },
        icon: { name: 'shield-off-outline', color: '#dc3545' }
      };
  }
}

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
  },
  content: {
    color: "#49779c",
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginBottom: 15,
    padding: 10,
    borderRadius: '1rem',
    borderWidth: 1,
    alignItems: 'center'
  },
  block: {
    borderRadius: 4,
    width: 50,
    height: "100%",
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  }
});
