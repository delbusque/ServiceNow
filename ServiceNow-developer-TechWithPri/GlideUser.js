function onLoad() {
    g_form.addInfoMessage(g_user.firstName);
    g_form.addInfoMessage(g_user.lastName);
    g_form.addInfoMessage(g_user.userID);

    g_form.setReadOnly('description', true);

    if (g_user.hasRole('Tester 1')) {
        g_form.setReadOnly('description', false);
    }

    if (g_user.hasRoleExactly('Tester 1')) {
        g_form.setReadOnly('description', false);
    }

    if (g_user.hasRoleFromList('itil, admin')) {
        g_form.setReadOnly('service_offering', true);
    }

    if (g_user.hasRoles()) {
        g_form.getElement('urgency').style.background = 'lightgreen';
    }
}