
LOAD DATA INFILE '/Users/juan-pabloandresbarahonaaravena/dev/NodeJs/MinutasOnlineV2/database/import/status.csv'
INTO TABLE munab_v8.status
FIELDS TERMINATED BY ';';

LOAD DATA INFILE '/Users/juan-pabloandresbarahonaaravena/dev/NodeJs/MinutasOnlineV2/database/import/rol.csv'
INTO TABLE munab_v8.rol
FIELDS TERMINATED BY ';';

LOAD DATA INFILE '/Users/juan-pabloandresbarahonaaravena/dev/NodeJs/MinutasOnlineV2/database/import/usuario.csv'
INTO TABLE munab_v8.usuario
FIELDS TERMINATED BY ';';
