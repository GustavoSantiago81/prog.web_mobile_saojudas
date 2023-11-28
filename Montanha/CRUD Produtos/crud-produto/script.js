document.addEventListener("DOMContentLoaded", function () {
  const listarLink = document.getElementById("listar");
  const adicionarLink = document.getElementById("adicionar");
  const editarLink = document.getElementById("editar");
  const excluirLink = document.getElementById("excluir");
  const conteudoDiv = document.getElementById("conteudo");

  const produtos = [
    {
      id: 1,
      nome: "Produto 1",
      descricao: "Descrição do Produto 1",
      preco: 10.99,
      quantidade: 100,
    },
    {
      id: 2,
      nome: "Produto 2",
      descricao: "Descrição do Produto 2",
      preco: 20.99,
      quantidade: 50,
    },
    {
      id: 3,
      nome: "Produto 3",
      descricao: "Descrição do Produto 3",
      preco: 15.99,
      quantidade: 75,
    },
  ];
  
  function carregarPagina(pagina) {
    fetch(pagina)
      .then((response) => response.text())
      .then((data) => {
        conteudoDiv.innerHTML = data;

        if (pagina === "listar_produtos.html") {
          // Simula uma lista de produtos (você pode substituir isso com dados reais do servidor)

          // Exibe a lista de produtos
          const listaProdutosDiv = document.getElementById("conteudo");
          const ul = document.createElement("ul");
          produtos.forEach((produto) => {
            const li = document.createElement("li");
            li.textContent = `ID: ${produto.id}, Nome: ${produto.nome}, Descrição: ${produto.descricao}, Preço: R$ ${produto.preco}, Quantidade: ${produto.quantidade}`;
            ul.appendChild(li);
          });
          listaProdutosDiv.appendChild(ul);
        } else if (pagina === "editar_produto.html") {
          // Aqui você pode implementar a lógica para editar um produto
          produtoSelect = document.getElementById("produtoSelect");
          produtos.forEach((produto) => {
            const option = document.createElement("option");
            option.value = produto.id;
            option.textContent = produto.nome;
            produtoSelect.appendChild(option);
          });

          document
            .getElementById("produtoSelect")
            .addEventListener("change", function () {
              const produtoID = produtoSelect.value;
              let produtoEditar = produtos.find(
                (produto) => produto.id == produtoID
              );

              if (produtoID) {
                document.getElementById("nome").value = produtoEditar.nome;
                document.getElementById("descricao").value =
                  produtoEditar.descricao;
                document.getElementById("preco").value = produtoEditar.preco;
                document.getElementById("quantidade").value =
                  produtoEditar.quantidade;
              } else {
                document.getElementById("nome").value = "";
                document.getElementById("descricao").value = "";
                document.getElementById("preco").value = "";
                document.getElementById("quantidade").value = "";
              }

              document
                .getElementById("formEditar")
                .addEventListener("submit", function () {
                  produtos[produtoID - 1].nome =
                    document.getElementById("nome").value;
                  produtos[produtoID - 1].descricao =
                    document.getElementById("descricao").value;
                  produtos[produtoID - 1].preco =
                    document.getElementById("preco").value;
                  produtos[produtoID - 1].quantidade =
                    document.getElementById("quantidade").value;
                });
            });
        } else if (pagina === "adicionar_produto.html") {
          document
            .getElementById("submit")
            .addEventListener("click", function () {
              const novoId = produtos[produtos.length - 1].id + 1;
              const novoProduto = {
                id: novoId,
                nome: document.getElementById("nome").value,
                descricao: document.getElementById("descricao").value,
                preco: document.getElementById("preco").value,
                quantidade: document.getElementById("quantidade").value,
              };

              produtos.push(novoProduto);
            });
        } else if (pagina === "excluir_produto.html") {
          const produtoSelect = document.getElementById("produtoSelect");
          produtos.forEach((produto) => {
            const option = document.createElement("option");
            option.value = produto.id;
            option.textContent = produto.nome;
            produtoSelect.appendChild(option);
          });

          produtos.find((produto) => produto.id === produtoSelect.option.value);

          if (produtoSelect.value) {
            const li = document.createElement("li");
            li.textContent = `ID: ${produto.id}, Nome: ${produto.nome}, Descrição: ${produto.descricao}, Preço: R$ ${produto.preco}, Quantidade: ${produto.quantidade}`;
            produtoSelect.appendChild(li);
          }

          const listaProdutoDiv = document.getElementById("produtoExcluir");
          const ul = document.createElement("ul");
          let produtoExcluir = produtos.find(
            (produto) => produto.id == option.value
          );

          const li = document.createElement("li");
          li.textContent = `ID: ${produtoExcluir.id}, Nome: ${produtoExcluir.nome}, Descrição: ${produtoExcluir.descricao}, Preço: R$ ${produtoExcluir.preco}, Quantidade: ${produtoExcluir.quantidade}`;
          ul.appendChild(li);

          listaProdutosDiv.appendChild(ul);
        }
      });
  }

  listarLink.addEventListener("click", function () {
    carregarPagina("listar_produtos.html");
  });

  adicionarLink.addEventListener("click", function () {
    carregarPagina("adicionar_produto.html");
  });

  editarLink.addEventListener("click", function () {
    carregarPagina("editar_produto.html");
  });

  excluirLink.addEventListener("click", function () {
    // Aqui você pode implementar a lógica para excluir um produto
    // conteudoDiv.innerHTML = 'Página de Exclusão de Produto';
    carregarPagina("excluir_produto.html");
  });
});
