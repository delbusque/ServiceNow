var id = 1;

for (var team = 1; team <= 5; team++) {
  for (var person = 1; person <= 4; person++) {
    gs.info('Person ' + id + ' from ' + team)
    ++id;
  }

}

