import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Func() {
  const [Num, setNum] = useState('');
  const [maiores10, setmaiores10] = useState(0);
  const [menores20, setmenores20] = useState(0);

  const MudarTexto = (text) => {
    setNum(text);
  };

  const ContagemNúmero = () => {
    const parsedNumber = parseFloat(Num);

    if (!isNaN(parsedNumber) || Num === "") {
      if (parsedNumber > 10) {
        setmaiores10(maiores10 + 1);
      }
      if (parsedNumber < 20) {
        setmenores20(menores20 + 1);
      }  else if (parsedNumber > 10 && parsedNumber < 20) {
        setmaiores10(maiores10 + 1);
        setmenores20(menores20 + 1);
      }
      setNum('');
    } else {
      alert('Por favor, digite um número válido!!!');
    }
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.form}>
      <Text style={styles.text}>Adicione um número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={Num}
        onChangeText={MudarTexto}
      />
      <TouchableOpacity style={styles.botao} onPress={ContagemNúmero}>
        <Text style={styles.buttonText}>Ver Resultado</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.fundo}>
      <Text style={styles.resultText}>Números maiores que 10: {maiores10}</Text>
      <Text style={styles.resultText}>Números menores que 20: {menores20}</Text>
      </View>
      
    </View>
  
  );
}

const styles = StyleSheet.create({
  fundo: {
    width: 360,
    height: 250,
    borderRadius: 40,
    marginTop: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    marginTop: 200,
    
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F567",
    width: 200,
    
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    textAlign: "center",
    height: 40,
    width: 200,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
  },
  botao: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    
  },
  resultText: {
    fontSize: 20,
    marginTop: 10,
  },
});
