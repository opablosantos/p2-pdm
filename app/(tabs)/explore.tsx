import React, { useEffect, useState } from 'react';
import { ScrollView, View, Button, Image, StyleSheet } from 'react-native';
import { buscarFotosGatos, FotoGato } from '@/backend/services/ChamaAPI';

export default function TabTwoScreen() {
  const [fotos, setFotos] = useState<FotoGato[]>([]);

  const handleBuscarFotos = async () => {
    const novasFotos = await buscarFotosGatos();
    setFotos([...novasFotos, ...fotos]);
  };

  useEffect(() => {
    handleBuscarFotos();
  }, []);

  return (
    <ScrollView>
      <View style={estilos.container}>
        <Button title="Carregar mais fotos" onPress={handleBuscarFotos} />
        {fotos.map((foto) => (
          <Image key={foto.id} source={{ uri: foto.url }} style={estilos.imagem} />
        ))}
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  imagem: {
    width: '80%',
    height: 200,
    margin: 10,
  },
});
