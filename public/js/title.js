processElements(document.querySelectorAll('rainbow, wave, spin, pulse, wobble, vibrate, slide, rotate, glow, zoom'), insertSpans);

function processElements(list, fn) {
  for (var i = 0, l = list.length; i < l; i++) {
    var item = list[i];
    fn(item);
  }
}

function insertSpans(item) {
  var txt = item.textContent,
    newTxt = '';

  for (var x = 0, y = txt.length; x < y; x++) {
    var c = txt[x];

    if (c === ' ') {
      c = '&nbsp;';
    }

    newTxt += '<span>' + c + '</span>';
  }

  item.innerHTML = newTxt;
}