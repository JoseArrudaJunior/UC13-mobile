import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');
  function calcularExpressao(){
    if (expressao) {
      try {
        // Avaliando a expressão de forma segura
        const calculo = Function(`'use strict'; return (${expressao})`)();
        setResultado(calculo);
      } catch (error) {
        setResultado('Erro ao calcular a expressão');
        alert('Erro: ' + error.message);
      }
    } else {
      setResultado('Preencha os dados corretamente');
      alert('Preencha a expressão!');
    }
  

  }
  return (
    <View style={styles.container}>

      <Text>CALCULADORA SIMPLES</Text>
      
      <TextInput
        style={styles.input}
        placeholder='Digite a Expressão'
        keyboardType='text'
        value={expressao}
        onChangeText={setExpressao}
      />
      <Button title="Calcular a Expressão" onPress={calcularExpressao} color="#4CAF50" />

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