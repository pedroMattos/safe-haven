import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper"

export type CloudCountProps = {
  count: number
}

export function CloudCount({ count }: CloudCountProps) {
  return (
    <Button style={styles.button} mode="contained">
      <Text>{count} na nuvem</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
  },
});
