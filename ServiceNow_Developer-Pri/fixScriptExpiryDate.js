// Update expiry date as 2+ months from creation date for P1 incidents with Fix Script

var gr = new GlideRecord('incident');
gr.addQuery('priority', 1);
gr.query();

while (gr.next()) {
    var gdt = new GlideDateTime(gr.sys_created_on);
    gdt.addMonthsUTC(2);
    gr.setValue('u_expiry_date', gdt);
    gr.autoSysFields(false);
    gr.update();
}

// Could rollback from sys_rollback_context table