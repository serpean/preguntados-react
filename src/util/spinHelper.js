exports.spinHelper = (target, openQuestion) => {
  const spinList = document.getElementById('spinList');
  const vueltas = Math.floor(Math.random() * 6 + 3);
  const BreakException = {};
  const firstValue = 750;
  const secondValue = 125;
  let end = false;
  for (let index = 0; index < spinList.childNodes.length; index++) {
    const element = spinList.childNodes[index];
    element.classList.remove('spin');
  }

  try {
    for (let i = 0; i < vueltas; i++) {
      for (let index = 0; index < spinList.childNodes.length; index++) {
        const element = spinList.childNodes[index];
        if (i === vueltas - 1 && element.id === target) {
          end = true;
          window.setTimeout(() => {
            element.classList.toggle('spin');
            window.setTimeout(() => openQuestion(), 1000);
            throw BreakException;
          }, firstValue * i + index * secondValue);
        }
        if (!end) {
          window.setTimeout(() => {
            element.classList.toggle('spin');
          }, firstValue * i + index * secondValue);
          window.setTimeout(() => {
            element.classList.toggle('spin');
          }, firstValue * i + index * secondValue + secondValue);
        }
      }
    }
  } catch (e) {}
};
