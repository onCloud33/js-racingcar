import Car, {
  CAR_NAME_MAX_LENGTH,
  CAR_NAME_MIN_LENGTH,
  ERROR,
} from "../src/Car";

const DEFAULT_CAR_NAME = "cloud";

describe("Car", () => {
  test("자동차는 이름을 가질 수 있다.", () => {
    const car = new Car(DEFAULT_CAR_NAME);
    expect(car.getName()).toBe(DEFAULT_CAR_NAME);
  });

  test(`자동차의 이름은 ${CAR_NAME_MAX_LENGTH}자 이하만 가능하다.`, () => {
    expect(() => new Car("HyoRyoung")).toThrow(ERROR.CAR_MAX_LENGTH);
  });

  test("자동차의 이름은 공백일 수 없다.", () => {
    expect(() => new Car("")).toThrow(ERROR.CAR_MIN_LENGTH);
  });

  test("자동차의 이름은 문자열만 입력 가능하다.", () => {
    expect(() => new Car(123)).toThrow(ERROR.CAR_NAME_ALPHABET);
  });

  test("자동차는 랜덤 숫자가 4 이상이면 앞으로 전진한다.", () => {
    const car = new Car(DEFAULT_CAR_NAME);
    car.run(4);
    expect(car.getPosition()).toBe(1);
  });

  test("자동차는 랜덤 숫자가 4 미만이면 정지한다.", () => {
    const car = new Car(DEFAULT_CAR_NAME);
    car.run(3);
    expect(car.getPosition()).toBe(0);
  });
});
