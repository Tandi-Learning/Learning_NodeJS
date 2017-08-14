var observerList = function () {
    this.observers = [];
}
observerList.prototype.add = function (observer) {
    this.observers.push(observer)
}

observerList.prototype.get = function (index) {
    if (index >= 0 && index < this.observers.length) {
        return this.observers[index];
    }
}

observerList.prototype.removeAt = function(index) {
    this.observers.splice(index, 1);
}

observerList.prototype.indexOf = function(obj, startIndex) {
    var i = startIndex;

    while (i < this.observers.length) {
        if (this.observers[i] === obj) {
            return i;
        }
        i++;
    }

    return -1;
}

observerList.prototype.count = function() {
    return this.observers.length;
}

module.exports = observerList;