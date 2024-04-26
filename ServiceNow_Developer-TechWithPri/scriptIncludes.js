// Updating Work Notes in related Problem from Incident 

// Business rule runs after Work notes in Incident changes

(function executeRule(current, previous /*null when async*/) {

    var workNotes = current.work_notes.getJournalEntry(1);

    updateWorkNotes(current.problem_id, workNotes);

})(current, previous);

// On Demand/Classless Script Include

function updateWorkNotes(problemID, workNotes) {

    var gr = new GlideRecord('problem');
    gr.addQuery('sys_id', problemID);
    gr.query();

    if (gr.next()) {
        gr.work_notes = workNotes;
        gr.update();
    }
}


