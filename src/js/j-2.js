function calculate() {

  // variables
  let elements = document.getElementsByTagName("li");
  let screen = document.querySelector('.calculator__screen-input');
  let clear = document.querySelector('.calculator__clear');
  let operators = ["+", "-", "*", "/", "."];
  let exceptions = [
    "++", "+-", "+/", "+*", "+.",
    "--", "-+", "-/", "-*", "-.",
    "//", "/+", "/-", "/*", "/.",
    "**", "*+", "*-", "*/", "*.",
    "..", ".+", ".-", ".*", "./",
  ];

  // logic
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].innerHTML === '=') {
      elements[i].addEventListener("click", calculate(i));
    }

    else {
      elements[i].addEventListener("click", addToCurrentValue(i));
    }
  }

  function addToCurrentValue(i) {
    return function () {
      screen.value += elements[i].innerHTML;

      for (let n = 0; n < operators.length; n++) {
        if (screen.value.substring(0, 1) == operators[n]) {
          screen.value = '';
        }
      }

      for (let j = 0; j < exceptions.length; j++) {
        if (screen.value.slice(-2) == exceptions[j]) {
          screen.value = screen.value.replace(/.$/, '');
        }
      }

      let checkDot = /[0-9]+\.[0-9]+\./;
      let result = screen.value.match(checkDot);

      if (result) {
        screen.value = screen.value.replace(/.$/, '');
      }
    };
  }

  clear.onclick = function () {
    screen.value = '';
  };

  function calculate(i) {
    return function () {
      screen.value = eval(screen.value).toFixed(2);
    };
  }

  // keyboard input
  // document.addEventListener('keydown', function (evt) {
  //   let SYMBOL_KEYCODES = {
  //     '48': '0',
  //     '49': '1',
  //     '50': '2',
  //     '51': '3',
  //     '52': '4',
  //     '53': '5',
  //     '54': '6',
  //     '55': '7',
  //     '56': '8',
  //     '57': '9',
  //   };

  //   let BACKSPACE_KEYCODE = 8;

  //   if (evt.keyCode in SYMBOL_KEYCODES) {
  //     evt.preventDefault();
  //     addSymbolToInput(SYMBOL_KEYCODES[evt.keyCode])
  //   }

  //   else if (evt.keyCode === BACKSPACE_KEYCODE) {
  //     deleteLastSymbol();
  //   }

  //   function addSymbolToInput(number) {
  //     if (screen.value === '0') {
  //       screen.value = number;
  //     } else {
  //       screen.value += number;
  //     };
  //   };

  //   function deleteLastSymbol() {
  //     let subStr = screen.value.slice(0, -1)
  //     screen.value = subStr === '' ? '' : subStr;
  //   };
  // });
};

calculate();