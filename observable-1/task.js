var task = function(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

task.prototype.save = function() {
    console.log('saving task: ' + this.name);
};

module.exports = task;