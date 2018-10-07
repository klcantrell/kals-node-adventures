function init() {
  class Greeter {
    greeting: string;

    constructor(greeting: string) {
      this.greeting = greeting;
    }
    greet() {
      alert(this.greeting);
    }
  }

  const greeter = new Greeter('hello there');

  const testBtn = document.getElementById('testBtn');
  testBtn.addEventListener('click', () => {
    greeter.greet();
  });
}

init();
