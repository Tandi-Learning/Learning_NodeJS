var task = require('./task');
var notificationService = require('./observers');
var loggingService = require('./observers');
var auditingService = require('./observers');

var task_1 = new task(
    {
        name: 'create a demo for constructors',
        user: 'john'
    });

var ns = new notificationService();
var ls = new loggingService();
var as = new auditingService();


task_1.save();