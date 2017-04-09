/*View structure between Usuario Reunión */

DROP VIEW IF EXISTS `V_UsuarioReunion`;

CREATE VIEW V_UsuarioReunion
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