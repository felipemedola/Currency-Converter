# Currency Converter

Este é um projeto simples de **Conversor de Moedas** entre **Real (BRL)** e **Dólar (USD)**. O projeto utiliza **HTML**, **CSS** e **JavaScript** para criar uma interface intuitiva e fácil de usar, onde o usuário pode inserir um valor em uma das moedas e converter para a outra.

## Descrição do Projeto

O **Currency Converter** permite converter valores entre as moedas **Real** e **Dólar** de maneira prática e direta. A interface do usuário é composta por um campo para inserir o valor, seletores para escolher a moeda de origem e destino, e um botão para realizar a conversão. 

### Funcionalidades
- **Conversão entre BRL e USD:** Realiza a conversão com base em taxas fixas configuradas no projeto.
- **Atualização Automática de Símbolos:** Exibe os símbolos de cada moeda ($ para USD e R$ para BRL) no campo de resultado, de acordo com a seleção do usuário.
- **Interface Responsiva:** Adaptável para diferentes dispositivos, utilizando conceitos básicos de responsividade.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilos e layout.
- **JavaScript**: Lógica de conversão de moedas e manipulação do DOM.

## Como Funciona

O projeto utiliza uma taxa de câmbio fixa definida diretamente no código JavaScript:

- **BRL para USD:** 1 BRL = 0,17 USD
- **USD para BRL:** 1 USD = 5,75 BRL

O usuário insere o valor, escolhe as moedas de origem e destino e clica em "Converter". A aplicação calcula o valor convertido com base na taxa de câmbio e exibe o resultado.

## Acesse o Projeto

O projeto pode ser acessado ao vivo através do link abaixo:

[https://felipemedola.github.io/personal_Currency_Converter/](https://felipemedola.github.io/personal_Currency_Converter/)

## Estrutura de Pastas

```plaintext
personal_Currency_Converter/
├── index.html            # Estrutura HTML do projeto
├── css/
│   ├── reset.css         # Estilos de reset para o CSS
│   └── styles.css        # Estilos principais da interface
├── img/
│   └── icon/             # Ícone aba navegador
└── js/
    └── principal.js      # Lógica de conversão de moedas

## Acesse o Projeto

O projeto pode ser acessado ao vivo através do link abaixo:

[https://www.seuprojeto.com](https://www.seuprojeto.com)
