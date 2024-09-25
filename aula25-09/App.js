import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const adicionarInput = (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    try {
      // Avaliar a expressão usando eval
      const calc = eval(input.replace(/√/g, 'Math.sqrt')); // Substituir √ por Math.sqrt
      setResultado(calc);
    } catch (error) {
      setResultado('Erro');
    }
  };

  const limpar = () => {
    setInput('');
    setResultado('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="Digite a expressão"
        editable={false}
      />
      <Text style={styles.result}>{resultado}</Text>
      <View style={styles.botoes}>
        {['1', '2', '3', '+', '4', '5', '6', '-',
          '7', '8', '9', '*', '0', '/', '√', '=', 'C'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => {
              if (item === '=') {
                calcularResultado();
              } else if (item === 'C') {
                limpar();
              } else if (item === '√') {
                adicionarInput('√');
              } else {
                adicionarInput(item);
              }
            }}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button} onPress={backspace}>
          <Text style={styles.buttonText}>⌫</Text>
        </TouchableOpacity>
      </View>
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
  result: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '23%',
    height: 60,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});
