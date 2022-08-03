export default class Tile {
  #tileElement;
  #x;
  #y;
  #value;
  constructor(gameBoard, value = Math.random() > 0.5 ? 2 : 4) {
    this.#tileElement = document.createElement("div");
    this.#tileElement.classList.add("tile");
    gameBoard.append(this.#tileElement);
    this.value = value;
  }
  set value(v) {
    this.#value = v;
    this.#tileElement.textContent = v;
    const power = Math.log2(v);  
    const backgroundLightness = 100 - power * 10;
    this.#tileElement.style.setProperty(
      "--bg-lightness",
      `${backgroundLightness}%`
    );
    this.#tileElement.style.setProperty(
      "--text-lightness",
      `${backgroundLightness <= 50 ? 90 : 10}%`
    );
  }

  set x(value) {
    this.#x = value;

    this.#tileElement.style.setProperty("--x", value);
  }
  set y(value) {
    this.#y = value;
    this.#tileElement.style.setProperty("--y", value);
  }
}
