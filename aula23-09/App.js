import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  function calcularIMC(){
    if(peso && altura){
      const imc = (parseFloat(peso) / parseFloat(Math.pow(altura/100,2))).toFixed(2);
      setResultado(imc)
    }else{
      setResultado('Preencha os dados corretamente')
      alert('erooo')
    }
  

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder='Peso (kg)'
        keyboardType='numeric'
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder='Altura (cm)'
        keyboardType='numeric'
        value={altura}
        onChangeText={setAltura}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calcular IMC" onPress={calcularIMC} color="#4CAF50" />
      </View>

      <Text style={styles.result}>
        {resultado}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 18,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});