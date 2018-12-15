export default function getRandomColor() {
  const colors = [
    '#495070',
    '#f03e3e',
    '#d6336c',
    '#8048e8',
    '#1098ad'
  ];

  const random = Math.floor(Math.random() * 5);
  return colors[random];
}