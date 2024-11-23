import 'dotenv/config';

// Importa uma função para conectar ao banco de dados
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Estabelece a conexão com o banco de dados utilizando a string de conexão
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    // Obtém a referência ao banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");

    // Acessa a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
        // Obtém a referência ao banco de dados "imersao-instabytes"
        const db = conexao.db("imersao-instabytes");

        // Acessa a coleção "posts" dentro do banco de dados
        const colecao = db.collection("posts");
    
        // Retorna todos os documentos da coleção como um array
        return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost){
    // Obtém a referência ao banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");

    // Acessa a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");

    const objID = ObjectId.createFromHexString(id);
    // Retorna todos os documentos da coleção como um array
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}