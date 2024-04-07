var incidentRecord = new GlideRecord('incident');

incidentRecord.addQuery('category', 'software');
incidentRecord.query();

while (incidentRecord.next()) {
    gs.info(incidentRecord.short_description);
}

gs.info(incidentRecord.getRowCount());

gs.print('*********************');

incidentRecord.addQuery('short_description', 'CONTAINS', 'email');
incidentRecord.query();

while (incidentRecord.next()) {
    gs.info(incidentRecord.short_description);
}

gs.info(incidentRecord.getRowCount());

var incRecords = new GlideRecord('incident');

incRecords.addActiveQuery();
incRecords.query();

while (incRecords.next()) {
    gs.info(incRecords.number + ' - ' + incRecords.short_description);
}