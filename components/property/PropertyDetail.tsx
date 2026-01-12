import { View, Text, StyleSheet, Image } from "react-native";
import { Property } from "../types"; // adjust path if needed

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: property.image }}
        style={styles.image}
      />

      <View style={styles.details}>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.location}>{property.location}</Text>
        <Text style={styles.price}>${property.price}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 150,
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  location: {
    fontSize: 14,
    color: "gray",
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
  },
});

