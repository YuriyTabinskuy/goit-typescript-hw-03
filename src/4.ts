// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

// Наприклад, ось так:

interface IKey {
  signature: number;
  getSignature(): number;
}

abstract class House {
  protected tenats: object[] = [];
  protected door: boolean;
  protected key: IKey;
  constructor(key: IKey) {
    this.key = key;
    this.door = false;
  }

  public comeIn(person: object): object[] {
    if (this.door) {
      this.tenats.push(person);
    }
    return [...this.tenats];
  }
  public abstract openDoor(key: IKey): void;
}

class MyHouse extends House {
  public openDoor(key: IKey): void {
    if ("signature" in this.key || "signature" in key) {
      if (this.key.signature === key.signature) {
        this.door = true;
      } else {
        this.door = false;
      }
    }
  }
}

class Key implements IKey {
  signature: number;
  constructor() {
    this.signature = Math.floor(Math.random() * (10 - 1) + 1);
  }
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: IKey;
  constructor(key: IKey) {
    this.key = key;
  }
  public getKey(): IKey {
    return this.key;
  }
}

const key = new Key();

key.getSignature();

const house = new MyHouse(key);
const person = new Person(key);
person.getKey();
house.openDoor(person.getKey());

house.comeIn(person);

export {};
