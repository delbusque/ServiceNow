// Business rule script @ [problem_task]

(function executeRule(current, previous /*null when async*/) {

    var gr = new GlideRecord('problem');
    gr.get(current.problem);

    g_scratchpad.parent = current.problem;
    g_scratchpad.short_description = gr.short_description;
    g_scratchpad.description = gr.description;
    g_scratchpad.assigned_to = gr.assigned_to;

})(current, previous);

// Client script @ [problem_task]

function onLoad() {

    if (g_scratchpad.parent) {
        g_form.setValue('short_description', g_scratchpad.short_description);
        g_form.setValue('description', g_scratchpad.description);
        g_form.setValue('assigned_to', g_scratchpad.assigned_to);
    }
}

