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
});
