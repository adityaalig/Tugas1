import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, isDarkMode && styles.containerDark]}>
      
      <Image 
        source={require('./assets/profil1.jpeg')} 
        style={[styles.fotoProfil, isDarkMode && styles.fotoProfilDark]} 
      />

      <Text style={[styles.namaLengkap, isDarkMode && styles.teksDark]}>Aditya Aryobima</Text>
      <Text style={[styles.info, isDarkMode && styles.teksDark]}>NIM: 2410501002</Text>
      <Text style={[styles.info, isDarkMode && styles.teksDark]}>Program Studi: D3 Sistem Informasi</Text>
      <Text style={[styles.info, isDarkMode && styles.teksDark]}>Angkatan: 2024</Text>

      <View style={[styles.kartu, isDarkMode && styles.kartuDark]}>
        <Text style={[styles.judulBagian, isDarkMode && styles.teksDark]}>Bio Singkat</Text>
        <Text style={[styles.teks, isDarkMode && styles.teksDark]}>
          Halo, perkenalkan nama saya Aditya Aryobima. Saya akhir-akhir ini lagi senang menanam tanaman bumbu dapur. Salah satu tanaman yang saya tanam adalah bawang merah.
        </Text>
      </View>

      <View style={[styles.kartu, isDarkMode && styles.kartuDark]}>
        <Text style={[styles.judulBagian, isDarkMode && styles.teksDark]}>Skill & Hobi</Text>
        <Text style={[styles.teks, isDarkMode && styles.teksDark]}>• Membuat Desain UI/UX</Text>
        <Text style={[styles.teks, isDarkMode && styles.teksDark]}>• Bermain Game Mobile Legends</Text>
        <Text style={[styles.teks, isDarkMode && styles.teksDark]}>• Menonton Anime One Piece</Text>
      </View>

      <TouchableOpacity 
        style={[styles.tombol, isDarkMode && styles.tombolDark]} 
        onPress={toggleTheme}
      >
        <Text style={styles.teksTombol}>
          {isDarkMode ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode'}
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  fotoProfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#333',
  },
  namaLengkap: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 3,
  },
  kartu: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    elevation: 2,
  },
  judulBagian: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  teks: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 5,
  },
  tombol: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 20,
  },
  teksTombol: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  containerDark: {
    backgroundColor: '#121212',
  },
  fotoProfilDark: {
    borderColor: '#ffffff',
  },
  kartuDark: {
    backgroundColor: '#1e1e1e',
  },
  teksDark: {
    color: '#ffffff',
  },
  tombolDark: {
    backgroundColor: '#444444',
  }
});