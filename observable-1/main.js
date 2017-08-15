var task = require('./task');
var observableTask = require('./observable-task')
var services = require('./observer-services');

var task_1 = new observableTask({
    name: 'create a demo for constructors',
    user: 'John'
});

var task_2 = new observableTask({
    name: 'preparing material for next demo',
    user: 'Jane'
});

var notificationSvc = new services.notificationService();
var loggingSvc = new services.loggingService();
var auditingSvc = new services.auditingService();

task_1.addObserver(notificationSvc.update);
task_1.addObserver(loggingSvc.update);
task_1.addObserver(auditingSvc.update);

task_1.save();

console.log('-------------------');

task_2.addObserver(loggingSvc.update);

task_2.save();
