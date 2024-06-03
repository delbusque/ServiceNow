// Client callable Script Include for referencing Assigned To groups membering

var assigneGroup = Class.create();
assigneGroup.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getNames: function (username) {
        if (username) {

            var groups = [];

            var gr = new GlideRecord('sys_user_grmember');
            gr.addQuery('user', username);
            gr.query();

            while (gr.next()) {
                groups.push(gr.getValue('group'));
            }

            return 'sys_idIN' + groups.toString();
        }
    },

    type: 'assigneGroups'
});

// Reference Qualifier in Dictionary Entry Override for assignement_group in Incidents table (extended from Tasks table)

javascript: new assigneGroup().getNames(current.assigned_to)

