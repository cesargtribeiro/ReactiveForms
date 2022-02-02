import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({providedIn: 'root'})
export class ProdutoService {

    produtos: Produto[];

    constructor() {
        this.produtos = [
        {
            id: 1,
            nome: 'Teste',
            ativo: true,
            valor: 100,
            imagem: 'celular.jpg'
        },
        {
            id: 2,
            nome: 'Teste2',
            ativo: true,
            valor: 200,
            imagem: 'gopro.jpg'
        },
        {
            id: 3,
            nome: 'Teste3',
            ativo: true,
            valor: 300,
            imagem: 'laptop.jpg'
        },
        {     
            id: 4,
            nome: 'Teste2',
            ativo: false,
            valor: 200,
            imagem: 'gopro.jpg'
        },
        {
            id: 5,
            nome: 'Teste2',
            ativo: true,
            valor: 200,
            imagem: 'gopro.jpg'
        },
        {
            id: 6,
            nome: 'Teste2',
            ativo: false,
            valor: 200,
            imagem: 'gopro.jpg'
        },
        {
            id: 7,
            nome: 'Teste2',
            ativo: true,
            valor: 200,
            imagem: 'gopro.jpg'
        }]
    }
    obterTodos(estado: string): Produto[] {

        if(estado === 'ativos'){
            return this.produtos.filter(produto => produto.ativo);
        }

        return this.produtos;
    }

    obterPorId(id: number): Produto {
        return this.produtos.find(produto => produto.id == id);
    }
}