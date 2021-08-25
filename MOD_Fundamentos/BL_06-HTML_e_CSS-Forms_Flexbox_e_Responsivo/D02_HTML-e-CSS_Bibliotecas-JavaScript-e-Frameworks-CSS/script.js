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
 
    // retirado do diretório git de Igorcosta
    //link: https://gist.github.com/igorcosta/3a4caa954a99035903ab ▾
  const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

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
        custom: regexCpf,
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
});
