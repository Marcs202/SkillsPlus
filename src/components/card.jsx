import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Card = ({
  title,
  subtitle,
  difficulty,
  description,
  buttonLabel,
  onPress,
  gradientColors,
  icon,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: gradientColors[0] }]}>
      <View style={styles.leftColumn}>
        <Text style={[styles.text, styles.cardTitle]}>{title}</Text>
      </View>
      <View style={styles.rightColumn}>
        <View>
          <Text style={[styles.text, styles.difficulty]}>{subtitle}</Text>
          <Text style={styles.text}>{difficulty}</Text>
        </View>
        <Text style={[styles.text, styles.cardTitle]}>{description}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: gradientColors[0] }]}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    margin: 15,
    overflow: "hidden",
    flexDirection: "row",
  },
  text: {
    color: "#473F4F",
    fontWeight: "bold",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  cardTitle: {
    letterSpacing: 0.5,
    fontSize: 20,
    marginVertical: 5,
    marginTop: 10,
  },
  leftColumn: {
    padding: 5,
    maxWidth: 100,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
  },
  icon: {
    fontSize: 50,
  },
  rightColumn: {
    padding: 13,
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 15,
  },
  difficulty: {
    opacity: 0.6,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#353437",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },
});

export default Card;
