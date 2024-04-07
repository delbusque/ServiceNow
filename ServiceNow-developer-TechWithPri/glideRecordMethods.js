var incRecords = new GlideRecord('incident');

incRecords.addEncodedQuery('caller_idSTARTSWITHD^priorityIN1,2,3');

incRecords.setLimit(5);
incRecords.orderBy('short_description');

incRecords.query();

while (incRecords.next()) {
    gs.info(incRecords.number + ' - ' + incRecords.short_description);
}