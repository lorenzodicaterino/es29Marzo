let elencoBacchette = [];
let elencoCasate = [];

const salva = () => {
  codice = document.getElementById("inserimento-codice").value;
  materiale = document.getElementById("inserimento-materiale").value;
  nucleo = document.getElementById("inserimento-nucleo").value;
  lunghezza = document.getElementById("inserimento-lunghezza").value;
  resistenza = document.getElementById("inserimento-resistenza").value;
  mago = document.getElementById("inserimento-nome").value;
  casata = document.getElementById("inserimento-casata").value;
  foto = document.getElementById("inserimento-foto").value;

  let ogg = {
    codice,
    materiale,
    nucleo,
    lunghezza,
    resistenza,
    mago,
    casata,
    foto,
  };

  elencoBacchette = JSON.parse(localStorage.getItem("elencoBacchetteLocal"));

  elencoBacchette.push(ogg);

  localStorage.setItem("elencoBacchetteLocal", JSON.stringify(elencoBacchette));

  document.getElementById("inserimento-codice").value = "";
  document.getElementById("inserimento-materiale").value = "";
  document.getElementById("inserimento-nucleo").value = "";
  document.getElementById("inserimento-lunghezza").value = "";
  document.getElementById("inserimento-resistenza").value = "";
  document.getElementById("inserimento-nome").value = "";
  document.getElementById("inserimento-foto").value = "";

  $("#inserimentoBacchetta").modal("hide");

  stampa();
};

const stampa = () => {
  let codice;

  let elencoBacchetteLocal = JSON.parse(
    localStorage.getItem("elencoBacchetteLocal")
  );

  for (let [idx, item] of elencoBacchetteLocal.entries()) {
    codice += `
        <tr>
        <td>${idx + 1}</td>
        <td>${item.codice}</td>
        <td>${item.materiale}</td>
        <td>${item.nucleo}</td>
        <td>${item.lunghezza}</td>
        <td>${item.resistenza}</td>
        <td>${item.mago}</td>
        <td>${item.casata}</td>
        <td> <button class="btn btn-secondary" onclick="modificaBacchetta(${idx})">
                        <i class="fa-solid fa-pencil"></i>
                    </button> <button class="btn btn-danger" onclick="eliminaBacchetta(${idx})">
                        <i class="fa-solid fa-trash"></i>
                    </button></i></button></td>
        </tr>
        `;
  }

  document.getElementById("corpo-tabella-bacchetta").innerHTML = codice;
};

const eliminaBacchetta = (idx) => {
  let elencoBacchetteLocal = JSON.parse(
    localStorage.getItem("elencoBacchetteLocal")
  );
  elencoBacchetteLocal.splice(idx, 1);
  localStorage.setItem(
    "elencoBacchetteLocal",
    JSON.stringify(elencoBacchetteLocal)
  );
  stampa();
};

// const modificaBacchetta = (indice) => {
//   let elencoBacchetteLocal = JSON.parse(
//     localStorage.getItem("elencoBacchetteLocal")
//   );

//   document.getElementById("modifica-codice").value =
//     elencoBacchetteLocal[indice].codice;
//   document.getElementById("modifica-materiale").value =
//     elencoBacchetteLocal[indice].materiale;
//   document.getElementById("modifica-nucleo").value =
//     elencoBacchetteLocal[indice].nucleo;
//   document.getElementById("modifica-lunghezza").value =
//     elencoBacchetteLocal[indice].lunghezza;
//   document.getElementById("modifica-resistenza").value =
//     elencoBacchetteLocal[indice].resistenza;
//   document.getElementById("modifica-nome").value =
//     elencoBacchetteLocal[indice].nome;
//   document.getElementById("modifica-casata").value =
//     elencoBacchetteLocal[indice].casata;
//   document.getElementById("modifica-foto").value =
//     elencoBacchetteLocal[indice].foto;

//   $("#modificaBacchette").data("identificativo", indice);

//   $("#modificaBacchette").modal("show");
// };

// const updateBacchetta = () => {
//   let nome = document.getElementById("update-nome").value;

//   let ogg = {
//     nome,
//     desc,
//     prez,
//     cate,
//   };

//   let indice = $("#modaleModifica").data("identificativo");

//   let elenco = JSON.parse(localStorage.getItem("oggetti_amz"));
//   elenco[indice] = ogg;
//   localStorage.setItem("oggetti_amz", JSON.stringify(elenco));

//   $("#modaleModifica").modal("hide");
// };

const salvaCasate = () => {
  nome = document.getElementById("nome-casata").value;
  descrizione = document.getElementById("descrizione-casata").value;
  logo = document.getElementById("logo-casata").value;
  numero = "12";

  let ogg = {
    nome,
    descrizione,
    logo,
    numero,
  };

  elencoCasate = JSON.parse(localStorage.getItem("elencoCasateLocal"));

  elencoCasate.push(ogg);

  localStorage.setItem("elencoCasateLocal", JSON.stringify(elencoCasate));

  document.getElementById("nome-casata").value = "";
  document.getElementById("descrizione-casata").value = "";
  document.getElementById("logo-casata").value = "";

  $("#inserimentoCasata").modal("hide");

  stampaCasate();
  elencoCasateMethod();
};

elencoCasateMethod = () => {
  elencoCasateLocal = JSON.parse(localStorage.getItem("elencoCasateLocal"));

  let codice = '<option value="Nessuno" selected="selected">Nessuno</option>';

  for (const [idx, item] of elencoCasateLocal.entries()) {
    codice += `<option value="${item.nome}">${item.nome}</option>`;
  }

  document.getElementById("inserimento-casata").innerHTML = codice;
};

const stampaCasate = () => {
  let codice;

  elencoCasateLocal = JSON.parse(localStorage.getItem("elencoCasateLocal"));

  for (let [idx, item] of elencoCasateLocal.entries()) {
    codice += `<tr>
      <td>${idx + 1}</td>
      <td>${item.nome}</td>
      <td>${item.descrizione}</td>
      <td>${item.logo}</td>
      <td>${item.numero}</td>
    </tr>`;
  }

  document.getElementById("corpo-tabella-casate").innerHTML = codice;
};

let elencoBacchetteLocal = localStorage.getItem("elencoBacchetteLocal");

if (!elencoBacchetteLocal) {
  localStorage.setItem("elencoBacchetteLocal", JSON.stringify([]));
}

let elencoCasateLocal = localStorage.getItem("elencoCasateLocal");

if (!elencoCasateLocal) {
  localStorage.setItem("elencoCasateLocal", JSON.stringify([]));
}

const contaBacchettePerCasate = (nomeCasata) => {
  let elencoBacchetteLocal = JSON.parse(
    localStorage.getItem("elencoBacchetteLocal")
  );

  let contatore = 0;

  for (let [idx, item] of elencoBacchetteLocal.entries()) {
    if (nomeCasata == item.casata.value) {
      contatore++;
    }

    return contatore;
  }
};

const chiudiViewCasate = () => {
  $("#visualizzaCasate").modal("hide");
};

console.log(contaBacchettePerCasate("lorenzo"));

stampa();
stampaCasate();
