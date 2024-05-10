// get Caller incidents // ScriptInclude

var getCallerIncidents = Class.create();
getCallerIncidents.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getIncidents: function () {
        var incArr = [];

        var gr = new GlideRecord('incident');
        gr.addQuery('caller_id', this.getParameter('sysparm_user_id'));
        gr.query();

        while (gr.next()) {
            var inc = {};
            inc.number = gr.number.toString();
            inc.priority = gr.priority.getDisplayValue();
            inc.short_desc = gr.short_description.toString();

            incArr.push(inc);
        }

        return JSON.stringify(incArr);
    },

    type: 'getCallerIncidents'
});

// Client Script when changing the incident`s Caller

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var result = [];

    var ga = new GlideAjax('getCallerIncidents');
    ga.addParam('sysparm_name', 'getIncidents');
    ga.addParam('sysparm_user_id', g_form.getValue('caller_id'));
    ga.getXMLAnswer(fetchInc);

    function fetchInc(response) {

        var data = JSON.parse(response);

        data.forEach(function (inc) {
            result.push(inc.number + ' -> ' + inc.priority + '\n' + inc.short_desc + '\n');
        });

        g_form.setValue('description', result.join('\n'));
    }
}