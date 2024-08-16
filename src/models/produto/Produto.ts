import Produto from "../Usuario/Usuario";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  produto?: Produto | null;
}