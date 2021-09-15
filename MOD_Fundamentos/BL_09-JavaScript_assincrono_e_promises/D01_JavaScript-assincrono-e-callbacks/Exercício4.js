const messageDelay = () => Math.floor(Math.random() * 5000);
const errorChance = () => Math.floor(Math.random() *100);
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (perCent, temperature, func, error) => {
  const error404 = perCent();
  if (error404 <= 60) {
    return func(temperature);
  } 
  if (error404 > 60) {
    return error('Robot is busy');
  }
}
const temp = getMarsTemperature();

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
setTimeout(() => sendMarsTemperature(errorChance, temp, temperatureInFahrenheit, handleError), messageDelay());

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
setTimeout(() => sendMarsTemperature(errorChance, temp, greet, handleError), messageDelay());