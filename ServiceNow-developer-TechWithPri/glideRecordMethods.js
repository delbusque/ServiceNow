var incRecords = new GlideRecord('incident');

incRecords.addEncodedQuery('caller_idSTARTSWITHD^priorityIN1,2,3');

incRecords.setLimit(5);
incRecords.orderBy('short_description');

incRecords.query();

while (incRecords.next()) {
    gs.info(incRecords.number + ' - ' + incRecords.short_description);
}

// Adding new record

incRecords.initialize();
incRecords.caller_id = "Abel Tuter";
incRecords.short_description = 'Testing purpose 2';
var test = incRecords.insert();
gs.info(test);

// Updating a record with if logic

incRecords.addQuery('short_description', 'CONTAINS', 'hey test');
incRecords.query();

// while(incRecords.next()){
// 	incRecords.short_description = 'Hey test me';
// 	incRecords.update();
// }

if (incRecords.hasNext()) {
    incRecords.short_description = 'Hey test me';
    incRecords.updateMultiple();
}

// Updating a record or records with setValue method
incRecords.addQuery('short_description', 'CONTAINS', 'test');
incRecords.setValue('short_description', 'ServiceNow Tester');
incRecords.updateMultiple();

