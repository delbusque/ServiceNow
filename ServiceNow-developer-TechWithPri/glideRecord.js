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