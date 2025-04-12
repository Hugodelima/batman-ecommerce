# Projeto Avaliativo - Mini E-commerce

Olá, pessoal! Tudo certo?

Chegamos à etapa do **primeiro projeto avaliativo** da disciplina.

## 🎯 Objetivo
Criar um **mini e-commerce**, aplicando os conceitos vistos em aula: rotas, componentes, consumo de API e manipulação de dados.

Você pode criar um projeto novo ou utilizar um que já esteja em andamento.

---

## 🚀 Etapas do Projeto

### 1. Criar uma rota de listagem de produtos
- Dentro da pasta `api`, crie uma nova pasta.
- Dentro dela, crie o arquivo `route.js`.
- No `route.js`, crie uma **lista de produtos** e uma **função que retorne os dados em JSON**.

### 2. Criar um componente para listar os produtos
- Fora da pasta `api`, crie um componente React para exibir a lista de produtos.
- O componente deve ser **assíncrono** e utilizar `fetch` para buscar os dados.
- Use `map()` para exibir os produtos.

### 3. Adicionar links para detalhes dos produtos
- No `map()`, insira um **link em cada item** para direcionar o usuário aos detalhes do produto.

### 4. Criar a rota dinâmica de detalhes
- Crie uma pasta com o nome da rota (ex: `product`).
- Dentro, crie uma pasta com o nome do parâmetro entre colchetes (ex: `[id]`).
- Crie o arquivo `page.js` dentro dessa pasta.
- Exiba todas as **informações do produto selecionado**.

### 5. Integrar com o Mercado Pago
- Crie ou utilize um componente para fazer o **pagamento com o Mercado Pago** na página de detalhes.

### 6. Criar o layout principal da aplicação
- No arquivo `page.js` da pasta `app`, monte o layout com:
  - Header
  - Carrossel de banners
  - Lista de produtos
  - Footer

---

## 💡 Dica: Carrossel
Para instalar o carrossel:

```bash
npm i react-responsive-carousel
