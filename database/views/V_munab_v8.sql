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
  munab_v8.rol Rol,
  munab_v8.reunion Reunion,
  munab_v8.proyecto Proyecto,
  munab_v8.usuarioreunion UReunion,
  munab_v8.usuario Usuario
WHERE Rol.Id = UReunion.RolId
and Rol.Grupo = '2'
and Usuario.Id = UsuarioId
GROUP BY UsuarioId;