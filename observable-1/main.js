var task = require('./task');

var observableTask = require('./observable-task')

var notificationService = require('./observer-services');
var auditingService = require('./observer-services');
var loggingService = require('./observer-services');

var myTask = new observableTask(
    {
        name: 'create a demo for constructors',
        user: 'john'
    });


var notificationSvc = notificationService;
var loggingSvc = loggingService;
var auditingSvc = auditingService;

myTask.addObserver(notificationSvc.update);
myTask.addObserver(loggingSvc.update);
myTask.addObserver(auditingSvc.update);

myTask.save();

// myTask.removeObserver(auditingSvc.update);

// myTask.save();