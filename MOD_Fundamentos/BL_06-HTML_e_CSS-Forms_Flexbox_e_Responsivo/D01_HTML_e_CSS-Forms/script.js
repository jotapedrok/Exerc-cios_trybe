function addStates() {
  const estados = document.querySelector('#estado');
  const arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
  for (let i = 0; i < arraySiglaEstado.length; i += 1) {
    const state = document.createElement('option');
    state.className = 'state';
    state.innerText = arraySiglaEstado[i];
    estados.appendChild(state);
  }
}
addStates();

function validateTxt(inputName, maxLength) {
  if (inputName.value === '' || inputName.value.length > maxLength) {
    alert('Campo ' + inputName.name + ' inválido');
  }
}

const namers = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const endereço = document.querySelector('#endereço');
const cidade = document.querySelector('#cidade')
const btnSend = document.querySelector('#submit');
const resumVitae = document.querySelector('#vitae-resum');
const cargo = document.querySelector('#cargo');
const cargoDescri = document.querySelector('#cargo-descriçao');

function afterClick(event) {
  event.preventDefault();

  validateTxt(namers, 40);
  validateTxt(email, 50);
  validateTxt(cpf, 11);
  validateTxt(endereço, 200);
  validateTxt(cidade, 28);
  validateTxt(resumVitae, 1000);
  validateTxt(cargo, 40);
  validateTxt(cargoDescri, 500);

}
btnSend.addEventListener('click', afterClick);
