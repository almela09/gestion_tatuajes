

USE proyecto4_gestion:
--roles

insert into roles (id, first_name) values (1, 'user');
insert into roles (id, first_name) values (2, 'admin');
insert into roles (id, first_name) values (3, 'superadmin');

--crear usuarios en el sistema 

insert into users (id, first_name,  email, password, role_id) values (1, 'user', 'user@user.com', '$2b$06$QZEAvX8Yl1P4oryG7n/fgudVVfgIUARdloMZiyV7EoSywzYN.Fwca', 1);
insert into users (id, first_name,  email, password, role_id) values (2, 'admin', 'admin@admin.com', '$2b$06$QZEAvX8Yl1P4oryG7n/fgudVVfgIUARdloMZiyV7EoSywzYN.Fwca', 2);
insert into users (id, first_name,  email, password, role_id) values (3, 'super_admin', 'superadmin@superadmin.com', '$2b$06$QZEAvX8Yl1P4oryG7n/fgudVVfgIUARdloMZiyV7EoSywzYN.Fwca', 3);

--