/* */
//import Chart from 'chart.js/auto';
/* eslint-disable*/
import { tiposKanto } from './data.js'
import data from './data/pokemon/pokemon.js';

const Kanto1 = Object.keys(tiposKanto(data));
const kanto2 = Object.values(tiposKanto(data));
const colors = ["#2bb545", "#db2721", "#4cb8d9", "#d9eb3b", "#ff0a74", "#D35400", "#ff0000", "#ff9b4f", "#420b1c", "#40ff66", "#dfa86b", "#8ad3ed", "#737d75", "#8c4160", "#8d4ca8", "#733906", "#75e4d2d4", "#114f82"];


new Chart('myChartKanto', {
  type: 'pie', // pie para tortas, bar es de barras
  data: {
    labels: Kanto1,
    datasets: [{
      data: kanto2,
      backgroundColor: colors,
      BorderColor: 'blue', // Color del borde al hacer hover
      borderWidth: 2 // Ancho del borde al hacer hover
    }]
  },
  options: {
    legend: {
      display: true, // Puedes mostrar la leyenda si lo deseas
      position: 'left' // Puedes ajustar la posición de la leyenda (top, bottom, left, right)
    },
    title: {
      display: true,
      text: 'Generation Kanto',
      fontSize: 30, // Personaliza el tamaño de la fuente del título
      fontColor: 'hellow', // Cambia el color del texto del título a blanco (debe ser un string)
      backgroundColor: 'rgb(40, 40, 36, 1)',
      padding: 10, // Agregado para espaciar el texto del título del gráfico
      position: 'top', // Puedes ajustar la posición del título (top, bottom, left, right)
      align: 'center' // Alinea el título al centro horizontalmente
    },

    responsive: true, // Permite que el gráfico sea responsive
    maintainAspectRatio: false // Evita que el gráfico se distorsione en tamaños pequeños
  }
});

