import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {

    if (!participantName) {
      return Alert.alert("Preencha todos os campos", "É necessário o preenchimento do campo para incluir um novo participante")
    }
    if (participants.includes(participantName)) {
      return Alert.alert("Participante já existente", "O participante informado já foi confirmado no evento")
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {

    return setParticipants(prevState => prevState.filter(participant => participant !== name));

  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 14 de julho de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          onChangeText={setParticipantName}
          value={participantName}

        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.textEmpty}>Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.</Text>
        )}
      />

    </View>
  );
}