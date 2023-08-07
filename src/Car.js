import { isAlphabet } from "../utils/isAlphabet";

export const CAR_RUN_UNIT = 1;
export const DEFAULT_POSITION = 0;
export const RUN_THRESHOLD = 4;
export const CAR_NAME_MAX_LENGTH = 5;
export const CAR_NAME_MIN_LENGTH = 1;
export const ERROR = Object.freeze({
  CAR_MAX_LENGTH: `자동차 이름은 ${CAR_NAME_MAX_LENGTH}자 이하만 가능합니다.`,
  CAR_MIN_LENGTH: `자동차 이름은 ${CAR_NAME_MIN_LENGTH}자 이상만 가능합니다.`,
  CAR_NAME_ALPHABET: "자동차 이름은 문자열만 가능합니다.",
});

export default class Car {
  #name;
  #position = DEFAULT_POSITION;

  constructor(name) {
    this.validateName(name);
    this.#name = name;
  }

  validateName(name) {
    if (name.length > CAR_NAME_MAX_LENGTH) {
      throw new Error(ERROR.CAR_MAX_LENGTH);
    }

    if (name.length < CAR_NAME_MIN_LENGTH) {
      throw new Error(ERROR.CAR_MIN_LENGTH);
    }

    if (!isAlphabet(name)) {
      throw new Error(ERROR.CAR_NAME_ALPHABET);
    }
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
