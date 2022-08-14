function mainTheme(fizz = 3, buzz = 5) {
  const getNumberArray = [];
  for (let i = 1; i <= 100; i++) {
    if (i % fizz === 0) {
      getNumberArray.push("This is divisible by 3");
    } else if (i % buzz === 0) {
      getNumberArray.push("This is divisible by 5 ");
    }
    if (i % fizz === 0 && i % buzz === 0) {
      getNumberArray.push("Jackpot");
    } else {
      getNumberArray.push(i);
    }
  }
  return getNumberArray;
}

console.log(mainTheme());

// Second part

function img() {
  const img = document.createElement("img");
  img.src = "https://picsum.photos/200/301";
  document.body.appendChild(img);
}

const buttonElement = document.getElementById("firstbutton");
buttonElement.addEventListener("click", img);
console.log(buttonElement);

// Third part

fetch("https://reqres.in/api/users")
  .then((result) => result.json())
  .then((data) => console.log(data));
