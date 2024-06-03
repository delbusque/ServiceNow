// Copying incident work notes to related problem 

(function executeRule(current, previous /*null when async*/) {

    var gr = new GlideRecord('problem');

    gr.addQuery('sys_id', current.problem_id);
    gr.query();

    if (gr.next()) {
        gr.work_notes = current.work_notes.getJournalEntry(1);
    }

    gr.update();

})(current, previous);