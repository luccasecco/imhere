import React, { useState} from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Partcipant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('')
  
  
  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert('Participante existente', 'Nome já cadastrado')
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Tem certeza que deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleName}>
        Nome do Evento
      </Text>
      <Text style={styles.description}>
        Quarta, 03 deAgosto de 2022
      </Text>

      <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder='Nome do Participante'
        placeholderTextColor='#6B6B6B'
        onChangeText={setParticipantName}
        value={participantName}
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>

    </View>

    <FlatList
      showsVerticalScrollIndicator={false}
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Partcipant 
        key={item} 
        name={item} 
        onRemove={() => handleParticipantRemove(item)}/>
      )}
      ListEmptyComponent={() => (
        <Text style={styles.listEmpty}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
        </Text>
      )}
    />

    </View>
  )
}