import React from "react";
import styled from "styled-components";
import {produtos} from "../../produtosCadastrados";
import CardProduto from "./CardProduto";
import { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { DeleteOutlineRounded } from "@mui/icons-material";

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },

]

const ProdutosContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20%;
    width: 80%;
    margin: 20px;
    gap: 20px;
`
const CardProdutosContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap:20px;
`
const Pesquisa = styled.div`
    display: flex;
    flex-direction: column;
`
function Produtos(){
    const [produtoFiltrados, setProdutoFiltrados] = useState(produtos);

    function teste(){
        alert ("vc apertou o botao"

        )

    }
    return(
        <ProdutosContainer>
            <Pesquisa>
                <h2>Pesquise seu produto aqui</h2>
                <input 
                    placeholder="Digite o produto" 
                    onChange={evento => {
                            const produtoDigitado = evento.target.value;
                            const resultadoFiltro = produtos.filter(
                                produto => produto.nome.includes(produtoDigitado) 
                            )
                            setProdutoFiltrados(resultadoFiltro)
                        }
                    }
                />
            </Pesquisa>

            <Button 
                variant="text"
            >
                Text
            </Button>
            <Button variant="contained"color="error">
                Contained
            </Button>
            <Button 
                variant="outlined"
                onClick={teste}
                startIcon={<DeleteOutlineRounded />} 
                color="error"
            >
                Outlined
            </Button>
            
            


            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />

            <CardProdutosContainer>
                {
                    produtoFiltrados.map( produto =>(
                        <CardProduto
                            nomeProduto={produto.nome}
                            precoProduto={produto.preco}
                            descricaoProduto={produto.descricao}
                            imgProduto={produto.img}
                            corNomeProduto={"white"}
                        />
                    ))
                }
            </CardProdutosContainer>
        </ProdutosContainer>
    );
}
export default Produtos;