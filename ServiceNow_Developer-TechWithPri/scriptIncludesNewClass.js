/*
When priority of the Problem record changes to critical,
then an associate Incident will be created for the same Problem record.

The Incident should contain following info:
    - Caller Name should be logged in User name
    - Description should contain:
    1/ Problem task numbers attached to the current Problem record
    2/ Group names in which the assignee of the Problem record is part of
*/

// Business rule
(function executeRule(current, previous /*null when async*/) {
    var getInfo = new getProblemDetails();

    var gr = new GlideRecord('incident');
    gr.initialize();
    gr.problem_id = current.sys_id;

    gr.caller_id = gs.getUserID();
    gr.short_description = 'Attached problem tasks: ' + getInfo.taskNumbers(current.sys_id).join(', ') +
        ' : Groups for assignee: ' + getInfo.assigneeGroups(current.assigned_to).join(', ');

    gr.insert();

})(current, previous);

// Script Include
var getProblemDetails = Class.create();
getProblemDetails.prototype = {
    initialize: function () {
    },
    taskNumbers: function (problem_id) {
        var taskNumbers = [];
        var gr = new GlideRecord('problem_task');
        gr.addQuery('problem', problem_id);
        gr.query();
        while (gr.next()) {
            taskNumbers.push(gr.number);
        }
        return taskNumbers;
    },
    assigneeGroups: function (assign_to) {
        var groups = [];
        var gr = new GlideRecord('sys_user_grmember');
        gr.addQuery('user', assign_to);
        gr.query();
        while (gr.next()) {
            groups.push(gr.getDisplayValue('group'));
        }
        return groups;
    },

    type: 'getProblemDetails'
};
