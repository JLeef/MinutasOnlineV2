/*
SQLyog Community v12.09 (32 bit)
MySQL - 5.7.14 : Database - munab_v8
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`munab_v8` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `munab_v8`;

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `Usuario`;

CREATE TABLE `Usuario` (
  `Id` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `RolId` varchar(45) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  `Telefono` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Firma` longblob NOT NULL,
  `Foto` longblob DEFAULT NULL,
  `StatusId` varchar(2) NOT NULL,
  PRIMARY KEY (`Id`,`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `proyecto` */

DROP TABLE IF EXISTS `Proyecto`;

CREATE TABLE `Proyecto` (
  `Id` int(11) NOT NULL,
  `FechaIni` date NOT NULL,
  `FechaFin` date NOT NULL,
  `Titulo` varchar(45) NOT NULL,
  `Descripcion` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`Id`,`FechaIni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/*Table structure for table `reunion` */

DROP TABLE IF EXISTS `Reunion`;

CREATE TABLE `Reunion` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ProyectoId` int(11) NOT NULL,
  `FechaIni` datetime NOT NULL,
  `FechaFin` datetime NOT NULL,
  `MinAsistencia` varchar(45) NOT NULL,
  `Sede` varchar(45) NOT NULL,
  `Descripcion` varchar(250) DEFAULT NULL,
  `StatusId` varchar(2) NOT NULL,
  PRIMARY KEY (`Id`,`ProyectoId`,`FechaIni`),
  KEY `fk_REUNION_PROYECTO1_idx` (`ProyectoId`),
  CONSTRAINT `fk_REUNION_PROYECTO1` FOREIGN KEY (`ProyectoId`) REFERENCES `proyecto` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `usuarioproyecto` */

DROP TABLE IF EXISTS `Usuarioproyecto`;

CREATE TABLE `Usuarioproyecto` (
  `UsuarioId` varchar(45) NOT NULL,
  `ProyectoId` int(11) NOT NULL,
  `FechaIni` date NOT NULL,
  `FechaFin` date NOT NULL,
  `RolId` varchar(2) NOT NULL,
  `StatusId` varchar(2) NOT NULL,
  PRIMARY KEY (`UsuarioId`,`ProyectoId`,`FechaIni`),
  KEY `fk_USUARIOPROYECTO_PROYECTO1_idx` (`ProyectoId`),
  CONSTRAINT `fk_USUARIOPROYECTO_PROYECTO1` FOREIGN KEY (`ProyectoId`) REFERENCES `proyecto` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_USUARIOPROYECTO_USUARIO1` FOREIGN KEY (`UsuarioId`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `usuarioreunion` */

DROP TABLE IF EXISTS `Usuarioreunion`;

CREATE TABLE `Usuarioreunion` (
  `UsuarioId` varchar(45) NOT NULL,
  `ReunionId` int(11) NOT NULL,
  `RolId` varchar(2) NOT NULL,
  `Asistencia` varchar(45) NOT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`UsuarioId`,`ReunionId`),
  KEY `fk_USUARIOREUNION_REUNION1_idx` (`ReunionId`),
  CONSTRAINT `fk_USUARIOREUNION_REUNION1` FOREIGN KEY (`ReunionId`) REFERENCES `reunion` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_USUARIOREUNION_USUARIO1` FOREIGN KEY (`UsuarioId`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

/*Table structure for table `acta` */

DROP TABLE IF EXISTS `Acta`;

CREATE TABLE `Acta` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UsuarioId` varchar(45) NOT NULL,
  `ReunionId` int(11) NOT NULL,
  `FechaIni` date NOT NULL,
  `FechaFin` date NOT NULL,
  `Titulo` varchar(45) NOT NULL,
  `StatusId` varchar(2) NOT NULL,
  PRIMARY KEY (`Id`,`UsuarioId`,`ReunionId`,`FechaIni`),
  KEY `fk_ACTA_USUARIOREUNION1_idx` (`UsuarioId`,`ReunionId`),
  CONSTRAINT `fk_ACTA_USUARIOREUNION1` FOREIGN KEY (`UsuarioId`, `ReunionId`) REFERENCES `usuarioreunion` (`UsuarioId`, `ReunionId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `agenda` */

DROP TABLE IF EXISTS `Agenda`;

CREATE TABLE `Agenda` (
  `ActaId` int(11) NOT NULL,
  `UsuarioResponsableId` int(11) NOT NULL,
  `FechaIni` date NOT NULL,
  `FechaFin` date NOT NULL,
  `Orden` varchar(45) NOT NULL,
  `Desarrollo` varchar(250) DEFAULT NULL,
  `StatusId` varchar(2) NOT NULL,
  PRIMARY KEY (`ActaId`,`UsuarioResponsableId`,`FechaIni`),
  KEY `fk_AGENDA_ACTA1_idx` (`ActaId`),
  CONSTRAINT `fk_AGENDA_ACTA1` FOREIGN KEY (`ActaId`) REFERENCES `acta` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `minuta` */

DROP TABLE IF EXISTS `Minuta`;

CREATE TABLE `Minuta` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UsuarioId` varchar(45) NOT NULL,
  `ReunionId` int(11) NOT NULL,
  `FechaIni` date NOT NULL,
  `FechaFin` date NOT NULL,
  `Titulo` varchar(45) NOT NULL,
  `Asunto` varchar(45) NOT NULL,
  `Sede` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`,`UsuarioId`,`ReunionId`,`FechaIni`),
  KEY `fk_MINUTA_USUARIOREUNION1_idx` (`UsuarioId`,`ReunionId`),
  CONSTRAINT `fk_MINUTA_USUARIOREUNION1` FOREIGN KEY (`UsuarioId`, `ReunionId`) REFERENCES `usuarioreunion` (`UsuarioId`, `ReunionId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `compromiso` */

DROP TABLE IF EXISTS `Compromiso`;

CREATE TABLE `Compromiso` (
  `ActaId` int(11) NOT NULL,
  `UsuarioResponsableId` int(11) NOT NULL,
  `FechaIni` date NOT NULL,
  `FechaFin` date NOT NULL,
  `Desarrollo` varchar(250) DEFAULT NULL,
  `StatusId` varchar(2) NOT NULL,
  PRIMARY KEY (`ActaId`,`UsuarioResponsableId`,`FechaIni`),
  KEY `fk_COMPROMISO_ACTA1_idx` (`ActaId`),
  CONSTRAINT `fk_COMPROMISO_ACTA1` FOREIGN KEY (`ActaId`) REFERENCES `acta` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `compromisominuta` */

DROP TABLE IF EXISTS `Compromisominuta`;

CREATE TABLE `Compromisominuta` (
  `MinutaId` int(11) NOT NULL,
  `UsuarioResponsableId` int(11) NOT NULL,
  `FechaIni` date NOT NULL,
  `FechaFin` date NOT NULL,
  `StatusId` varchar(2) NOT NULL,
  `Desarrollo` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`MinutaId`,`UsuarioResponsableId`,`FechaIni`),
  KEY `fk_COMPROMISOMINUTA_MINUTA1_idx` (`MinutaId`),
  CONSTRAINT `fk_COMPROMISOMINUTA_MINUTA1` FOREIGN KEY (`MinutaId`) REFERENCES `minuta` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `informe` */

DROP TABLE IF EXISTS `Informe`;

CREATE TABLE `Informe` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ProyectoId` int(11) NOT NULL,
  `FechaIni` date NOT NULL,
  `FechaFin` date NOT NULL,
  `TituloInforme` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`,`ProyectoId`,`FechaIni`),
  KEY `fk_INFORME_PROYECTO1_idx` (`ProyectoId`),
  CONSTRAINT `fk_INFORME_PROYECTO1` FOREIGN KEY (`ProyectoId`) REFERENCES `proyecto` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/*Table structure for table `objetivogeneral` */

DROP TABLE IF EXISTS `Objetivogeneral`;

CREATE TABLE `Objetivogeneral` (
  `Id` int(11) NOT NULL,
  `InformeId` int(11) NOT NULL,
  `ObjetivoGeneral` varchar(45) NOT NULL,
  `Desarrollo` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`Id`,`InformeId`),
  KEY `fk_OBJETIVOGENERAL_INFORME1` (`InformeId`),
  CONSTRAINT `fk_OBJETIVOGENERAL_INFORME1` FOREIGN KEY (`InformeId`) REFERENCES `informe` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/*Table structure for table `objetivoespec` */

DROP TABLE IF EXISTS `Objetivoespec`;

CREATE TABLE `Objetivoespec` (
  `Id` int(11) NOT NULL,
  `ObjectivoGeneralId` int(11) NOT NULL,
  `ObjetivoEspec` varchar(45) NOT NULL,
  `Desarrollo` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`Id`,`ObjectivoGeneralId`),
  KEY `fk_OBJETIVOESPEC_OBJETIVOGENERAL1_idx` (`ObjectivoGeneralId`),
  CONSTRAINT `fk_OBJETIVOESPEC_OBJETIVOGENERAL1` FOREIGN KEY (`ObjectivoGeneralId`) REFERENCES `objetivogeneral` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `rol` */

DROP TABLE IF EXISTS `Rol`;

CREATE TABLE `Rol` (
  `Id` varchar(2) NOT NULL,
  `Grupo` varchar(2) NOT NULL,
  `Rol` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`,`Grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `status` */

DROP TABLE IF EXISTS `status`;

CREATE TABLE `Status` (
  `Id` varchar(2) NOT NULL,
  `Grupo` varchar(2) NOT NULL,
  `Status` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`,`Grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `temario` */

DROP TABLE IF EXISTS `Temario`;

CREATE TABLE `Temario` (
  `MinutaId` int(11) NOT NULL,
  `Temario` varchar(45) NOT NULL,
  `Desarrollo` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`MinutaId`),
  KEY `fk_TEMARIO_MINUTA1_idx` (`MinutaId`),
  CONSTRAINT `fk_TEMARIO_MINUTA1` FOREIGN KEY (`MinutaId`) REFERENCES `minuta` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Views*/

/*View structure between Usuario Reunión */

DROP VIEW IF EXISTS `V_Usuarioreunion`;

CREATE VIEW V_Usuarioreunion
AS SELECT 
  UReunion.UsuarioId UsuarioId,
  Usuario.Nombre Nombre,
  UReunion.RolId RolId,
  Rol.Rol Rol,
  Proyecto.Id ProyectoId,
  Proyecto.Titulo ProyectoTitulo
FROM 
  munab_v8.Rol Rol,
  munab_v8.Reunion Reunion,
  munab_v8.Proyecto Proyecto,
  munab_v8.Usuarioreunion UReunion,
  munab_v8.Usuario Usuario
WHERE Rol.Id = UReunion.RolId
and Rol.Grupo = '2'
and Usuario.Id = UsuarioId
GROUP BY UsuarioId;

/*Imports*/

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