import { Text, View, StyleSheet } from 'react-native';

export default function PledgeButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Pledge
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 154,
    backgroundColor: "#CAE2FE",
    borderRadius: 45,
    justifyContent: 'center',
  },
  paragraph: {
    alignItems: 'center',
    color: "#7C97CE",
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Gabriela_400Regular',
    lineHeight: 30.74,
  },
});
