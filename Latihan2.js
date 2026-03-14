import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Kalkulator() {
  const [angkaA, setAngkaA] = useState('');
  const [angkaB, setAngkaB] = useState('');
  const [hasil, setHasil] = useState(null);
  const [operasi, setOperasi] = useState('');

  const hitung = (op) => {
    const a = parseFloat(angkaA);
    const b = parseFloat(angkaB);
    
    setOperasi(op); 

    if (op === '+') {
      setHasil(a + b);
    } else if (op === '-') {
      setHasil(a - b);
    } else if (op === 'x') {
      setHasil(a * b);
    } else if (op === '/') {
      if (b === 0) {
        setHasil("Error: B tidak boleh 0");
      } else {
        setHasil(a / b);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Kalkulator Sederhana</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan Angka A"
        keyboardType="numeric"
        value={angkaA}
        onChangeText={setAngkaA}
      />
      <TextInput
        style={styles.input}
        placeholder="Masukkan Angka B"
        keyboardType="numeric"
        value={angkaB}
        onChangeText={setAngkaB}
      />

      <View style={styles.row}>
        <TouchableOpacity style={styles.tombol} onPress={() => hitung('+')}><Text>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tombol} onPress={() => hitung('-')}><Text>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tombol} onPress={() => hitung('x')}><Text>x</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tombol} onPress={() => hitung('/')}><Text>/</Text></TouchableOpacity>
      </View>

      {hasil !== null && (
        <Text style={styles.hasil}>
          {angkaA} {operasi} {angkaB} = {hasil}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  judul: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  tombol: {
    backgroundColor: '#959595',
    padding: 15,
    width: 50,
    alignItems: 'center',
  },
  hasil: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});