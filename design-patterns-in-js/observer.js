function Subject() {
  this.observers = []; // array of observer functions
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => {
      if (fn != fnToRemove) return fn;
    });
  },
  fire: function () {
    this.observers.forEach((fn) => {
      fn.call();
    });
  },
};

const subject = new Subject();

function Observer1() {
  console.log("observer 1 firing!");
}

function Observer2() {
  console.log("observer 2 firing!");
}

console.log("First Call:");
subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.fire();

console.log("Second Call: ");
subject.unsubscribe(Observer1);
subject.unsubscribe(Observer2);
subject.fire();
