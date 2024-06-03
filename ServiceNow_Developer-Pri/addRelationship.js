// Query all incidents raised by the same caller and show in the in Related list

(function refineQuery(current, parent) {

    current.addQuery('caller_id', parent.caller_id);
    current.addQuery('sys_id', '!=', parent.sys_id)

})(current, parent);