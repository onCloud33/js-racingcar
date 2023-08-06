// - [x] 자동차는 이름을 가질 수 있다.
// - [x] 자동차는 랜덤 숫자가 4 이상이면 앞으로 전진한다.
// - [x] 자동차는 랜덤 숫자가 4 미만이면 정지한다.

import Car from "../src/Car";

const DEFAULT_CAR_NAME = "ryoung";

describe("Car", () => {
  test("자동차는 이름을 가질 수 있다.", () => {
    const car = new Car(DEFAULT_CAR_NAME);
    expect(car.getName()).toBe(DEFAULT_CAR_NAME);
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
