// Script Include for fetching Incident details

var incidentDetails = Class.create();
incidentDetails.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getAssignments: function () {

        var gr = new GlideRecord('incident');
        gr.addQuery('assigned_to', this.getParameter('sys_parm_assigned_to'));
        gr.query();

        return gr.getRowCount();
    },

    type: 'incidentDetails'
});

// Client Script for getting and displaying needed data

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var ga = new GlideAjax('incidentDetails');
    ga.addParam('sysparm_name', 'getAssignments');
    ga.addParam('sys_parm_assigned_to', g_form.getValue('assigned_to'));
    ga.getXMLAnswer(fetchCount);

    function fetchCount(response) {
        g_form.setValue('u_assignments', response);
    }

}