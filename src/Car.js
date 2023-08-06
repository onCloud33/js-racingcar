export const CAR_RUN_UNIT = 1;
export const DEFAULT_POSITION = 0;
export const RUN_THRESHOLD = 4;

export default class Car {
  #name;
  #position = DEFAULT_POSITION;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  run(number) {
    if (number >= RUN_THRESHOLD) {
      this.#position += CAR_RUN_UNIT;
    }
  }
}
