// Cria um array com os dados da tabela
var tableData = [
    { numero: 1, dataAbertura: "01/01/2022", origem: "Fornecedor", naoConformidade: "Produto fora da especificação" },
    { numero: 2, dataAbertura: "02/01/2022", origem: "Cliente", naoConformidade: "Entrega atrasada" },
    { numero: 3, dataAbertura: "03/01/2022", origem: "Fornecedor", naoConformidade: "Produto danificado" },
    { numero: 4, dataAbertura: "04/01/2022", origem: "Cliente", naoConformidade: "Produto não conforme" },
    { numero: 5, dataAbertura: "05/01/2022", origem: "Fornecedor", naoConformidade: "Produto fora da especificação" }
  ];
  
// Cria a tabela
var table = document.createElement("table");

// Cria o cabeçalho da tabela
var headerRow = document.createElement("tr");
var headers = ["n°", "data abertura", "origem", "não conformidade"];
for (var i = 0; i < headers.length; i++) {
  var headerCell = document.createElement("th");
  headerCell.textContent = headers[i];
  headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);

// Preenche a tabela com os dados
for (var i = 0; i < tableData.length; i++) {
  var tr = document.createElement("tr");
  var cell1 = document.createElement("td");
  cell1.textContent = tableData[i].numero;
  tr.appendChild(cell1);
  var cell2 = document.createElement("td");
  cell2.textContent = tableData[i].dataAbertura;
  tr.appendChild(cell2);
  var cell3 = document.createElement("td");
  cell3.textContent = tableData[i].origem;
  tr.appendChild(cell3);
  var cell4 = document.createElement("td");
  cell4.textContent = tableData[i].naoConformidade;
  tr.appendChild(cell4);
  table.appendChild(tr);
}

// Adiciona a tabela ao documento
document.body.appendChild(table);