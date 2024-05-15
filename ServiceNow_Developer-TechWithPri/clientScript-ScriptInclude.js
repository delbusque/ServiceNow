// Script Include for fetching Incident details

var incidentDetails = Class.create();
incidentDetails.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getAssignments: function () {

        var gr = new GlideRecord('incident');
        gr.addQuery('assigned_to', this.getParameter('sys_parm_assigned_to'));
        gr.query();

        return gr.getRowCount();
    },
    autoAssignTo: function () {
        var members = [];

        var gr = new GlideRecord('sys_user_grmember');
        gr.addQuery('group', this.getParameter('sysparm_assignment_group'));
        gr.query();

        while (gr.next()) {
            members.push(gr.user.toString());
        }

        return JSON.stringify(members[Math.floor(Math.random() * members.length)]);
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