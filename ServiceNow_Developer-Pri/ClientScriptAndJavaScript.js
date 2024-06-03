// Client Script for counting Confirmations via check boxes in Incidents table

function onSubmit() {
    var confirmations =
        [g_form.getValue('u_confirmation_1'), g_form.getValue('u_confirmation_2')];

    var count = 0;
    confirmations.forEach(function (conf) { conf == 'true' && count++; });

    if (count < 2) {
        g_form.addErrorMessage('Please make more than one confirmation !');
        g_form.addErrorMessage(count + ' - ' + confirmations.join(', '));
        return false;
    }
}