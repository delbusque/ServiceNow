// Client script @ [incident]

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    g_form.getReference('caller_id', changeEmail);

    function changeEmail(caller) {
        g_form.setValue('u_email', caller.email);
    }
}