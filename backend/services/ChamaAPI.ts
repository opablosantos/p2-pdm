import axios from 'axios';

const URL_API = 'https://api.thecatapi.com/v1/images/search?limit=5';

export interface FotoGato {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: any[];
  favourite?: any;
}

export const buscarFotosGatos = async (): Promise<FotoGato[]> => {
  try {
    const resposta = await axios.get<FotoGato[]>(URL_API);
    return resposta.data.slice(0, 5);
  } catch (erro) {
    console.error(erro);
    return [];
  }
};