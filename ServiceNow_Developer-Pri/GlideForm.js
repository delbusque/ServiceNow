function onLoad() {
    var test = g_form.getDisplayBox('caller_id').value;

    if (test == 'Abel Tuter') {
        g_form.addOption('category', 'tech', 'Tech');
        // g_form.removeOption('tech');
        g_form.setMandatory('category', true);
        g_form.setReadOnly('subcategory', true);
        g_form.setLabelOf('description', 'Issue Description');
        g_form.getElement('impact').style.background = 'lightblue';
        g_form.hideRelatedList('task_ci');
    }
}