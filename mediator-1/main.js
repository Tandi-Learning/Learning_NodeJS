var task = require('./task');
var mediatorTask = require('./mediator-task');
var services = require('./services');

var notificationSvc = new services.notificationService();
var loggingSvc = new services.loggingService();
var auditingSvc = new services.auditingService();

var mediator = Object.create(mediatorTask);
mediator.subscribe('complete', notificationSvc, notificationSvc.update);
mediator.subscribe('complete', loggingSvc, loggingSvc.update);

var myTask = new task({
    name: 'create a demo for mediator pattern',
    user: 'tandi sunarto'
});

myTask.complete = function() {
    mediator.publish('complete', this);
    task.prototype.complete.call(this);
};

myTask.complete();