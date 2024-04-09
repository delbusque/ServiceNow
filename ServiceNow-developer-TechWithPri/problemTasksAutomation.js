// Auto-generate problem tasks when Priority changes to 1-Critical after Update

(function executeRule(current, previous /*null when async*/) {

    var taskType = ['Root Cause Analysis', 'General'];

    for (var i = 0; i <= 1; i++) {
        var gr = new GlideRecord('problem_task');
        gr.initialize();
        gr.problem_task_type = taskType[i];
        gr.problem = current.sys_id;
        gr.short_description = current.short_description + ' - ' + taskType[i];
        gr.insert();
    }

})(current, previous);