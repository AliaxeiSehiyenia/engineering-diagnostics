const str = 'смотрите 2 - минутное видео';
const wheelInner = document.querySelector('.wheel-inner');

function RotateLetters(deg, value) {
  const letters = str.split('');
  deg = deg;
  for (const item of letters) {
    let wheelInnerText = document.createElement('div');
    wheelInnerText.className = 'wheel-inner-text';
    wheelInnerText.innerHTML = item.toUpperCase();
    wheelInnerText.style.transform = `rotate(${deg}deg)`;
    deg += value;
    wheelInner.append(wheelInnerText);
  }
  deg += value;
  let circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.transform = `rotate(${deg}deg)`;
  deg += value;
  wheelInner.append(circle);
  deg += value;
  return deg;
}

const deg = RotateLetters(0, 6);
RotateLetters(deg, 6);

document
  .querySelector('.wrapper-cards')
  .addEventListener('wheel', function (event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      var modifier = 1;
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
  });
