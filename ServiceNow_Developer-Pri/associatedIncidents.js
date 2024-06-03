// Counting associated incidents to a problem

(function executeRule(current, previous /*null when async*/) {

    var gr = new GlideRecord('problem');

    gr.addQuery('sys_id', current.problem_id);
    gr.query();

    if (gr.next()) {
        gr.u_associate_incidents_count += 1;
    }

    gr.update();

})(current, previous);