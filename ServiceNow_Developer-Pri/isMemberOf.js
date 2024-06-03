// Checking if the logged in user is member of the current assignment group. Could use g_scratchpad in Client script when necessary

g_scratchpad.isMember = gs.getUser().isMemberOf(current.assignment_group);

