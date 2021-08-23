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
    alert('Campo "' + inputName.name + '" inválido');
    errors.push('X');
  }
}


const namers = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const endereço = document.querySelector('#endereço');
const cidade = document.querySelector('#cidade');
const btnSend = document.querySelector('#submit');
const resumVitae = document.querySelector('#vitae-resum');
const cargo = document.querySelector('#cargo');
const cargoDescri = document.querySelector('#cargo-descriçao');
const datai = document.querySelector('#inicio-data');
const estado = document.querySelector('#estado');
const casa = document.querySelector('#casa');
const ap = document.querySelector('#ap');
function moradia() {
  if (casa.checked === true) {
    return "Casa"
  } else if (ap.checked === true) {
    return "Apartamento"
  }
}
let errors = []

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

  const data = document.querySelector('#inicio-data').value;
  const day = data[0] + data[1];
  const month = data[3] + data[4];
  const year = data[6] + data[7] + data[8] + data[9];
  function validateData() {
    if (data.length === 10 && data[2] === '/' && data[5] === '/') {
      if (year.length < 4) {
        alert('Formato de ano incorreto');
        errors.push('X');
      } else if (parseInt(day) < 0 || parseInt(day) > 31) {
        alert('Dia Inválido');
        errors.push('X');
      } else if (parseInt(month) < 0 || parseInt(month) > 12) {
        alert('Mês Inválido');
        errors.push('X');
      }
    } else {
      alert('Campo "Data de início" inválido');
      errors.push('X');
    }
  }
  validateData();

  function validateTypeHouse() {
    if (casa.checked === false && ap.checked === false) {
      alert('Selecione um "Tipo de moradia');
      errors.push('X');
    }
  }
  validateTypeHouse();

  function moradiaType() {
    if (casa.checked === true) {
      return 'Casa'
    } else {
      return 'Apartamento'
    }
  }

  const divResult = document.querySelector('#result');
  divResult.className = 'containers'
 if (errors.length === 0) {
   divResult.innerHTML = '<div class="lines">' + 
   '<p>Nome: ' + namers.value + '</p>' + 
 '</div>' + 
 '<div class="lines">' + 
   '<p>Email: ' + email.value + '</p>' + 
 '</div>' + 
 '<div class="lines">' + 
   '<p>CPF: ' + cpf.value + '</p>' + 
 '</div>' + 
 '<div class="lines">' + 
   '<p>Endereço: ' + endereço.value + '</p>' + 
 '</div>' + 
 '<div class="lines">' + 
   '<p>Cidade: ' + cidade.value + '</p>' + 
 '</div>' + 
 '<div class="lines">' + 
   '<p>Estado: ' + estado.value + '</p>' + 
 '</div>' + 
 '<div class="lines">' + 
   '<p>Tipo de Moradia: ' + moradiaType() + '</p>' + 
 '</div>' + 
 '<div class="lines containers">' + 
   '<p style.maxWidth = "200px";>Resumo currículo: ' + resumVitae.value + '</p>' + 
 '</div>' + 
 '<div class="lines">' + 
   '<p>Cargo anterior: ' + cargo.value + '</p>' + 
 '</div>' + 
 '<div class="lines">' + 
   '<p>Descrição do cargo: ' + cargoDescri.value + '</p>' + 
 '</div>' + 
 '<div class="lines">' + 
   '<p>Data de início: ' + datai.value + '</p>' + 
 '</div>';
  }
 }
btnSend.addEventListener('click', afterClick);

const btnClear = document.querySelector('#clean');
btnClear.addEventListener('click', function() {
  divResult.className = '';
  divResult.innerHTML = '';
});