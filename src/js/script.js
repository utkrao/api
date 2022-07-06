const btnTranslate = document.querySelector("#btn-tran");
const data = document.querySelector("#inputdata");
const out = document.querySelector("#output");

let url = "https://api.funtranslations.com/translate/ferb-latin.json?text=";

const errorHandler = (error) => console.log(error);

const messgae = () => {
  url = url + data.value;
  let data_out = fetch(url)
    .then((response) => response.json())
    .then((json) => {
      out.innerText = json.contents.translated;
    })
    .catch((error) => console.log(error));
};

btnTranslate.addEventListener("click", messgae, false);
