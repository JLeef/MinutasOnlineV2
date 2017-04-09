INSERT INTO `munab_v8`.`proyecto` (`Id`, `FechaIni`, `FechaFin`, `Titulo`, `Descripcion`) VALUES ('1', '2017-04-07', '9999-12-31', 'Test Titulo', NULL);
/*Proyecto */
INSERT INTO `munab_v8`.`reunion` (`Id`, `ProyectoId`, `FechaIni`, `FechaFin`, `MinAsistencia`, `Sede`, `Descripcion`, `StatusId`) VALUES (NULL, '0', '2017-04-07 00:00:00', '9999-12-31 00:00:00', '4', 'Universidad', NULL, '01');
/*Reunion */
INSERT INTO `munab_v8`.`usuarioreunion` (`UsuarioId`, `ReunionId`, `RolId`, `Asistencia`, `Descripcion`) VALUES ('LIDER', '8', '01', '', NULL);
INSERT INTO `munab_v8`.`usuarioreunion` (`UsuarioId`, `ReunionId`, `RolId`, `Asistencia`, `Descripcion`) VALUES ('RESPONSABLE', '8', '02', '', NULL);
INSERT INTO `munab_v8`.`usuarioreunion` (`UsuarioId`, `ReunionId`, `RolId`, `Asistencia`, `Descripcion`) VALUES ('FUNCIONARIO', '8', '03', '', NULL);