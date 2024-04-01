let elencoBacchette = [];
let elencoCasate = [];

const contaBacchettePerCasate = () => {
  let elencoBacchetteLocal = JSON.parse(
    localStorage.getItem("elencoBacchetteLocal")
  );
  let elencoCasateLocal = JSON.parse(localStorage.getItem("elencoCasateLocal"));

  let contatore = -1;

  for (let [idx, item] of elencoCasateLocal.entries()) {
    contatore = 0;
    for (let [idx2, item2] of elencoBacchetteLocal.entries()) {
      if (item.nome === item2.casata) {
        contatore = contatore + 1;
      }
      item.numero = contatore;
    }
  }
  localStorage.setItem(
    "elencoBacchetteLocal",
    JSON.stringify(elencoBacchetteLocal)
  );
  localStorage.setItem("elencoCasateLocal", JSON.stringify(elencoCasateLocal));
};

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
  contaBacchettePerCasate();
};

const stampa = () => {
  contaBacchettePerCasate();

  let codice = "";

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
        <td> <button class="btn btn-secondary" onclick="modifica(${idx})">
                        <i class="fa-solid fa-pencil"></i>
                    </button> <button class="btn btn-danger" onclick="eliminaBacchetta(${idx})">
                        <i class="fa-solid fa-trash"></i>
                    </button></i></button>
                    </td>
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

/*
const modificaBacchetta = (indice) => {
  let elencoBacchetteLocal = JSON.parse(
    localStorage.getItem("elencoBacchetteLocal")
  );

  document.getElementById("modifica-codice").value =
    elencoBacchetteLocal[indice].codice;
  document.getElementById("modifica-materiale").value =
    elencoBacchetteLocal[indice].materiale;
  document.getElementById("modifica-nucleo").value =
    elencoBacchetteLocal[indice].nucleo;
  document.getElementById("modifica-lunghezza").value =
    elencoBacchetteLocal[indice].lunghezza;
  document.getElementById("modifica-resistenza").value =
    elencoBacchetteLocal[indice].resistenza;
  document.getElementById("modifica-nome").value =
    elencoBacchetteLocal[indice].nome;
  document.getElementById("modifica-casata").value =
    elencoBacchetteLocal[indice].casata;
  document.getElementById("modifica-foto").value =
    elencoBacchetteLocal[indice].foto;

  $("#modificaBacchette").data("identificativo", indice);

  $("#modificaBacchette").modal("show");
};

const updateBacchetta = () => {
  codice = document.getElementById("modifica-codice").value;
  materiale = document.getElementById("modifica-materiale").value;
  nucleo = document.getElementById("modifica-nucleo").value;
  lunghezza = document.getElementById("modifica-lunghezza").value;
  resistenza = document.getElementById("modifica-resistenza").value;
  mago = document.getElementById("modifica-nome").value;
  casata = document.getElementById("modifica-casata").value;
  foto = document.getElementById("modifica-foto").value;

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

  let indice = $("#modificaBacchette").data("identificativo");

  let elenco = JSON.parse(localStorage.getItem("elencoBacchetteLocal"));
  elenco[indice] = ogg;
  localStorage.setItem("elencoBacchetteLocal", JSON.stringify(elenco));

  $("#modificaBacchette").modal("hide");
};
*/

// const modifica = (indice) => {
//   let elenco = JSON.parse(localStorage.getItem("oggetti_amz"));
//   console.log(elenco[indice]);

//   document.getElementById("update-nome").value = elenco[indice].nome;
//   document.getElementById("update-descrizione").value = elenco[indice].desc;
//   document.getElementById("update-prezzo").value = elenco[indice].prez;
//   document.getElementById("update-categoria").value = elenco[indice].cate;
//   $("#modaleModifica").modal("show");
//   $("#modaleModifica").data("identificativo", indice);
// };

// const update = () => {
//   let nome = document.getElementById("update-nome").value;
//   let desc = document.getElementById("update-descrizione").value;
//   let prez = document.getElementById("update-prezzo").value;
//   let cate = document.getElementById("update-categoria").value;

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
  numero = 0;

  let ogg = {
    nome,
    descrizione,
    logo,
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
  contaBacchettePerCasate();
};

elencoCasateMethod = () => {
  elencoCasateLocal = JSON.parse(localStorage.getItem("elencoCasateLocal"));

  let codice = '<option value="Nessuno" selected="selected">Nessuno</option>';

  for (const [idx, item] of elencoCasateLocal.entries()) {
    codice += `<option value="${item.nome}">${item.nome}</option>`;
  }

  document.getElementById("inserimento-casata").innerHTML = codice;
  contaBacchettePerCasate();
};

const stampaCasate = () => {
  contaBacchettePerCasate();
  let codice;

  elencoCasateLocal = JSON.parse(localStorage.getItem("elencoCasateLocal"));

  for (let [idx, item] of elencoCasateLocal.entries()) {
    codice += `<tr>
      <td>${idx + 1}</td>
      <td>${item.nome}</td>
      <td>${item.descrizione}</td>
      <td>${item.logo}</td>
      <td>${item.numero}</td>
      <td><button class="btn btn-danger" onclick="eliminaCasata(${idx})">
                        <i class="fa-solid fa-trash"></i>
                    </button></td>
    </tr>`;
  }

  document.getElementById("corpo-tabella-casate").innerHTML = codice;
};

let elencoBacchetteLocal = localStorage.getItem("elencoBacchetteLocal");

if (!elencoBacchetteLocal) {
  localStorage.setItem("elencoBacchetteLocal", JSON.stringify([]));
  ss;
}

let elencoCasateLocal = localStorage.getItem("elencoCasateLocal");

if (!elencoCasateLocal) {
  localStorage.setItem("elencoCasateLocal", JSON.stringify([]));
}

const chiudiViewCasate = () => {
  $("#visualizzaCasate").modal("hide");
};

const eliminaCasata = (indice) => {
  let elencoCasateLocal = JSON.parse(localStorage.getItem("elencoCasateLocal"));
  let elencoBacchetteLocal = JSON.parse(
    localStorage.getItem("elencoBacchetteLocal")
  );
  let nomeCasata = elencoCasateLocal[indice].nome;

  for (let [idx, item] of elencoBacchetteLocal.entries()) {
    if (item.casata == nomeCasata) {
      item.casata = "Nessuno";
    }
  }

  elencoCasateLocal.splice(indice, 1);
  stampaCasate();

  localStorage.setItem("elencoCasateLocal", JSON.stringify(elencoCasateLocal));
  localStorage.setItem(
    "elencoBacchetteLocal",
    JSON.stringify(elencoBacchetteLocal)
  );

  stampaCasate();
  stampa();
};

stampa();
stampaCasate();

contaBacchettePerCasate();
