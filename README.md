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

<br>

## Esta aplicação foi desenvolvida em requisitos apresentados a seguir:

<br>

### `01 Desenvolvimento do componente Header`

Este componente `Header.tsx` está disposto no diretório `src/components/Header.tsx` e está inserido dentro do arquivo `layout.tsx` localizado no diretório `src/app/layout.tsx`, pois será exibido em todas as páginas da aplicação.

Todos os testes desse arquivo:

- Farão a navegação para a página principal em `localhost:3000/`.
- Verificarão as condições do componente descritas abaixo:

---

#### 1 - Cria o componente `Logo` para exibir uma imagem com a logomarca da aplicação

Este componente está inserido dentro do arquivo `Header.tsx` disposto no diretório `src/components/Header.tsx` pois será renderizado no Header da aplicação.

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

#### 2 - Cria o componente `PrimaryInput` de busca

Este componente está disposto no diretório `src/components/PrimaryInput.tsx` e está inserido dentro do componente `Header.tsx`, pois será renderizado no Header da aplicação.

**Observações técnicas**

- Este componente é um input que deve funcionar como um mecanismo de busca por produtos, filtrando os produtos exibidos de acordo com o que for digitado.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador irá verificar se existe um input e se é possível digitar no mesmo.

</details>

---

#### 3 - Cria o componente `CartIcon`

Este componente está inserido dentro do arquivo `Header.tsx` disposto no diretório `src/components/Header.tsx` pois será renderizado no Header da aplicação.

**Observações técnicas**

- Este componente é um ícone que funcionará como um botão e representará o carrinho, mostrando a quantidade de produtos contida nele.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará se existe um ícone na tela e se o mesmo é clicável

</details>


#### 4 - Cria o componente `MiniCart`

Este componente está inserido dentro do arquivo `Header.tsx` disposto no diretório `src/components/Header.tsx` pois será renderizado no Header da aplicação.

**Observações técnicas**

- Este componente somente será exibido quando `CartIcon` for clicado e será ocultado se o `CartIcon` for clicado novamente. Ele representará um mini-carrinho, mostrando os detalhes do carrinho em tamanho reduzido.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará se o componente é exibido na tela quando o `CartIcon` for clicado.
- O avaliador testará se o componente é ocultado quando o `CartIcon` for clicado novamente.

</details>

---

<br>

### `02 Desenvolvimento do componente Footer`

Este componente `Footer.tsx` está disposto no diretório `src/components/Footer.tsx` e está inserido dentro do arquivo `layout.tsx` localizado no diretório `src/app/layout.tsx`, pois será exibido em todas as páginas da aplicação.

Todos os testes desse arquivo:

- Farão a navegação para a página principal em `localhost:3000/`.
- Verificarão as condições do componente descritas abaixo:

**Observações técnicas**

- Este componente é o footer da aplicação

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará se existe um footer na tela

</details>

---

<br>

### `03 Desenvolvimento dos filtros de busca`

Todos os testes desse arquivo:

- Farão a navegação para a página principal em `localhost:3000/`.
- Verificarão as condições do componente descritas abaixo:

#### 1 - Cria o componente `FilterByType` para filtrar por tipo de produto

Este componente está disposto no diretório `src/components/FilterByType.tsx` e está inserido dentro do componente `FilterBar.tsx`, pois nele estão inseridos os filtros da aplicação. O arquivo `FilterBar.tsx` por sua vez, está localizado no diretório `src/components/FilterBar.tsx` e este, está inserido dentro do arquivo `page.tsx` disposto no diretório `src/app/page.tsx`.

**Observações técnicas**

- Este componente é uma lista clicável que filtra os produtos listados de acordo com o tipo (categoria) selecionado, podendo ser:
  - `Todos os produtos`: essa é a seleção padrão deste filtro, e listará todos os produtos da aplicaçao;
  - `Camisetas`: essa seleção lista todos os produtos da categoria camiseta (shirt);
  - `Canecas`: essa seleção lista todos os produtos da categoria caneca (mug);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador navegará para o endereço do host utilizando o endpoint `/`;
- O avaliador irá verificar existe itens de uma lista com os nomes especificados;
- O avaliador irá verificar se ao clicar em um item da lista, este item ficará selecioado. 

</details>


#### 2 - Cria o componente `FilterByPriority` para filtrar por prioridade

Este componente está disposto no diretório `src/components/FilterByPriority.tsx` e está inserido dentro do componente `FilterBar.tsx`, pois nele estão inseridos os filtros da aplicação. O arquivo `FilterBar.tsx` por sua vez, está localizado no diretório `src/components/FilterBar.tsx` e este, está inserido dentro do arquivo `page.tsx` disposto no diretório `src/app/page.tsx`.

