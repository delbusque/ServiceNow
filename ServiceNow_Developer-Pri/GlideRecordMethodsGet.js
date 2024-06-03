var gr = new GlideRecord('incident');

gr.get('0c5f3cece1b12010f877971dea0b1449');
gs.info(gr.number);

gr.get('number', 'INC0010004');
gs.info(gr.short_description);

gr.get('priority', 1);
while (gr.next()) {
    gs.info(gr.number);
}