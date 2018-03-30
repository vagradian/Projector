function createLogger(message) {
    var messagePrefix = "LOG";
    return function () {
        console.log(messagePrefix + message);
    }
}

var logger1 = createLogger("Hello world");
var logger2 = createLogger("Hi there");

logger1();
logger2();
logger1();
logger2();

/*
1) на строке 1 в глобальную область видимости запишется функция createLogger вместе с телом самой функции
2) строки 2 - 7 пропускаются
3) на 8й строке в глобальную область видимости запишутся var logger1, var logger2 со значениями undefined
4) на 11 строке запустится функция createLogger с параметром "Hello world"
5) на 1й строке в область видимости функции createLogger запишется var messagePrefix со значением undefined и var message со значением "Hello world"
6) на 2й строке в var messagePrefix запишется значение "LOG"
7) на 3й строке запустится анонимная функция в область видимости которой запишется var messagePrefix и var message в котрых будут ссылки на внешний объект переменных
8) console.log выведет LOGHello world
9) на 12й строке запустится функция createLogger с параметром "Hi there"
10) на 1й строке в область видимости функции createLogger запишется var messagePrefix со значением undefined и var message со значением "Hi there"
11) произойдет тоже самое что на строках 6, 7
12) console.log выведет LOGHi there

в фунции которую возвращает createLogger происходит замыкание, поэтому logger1() и logger2() не перезаписываются.
 */

function sum(x) {
    return function(y) {
       return (x + y);
    }
};

console.log(sum(4)(4));

function createStorage() {
    var sum = 0;

    return function storage (number) {
        sum += number;

        return (sum);
    }
};

var storage = createStorage();

console.log(storage(1));
console.log(storage(2));
console.log(storage(3));

var storage = {

  number: 0,

  add: function (x) {
    return this.number += x;
  },

  sub: function (x) {
    return this.number -= x;
  },

  mult: function (x) {
    return this.number *= x;
  },

  div: function (x) {
    return this.number /= x;
  },

  get: function () {
    return this.number;
  },

  set: function (x) {
    return this.number = x;
  }
};

function createStorage() {
    return (storage);
};

console.log(storage.add(6));
console.log(storage.sub(2));
console.log(storage.mult(5));
console.log(storage.div(4));
console.log(storage.get());
console.log(storage.set(2));
console.log(storage.add(10));