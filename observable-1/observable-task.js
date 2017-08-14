var task = require('./task');
var observerList = require('./observer-list')

var observableTask = function(data) {
    task.call(this, data);
    this.observers = new observerList();
}

observableTask.prototype.addObserver = function(observer) {
    this.observers.add(observer);
};

observableTask.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
}

observableTask.prototype.notify = function(context) {
    var count = this.observers.count();
    for (var i = 0; i < count; i++) {
        var observer = this.observers.get(i)(context);
    }
}

observableTask.prototype.save = function() {
    this.notify(this);
    task.prototype.save.call(this);
}

module.exports = observableTask;