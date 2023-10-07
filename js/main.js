let convert;

do {
  convert = prompt('How many hours do you want to convert?');

  if (isNaN(convert)) {
    alert(`${convert} is not a number!`)
  }

} while (isNaN(convert));

const second = +convert * 3600;

alert(`It will be ${second} seconds!`);