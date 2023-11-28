// Cria um array com os dados da tabela
var tableData = [
    { numero: 1, dataAbertura: "01/01/2022", naoConformidade: "Produto fora da especificação", autor: "Isaque" },
    { numero: 2, dataAbertura: "02/01/2022", naoConformidade: "Entrega atrasada", autor: "Samuel"  },
    { numero: 3, dataAbertura: "03/01/2022", naoConformidade: "Produto danificado", autor: "Paulo"  },
    { numero: 4, dataAbertura: "04/01/2022", naoConformidade: "Produto não conforme", autor: "Ailton"  },{ numero: 1, dataAbertura: "01/01/2022", naoConformidade: "Produto fora da especificação", autor: "Isaque" },
    { numero: 5, dataAbertura: "05/01/2022", naoConformidade: "Produto fora da especificação", autor: "José"  }
  ];

function inicializar(){
  tableData
}

function listaTabela(){

// // Cria a tabela
// var table = document.createElement("table");

// // Cria o cabeçalho da tabela
// var headerRow = document.createElement("tr");
// var headers = ["n°", "data abertura", "origem", "não conformidade"];
// for (var i = 0; i < headers.length; i++) {
//   var headerCell = document.createElement("th");
//   headerCell.textContent = headers[i];
//   headerRow.appendChild(headerCell);
// }
// table.appendChild(headerRow);


var tbody = document.getElementById("tbody");
tbody.innerText = '';

// Preenche a tabela com os dados
for (var i = 0; i < tableData.length; i++) {
  var tr = tbody.insertRow();

  var tdNumero = tr.insertCell();
  tdNumero.textContent = tableData[i].numero;

  var tdDataAbertura = tr.insertCell();
  tdDataAbertura.textContent = tableData[i].dataAbertura;
  
  var tdNaoConformidade = tr.insertCell();
  tdNaoConformidade.textContent = tableData[i].naoConformidade;
  
  var tdAutor = tr.insertCell();
  tdAutor.textContent = tableData[i].autor;
}

}