# Boas-vindas ao repositório do projeto `Fashion Express`

Este projeto consiste em uma aplicação para um e-commerce escrito em TypeScript utilizando ReactJS, NextJS e NodeJS. Esta aplicação dispõe de uma API GraphQL fake, desenvolvida para simular o consumo dos dados de uma API real.

## Boas vindas ao repositório do projeto <b><i>Fashion Express</i></b>

Este projeto foi desenvolvido por Matheus Queiroz.

A partir deste repositório você vai encontrar os detalhes do desenvolvimento e estruturação deste projeto.

Nessa aplicação foi desenvolvido o front-end, que consome os dados de uma API GraphQL fake bara simular uma API real, criando assim uma plataforma de e-commerce.

Para otimizar a realização das requisições à API, foi utilizado o sistema de cache do Next.js.
Para a estilização das páginas, foi o utilizada a biblioteca styled-components.
Para o gerenciamento do carrinho de compras, foi utilizado o local storage.

---

## Pré-requisitos

Antes de começar a utilizar este projeto, certifique-se de que você tenha instalado em sua máquina:

- Node.js (versão 16 ou superior);
- NPM (gerenciador de pacotes do Node.js)

## Como utilizar
1. Faça um clone desse repositório
  - Use o comando: `git clone git@github.com:matheusqueiroz/fashion-express`.

2. Entre na pasta do repositório que você acabou de clonar
  - Use o comando: `cd fashion-delivery`.

3. Instale as depedências do projeto
  - Use o comando: `npm install`.


<details>
  <summary>
    <strong>🪛 Scripts relevantes: inicialização do projeto e testes</strong>
  </summary><br>

## Iniciaização do projetos

- `npm run dev`: inicializa a aplicação na porta `3000`.
  - *uso na raiz do projeto. Após isso abra http://localhost:3000/ com seu navegador para ver a aplicação funcionando*
- `npm start`: inicializa o servidor GraphQL na porta `3333`<br>
  - *uso na pasta api do proejto. **Atenção!** Certfique-se de rodar esse comando dentro da pasta api do projeto, para isto use o comando `cd api` e só depois inicialize o servidor.*

## Rodando os testes
- `test <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de testes** (final `-test`);
  - *uso na raiz do projeto. Ex.: `npm test`, `npm test 01Header 02ProductsList ` ou ainda `npm run test 01 02`.*

</details>

<details>
  <summary>
    <strong>🎨 Construção do Front-end: componentização e estilização</strong>
  </summary><br>

## Componentização

  O **protótipo** possui um conjunto de **componentes** React para que seja possível fazer o maior reaproveitamento possível de cada estrutura.

## Estilização

  Para a estilização das páginas deste **protótipo** foi utilizada a bibiloteca styled-components.

</details>

<details>
  <summary>
    <strong>🤲 Escrita dos testes</strong>
  </summary>
  
- O projeto avaliará a cobertura de testes da aplicação, ou seja, será testado cada parte da aplicação.
- Para esse projeto foram desenvolvidos _teste unitário_ e _teste de integração_ para testar a aplicação como um todo.
  
</details>

<details>
  <summary>
    <strong>🔄 Persistência no LocalStorage</strong>
  </summary>
  
  - Para persistir informações dos produtos no carrinho, foi utilizado o local storage e o [context](https://reactjs.org/docs/context.html), onde foram criados um hooks customizados para isolar a lógica de persistência do restante do seu código.
  
</details>

---

## Esta aplicação foi desenvolvida em requisitos apresentados a seguir:

<br>

### `01 Desenvolvimento do componente Header`

Todos os testes desse arquivo:

- Farão a navegação para a página principal em `localhost:3000/`.
- Verificarão as condições descritas abaixo:

---

#### 1 - Cria um componente Logo para exibir uma imagem com a logomarca da aplicação

**Observações técnicas**

- Este componente é a logo da aplicação e deve funcionar como um botão que redireciona para a página principal na rota `/`.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador navegará para o endereço do host utilizando o endpoint `/`;
- O avaliador irá verificar se existe um componente com a logo clicável;
- O avaliador clicará no botão e irá verificar o endereço para o qual este componente redireciona.


</details>

---

#### 2 - Cria um componente de busca

**Observações técnicas**

- Este componente é um input que deve funcionar como um mecanismo de busca por produtos, filtrando os produtos exibidos de acordo com o que for digitado.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador irá verificar se existe um input e se é possível digitar no mesmo.

</details>

---

#### 3 - Cria um componente de carrinho

**Observações técnicas**

- Este componente é um ícone que funcionará como um botão e representará o carrinho, mostrando a quantidade de produtos contidos nele.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará se existe um ícone na tela e se o mesmo é clicável

</details>

---

### `02 Desenvolvimento do componente Footer`


