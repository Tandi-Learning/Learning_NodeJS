var task = require('./task');

var observableTask = require('./observable-task')

var services = require('./observer-services');

var myTask = new observableTask(
    {
        name: 'create a demo for constructors',
        user: 'john'
    });


var notificationSvc = new services.notificationService();
var loggingSvc = new services.loggingService();
var auditingSvc = new services.auditingService();

myTask.addObserver(notificationSvc.update);
myTask.addObserver(loggingSvc.update);
myTask.addObserver(auditingSvc.update);

myTask.save();

myTask.removeObserver(auditingSvc.update);

myTask.save();