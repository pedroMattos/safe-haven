import { StyleSheet, Text, View } from "react-native";
import useProtectedText from "./hooks/useProtectedText";
import { SecurityStatus } from "@/enums/SecurityStatus.enum";

export interface SecretProps {
  name: string;
  password: string | null;
  date: string;
  id: number;
  isProtected: boolean;
}

export function Secret({ name, id, isProtected, date, password }: SecretProps) {
  const { securityStatusText, securityStatus } = useProtectedText({
    isProtected,
    hasPassword: !!password,
  });

  console.log(id);

  const statusStyle = getStatusStyle(securityStatus);

  return (
    <View style={[styles.container, statusStyle.container]}>
      <View style={[styles.block, statusStyle.block]} />
      <View>
        <Text style={[styles.name, statusStyle.name]}>{name}</Text>
        <Text style={[styles.content, statusStyle.content]}>{securityStatusText}</Text>
        <Text style={[styles.content, statusStyle.content]}>{date}</Text>
      </View>
    </View>
  );
}

function getStatusStyle(status: SecurityStatus) {
  switch (status) {
    case SecurityStatus.ALL_SECURE:
      return {
        container: { backgroundColor: "#d4edda" },
        block: { backgroundColor: "#28a745" },
        name: { color: "#155724" },
        content: { color: "#155724" },
      };
    case SecurityStatus.SECURE:
      return {
        container: { backgroundColor: "#fff3cd" },
        block: { backgroundColor: "#ffc107" },
        name: { color: "#856404" },
        content: { color: "#856404" },
      };
    case SecurityStatus.ENCRIPTED:
      return {
        container: { backgroundColor: "#cce5ff" },
        block: { backgroundColor: "#007bff" },
        name: { color: "#004085" },
        content: { color: "#004085" },
      };
    case SecurityStatus.INSECURE:
    default:
      return {
        container: { backgroundColor: "#f8d7da" },
        block: { backgroundColor: "#dc3545" },
        name: { color: "#721c24" },
        content: { color: "#721c24" },
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
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  block: {
    borderRadius: 4,
    width: 50,
    height: "100%",
  },
});
