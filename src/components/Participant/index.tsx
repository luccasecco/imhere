import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type PartcipantProps = {
  name: string,
  onRemove: () => void,
}

export function Partcipant({name, onRemove}: PartcipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
  
}
