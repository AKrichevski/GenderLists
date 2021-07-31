import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./styles";


export const Row = ({ image, title, subtitle, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View>
      <Image source={image} style={styles.image} />
    </View>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <View style={styles.right}>
      {/*<Ionicons name="ios-arrow-forward" color="#666" size={20} />*/}
    </View>
  </TouchableOpacity>
);

export const Separator = () => <View style={styles.separator} />;
