var notificationService = function () {
    var message = 'Notifying .. ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};

var loggingService = function () {
    var message = 'Logging .. ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};

var auditingService = function () {
    var message = 'Auditing .. ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};

module.exports = {
    notificationService: notificationService,
    loggingService: loggingService,
    auditingService: auditingService    
}