**Observações técnicas**

- Este componente é um botão que ao ser clicado exibe uma lista de filtros, cada item da lista ao ser clicado filtra os produtos de acordo com sua prioridade, sendo eles:
  - `Novidades`: esse filtro, lista os produtos em ordem dos mais recentes;
  - `Maior preço`: esse filtro lista os produtos em ordem pelo maior preço;
  - `Menor preço`: esse filtro lista os produtos em ordem pelo menor preço;
  - `Mais vendidos`: esse filtro lista os produtos em ordem dos mais vendidos.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador navegará para o endereço do host utilizando o endpoint `/`;
- O avaliador irá verificar existe componente com uma lista de filtros com os nomes especificados
- O avaliador irá verificar se ao clicar em um item da lista, este item ficará selecioado. 

</details>

<br>

*Nota: Foram criados os arquivos `FilterType.ts` e `PriorityType.ts` dentro do diretório `src/types`, que são do tipo `enum` e foram utilizados para 'tipar' os filtros.*

---

<br>

### `04 Desenvolvimento da lista de produtos`

Todos os testes desse arquivo:

- Farão a navegação para a página principal em `localhost:3000/`.
- Verificarão as condições do componente descritas abaixo:

#### 1 - Cria o componente `ProductList`

Este componente `ProductList.tsx` está disposto no diretório `src/components/ProductList.tsx` e está inserido dentro do arquivo `page.tsx` localizado no diretório `src/app/page.tsx`, pois será exibido na tela inicial da aplicação.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador navegará para o endereço do host utilizando o endpoint `/`;
- O avaliador irá verificar existe um elemento que listará os produtos

</details>

<br>

**Observações técnicas**

- Este componente exibirá uma lista com todos os produtos retornados pela requisição à API.

#### 2 - Cria o hook `useProduct`

Foi criado um hook personalizado chamado `useProducts` localizado no arquivo `src/hooks/useProducts.tsx`.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador navegará para o endereço do host utilizando o endpoint `/`;
- O avaliador irá verificar existe uma lista com 60 produtos retornados da API;
- O avaliador irá verificar existe uma lista de produtos retornados da API com os seguintes dados de cada produto:
  - imagem do produto
  - nome do produto
  - preço do produto 

</details>

<br>

**Observações técnicas**

- Este hook será responsável por realizar a requisição à API GraphQL.
- Para realizar a requsição e buscar todos o produtos na API foi utilizada a seguinte query:
```
query {
  allProducts {
    id
    image_url
    name
    price_in_cents
  }
}
```
*Nota: Essa query retorna todos os produtos sem nenhum tipo filtro.*

#### 3 - Cria a lógica para os filtros

- Para realizar a lógica dos filtros da aplicação, foi criado um arquivo `GetFilters.ts` no diretório `src/util/GetFilters.tsx`.

- Foi criado o arquivo `FilterContext.tsx` no diretório `src/contexts/filterContext` para o contexto dos filtros.

- Foi criado o arquivo `useFilter.ts` no diretório `src/hooks/useFilter.ts` para utilizar o contexto dos filtros.

- Foi criado o arquivo `GetFilters.ts` no diretório `src/utils/GetFilter.ts` para realizar a lógica dos filtros.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador irá verificar se ao clicar nas opções de filtro por tipo os produtos são listados de forma correta.
- O avaliador irá verificar se ao clicar nas opções de filtro por prioridade os produtos são listados de forma correta.
- O avaliador irá verificar se ao digitar na barra de busca os produtos são listados de forma correta.

</details>

<br>

**Observações técnicas**

- Este arquivo realiza a lógica dos filtros nos dados retornados pela API, exibindo os produtos de acordo com o filtro selecionado.
- Para realizar a requisição à API aplicando os filtros, foram utilizadas as seguintes queries:

```
query {
  allProducts(sortField: "campo", sortOrder: "ordem") {
    id
    image_url
    name
    price_in_cents
  }
}
```

```
query {
  allProducts(sortField: "campo", sortOrder: "ordem", filter: { category: "categoria" }) {
    id
    image_url
    name
    price_in_cents
  }
}
```

*Nota: os locais onde estão escritos entre aspas duplas nas queries acima serão substituídos por valores retornados pelas funções que realizam a lógica dos filtros.*

### `05 Desenvolvimento da página de produto`





### `06 Desenvolvimento da página do carrinho`





### `07 Desenvolvimento da página de checkout` 





### `08 Desenvolvimento da página de favoritos`





### `09 Desenvolvimento da paginação dos produtos`





### `08 Desenvolvimento do testes`








































