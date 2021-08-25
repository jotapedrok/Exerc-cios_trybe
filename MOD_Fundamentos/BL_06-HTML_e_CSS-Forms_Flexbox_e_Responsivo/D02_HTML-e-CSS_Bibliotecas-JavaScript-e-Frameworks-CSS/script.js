window.addEventListener('DOMContentLoaded', function() {
  const dateInput = document.querySelector('#date');
  dateInput.DatePickerX.init({
    mondayFirst: false,
    format: 'dd/mm/yyyy',
  });

  function addStates() {
    const estados = document.querySelector('#state');
    const arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
    for (let i = 0; i < arraySiglaEstado.length; i += 1) {
      const state = document.createElement('option');
      state.className = 'state';
      state.innerText = arraySiglaEstado[i];
      estados.appendChild(state);
    }
  }
  addStates();
 
  const regexInteiros = /^\d*$/;

  const rules = {
    rules: {
      name: {
        required: true,
        maxLength: 40,
      },
      email: {
        required: true,
        maxLength: 50
      },
      cpf: {
        required: true,
        maxLength: 11,
        strength: {
        custom: regexInteiros,
        },
      },
      address: {
        required: true,
        maxLength: 200,
      },
      city: {
        required: true,
        maxLength: 28,
      },
      houseType: {
        required: true,
      },
      vitaeResum:{
        required: true,
        maxLength: 1000,
      },
      previousPosition: {
        required: true,
        maxLength: 40,
      },
      jobDescription: {
        required: true,
        maxLength: 500,
      },
      date: {
        required: true,
      }
    },
    messages: {
      name: {
        required: 'Campo obrigatório',
        maxLength: 'Muitos Caractéres. Máximo de: ' + '40',
      },
      email: {
        required: 'Campo obrigatório',
        maxLength: 'Muitos Caractéres. Máximo de: ' + '50',
      },
      cpf: {
        required: 'Campo obrigatório',
        maxLength: 'Muitos Caractéres. Máximo de: ' + '11',
        strength: 'CPF Inválido'
      },
      address: {
        required: 'Campo obrigatório',
        maxLength: 'Muitos Caractéres. Máximo de: ' + '200',
      },
      city: {
        required: 'Campo obrigatório',
        maxLength: 'Muitos Caractéres. Máximo de: ' + '28',
      },
      houseType: {
        required: 'Campo obrigatório',
      },
      vitaeResum:{
        required: 'Campo obrigatório',
        maxLength: 'Muitos Caractéres. Máximo de: ' + '1000',
      },
      previousPosition: {
        required: 'Campo obrigatório',
        maxLength: 'Muitos Caractéres. Máximo de: ' + '40',
      },
      jobDescription: {
        required: 'Campo obrigatório',
        maxLength: 'Muitos Caractéres. Máximo de: ' + '500',
      },
      date: {
        required: 'Campo obrigatório',
      }
    },
    focusWrongField: true,
  }

  new JustValidate('form', rules);

  const casa = document.querySelector('#house');
  const ap = document.querySelector('#apart');
  function moradia() {
    if (casa.checked) {
      return "Casa"
    } else if (ap.checked) {
      return "Apartamento"
    }
  }

  const section = document.querySelector('.div');

  function mkDiv(event) {
    let go = 'great';
    if (document.querySelectorAll('.js-validate-error-label').length === 0) {
      const callBack = {
        Nome: selectElements("#","name"),
        Email: selectElements("#","email"),
        CPF:  selectElements("#","cpf"),
        Endereço: selectElements("#","address"),
        Cidade: selectElements("#","city"),
        Estado: selectElements("#", "state"),
        'Tipo de Moradia': moradia(),
        'Resumo do currículo': selectElements("#", "resum-vitae"),
        'Emprego Anterior': selectElements("#", "previousPosition"),
        'Descrição do Cargo': selectElements("#", "jobDescription"),
        'Data de início': selectElements("#", "date")
        }
        const callBackLength = Object.keys(callBack);
    
      function selectElements(id, nameId){
        return document.querySelector(`${id}${nameId}`).value;
      }

      for (let i = 0; i < callBackLength.length; i += 1) {
          if (Object.values(callBack)[i] === "") {
          return go = 'error';
            } 
          }


        if (go === "great") {
          const backDiv = document.querySelector('.divReturn');
          section.removeChild(backDiv);
          const returnDiv = document.createElement('div');
          returnDiv.className = 'divReturn';
          section.appendChild(returnDiv);
          for (let i = 0; i < callBackLength.length; i += 1) {
            const paragraph = document.createElement('p');
            paragraph.className = 'pReturn';
            paragraph.innerHTML = Object.keys(callBack)[i] + ': ' + Object.values(callBack)[i];
            returnDiv.appendChild(paragraph);
          }
        }
      }
    };

  const btnSend = document.querySelector('#submit');
  btnSend.addEventListener('click', mkDiv);

  function removeDiv() {
    const backDiv2 = document.querySelector('.divReturn');
    section.removeChild(backDiv2);
  }
  
  const btnClear = document.querySelector('#clear');
  btnClear.addEventListener('click', removeDiv);

});
