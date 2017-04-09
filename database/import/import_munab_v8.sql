
LOAD DATA INFILE '/Users/juan-pabloandresbarahonaaravena/dev/NodeJs/MinutasOnlineV2/database/import/Status.csv'
INTO TABLE munab_v8.Status
FIELDS TERMINATED BY ';';

LOAD DATA INFILE '/Users/juan-pabloandresbarahonaaravena/dev/NodeJs/MinutasOnlineV2/database/import/Rol.csv'
INTO TABLE munab_v8.Rol
FIELDS TERMINATED BY ';';

LOAD DATA INFILE '/Users/juan-pabloandresbarahonaaravena/dev/NodeJs/MinutasOnlineV2/database/import/Usuario.csv'
INTO TABLE munab_v8.Usuario
FIELDS TERMINATED BY ';';

LOAD DATA INFILE '/Users/juan-pabloandresbarahonaaravena/dev/NodeJs/MinutasOnlineV2/database/import/Proyecto.csv'
INTO TABLE munab_v8.Proyecto
FIELDS TERMINATED BY ';';

LOAD DATA INFILE '/Users/juan-pabloandresbarahonaaravena/dev/NodeJs/MinutasOnlineV2/database/import/Reunion.csv'
INTO TABLE munab_v8.Reunion
FIELDS TERMINATED BY ';';

LOAD DATA INFILE '/Users/juan-pabloandresbarahonaaravena/dev/NodeJs/MinutasOnlineV2/database/import/Usuarioproyecto.csv'
INTO TABLE munab_v8.Usuarioproyecto
FIELDS TERMINATED BY ';';

LOAD DATA INFILE '/Users/juan-pabloandresbarahonaaravena/dev/NodeJs/MinutasOnlineV2/database/import/Usuarioreunion.csv'
INTO TABLE munab_v8.Usuarioreunion
FIELDS TERMINATED BY ';';