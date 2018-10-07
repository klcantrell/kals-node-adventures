function init() {
    var Greeter = /** @class */ (function () {
        function Greeter(greeting) {
            this.greeting = greeting;
        }
        Greeter.prototype.greet = function () {
            alert(this.greeting);
        };
        return Greeter;
    }());
    var greeter = new Greeter('hello there');
    var testBtn = document.getElementById('testBtn');
    testBtn.addEventListener('click', function () {
        greeter.greet();
    });
}
init();
