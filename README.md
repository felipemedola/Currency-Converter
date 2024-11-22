# Aplicativo de Currency Converter

Este é um aplicativo simples de conversor de moeda que permite aos usuários converter entre diferentes moedas, como BRL, USD e EUR. O aplicativo usa uma API externa para buscar taxas de câmbio em tempo real e fornece uma interface amigável para conversões rápidas.

## Funcionalidades

- Converter entre várias moedas (BRL, EUR, USD, BTC).
- Exibir o resultado da conversão com os símbolos de moeda apropriados.
- Imagens dinâmicas de bandeiras de moeda com base na moeda de conversão selecionada.
- Design responsivo para dispositivos móveis e desktop.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Módulos ES6)
- Fetch API (para buscar as taxas de câmbio)
- API Externa: [AwesomeAPI](https://economia.awesomeapi.com.br/) para dados de taxas de câmbio

## Instalação

Para rodar este projeto localmente, siga os seguintes passos:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seuusuario/currency-converter.git
   cd currency-converter
   ```

2. **Instale as dependências** (se necessário):

   Este projeto não exige pacotes externos para o frontend, mas você pode rodar um servidor local para visualizar o app.

3. **Abra o arquivo `index.html` no seu navegador**:
   
   Basta abrir o arquivo `index.html` em um navegador para usar o aplicativo de conversão de moeda.

## Como Usar

1. **Digite o valor** que você deseja converter no campo "Valor".
2. **Selecione a moeda de origem** (por exemplo, BRL, EUR, USD).
3. **Selecione a moeda de destino** (por exemplo, USD, EUR, BRL).
4. Clique no botão **"Converter"** para ver o resultado.
5. O resultado será exibido no símbolo de moeda correspondente (por exemplo, US$, R$, €).
6. A imagem da bandeira da moeda selecionada também aparecerá ao lado do resultado.

## Estrutura do Projeto

```
currency_converter/
├── index.html             # Estrutura HTML do projeto
├── css/
│   ├── reset.css          # Estilos para reset de CSS
│   └── styles.css         # Estilos principais da interface
├── img/
│   └── icon/              # Ícone aba navegador
│   ├── logo-dolar.png     # Imagem para dólar
│   ├── logo-euro.png      # Imagem para euro
│   └── logo-real.png      # Imagem para real
├── js/
│   ├── main.js            # Lógica principal
│   └── api.js             # Comunicação com a API de câmbio
```

## Como Funciona

1. **HTML**: Fornece a estrutura do aplicativo, incluindo campos de entrada para os valores das moedas e os dropdowns de seleção de moeda.
2. **CSS**: Estiliza o aplicativo com um design moderno e limpo. Inclui comportamento responsivo para usuários móveis.
3. **JavaScript**:
   - **`main.js`** manipula a entrada do usuário e calcula a conversão de moeda quando o botão "Converter" é clicado.
   - **`api.js`** busca as taxas de câmbio da [AwesomeAPI](https://economia.awesomeapi.com.br/) e retorna a taxa para as moedas selecionadas.
4. As taxas de câmbio são obtidas em tempo real, garantindo que os usuários recebam as taxas de conversão mais atualizadas.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Agradecimentos

- [AwesomeAPI](https://economia.awesomeapi.com.br/) por fornecer as taxas de câmbio gratuitas.
- [Font Awesome](https://fontawesome.com/) por fornecer ícones (caso queira integrar ícones no futuro).

---

Sinta-se à vontade para fazer alterações ou adicionar recursos para melhorar a funcionalidade do aplicativo! Aproveite o uso do Conversor de Moeda! 😊
```

Este arquivo `README.md` oferece uma explicação clara sobre como configurar, usar e entender a estrutura do seu aplicativo de Conversão de Moeda. Ele pode ser facilmente modificado e expandido conforme você adicione mais funcionalidades ao projeto.
