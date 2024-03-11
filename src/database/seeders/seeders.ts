import bcrypt from "bcrypt";

import { Role } from "../../models/Role";
import { User } from "../../models/User";
import { AppDataSource } from "../db";
import { Service } from "../../models/Service";
import { Appoinment } from "../../models/Appointment";



const roleSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
  
      const roleUser = new Role();
      roleUser.id = 1;
      roleUser.name = "user"
      await roleUser.save();
  
      const roleAdmin = new Role();
      roleAdmin.id = 2;
      roleAdmin.name = "admin"
      await roleAdmin.save();
  
      const roleSuperAdmin = new Role();
      roleSuperAdmin.id = 3;
      roleSuperAdmin.name = "super_admin"
      await roleSuperAdmin.save();
  
      console.log('---------------------------------------');
      console.log('Los roles se han guardado correctamente');
      console.log('---------------------------------------');
    } catch (error) {
      console.log(error);
    } finally {
      await AppDataSource.destroy()
    }
  }

 

  //USUARIOS
  const userSeedDatabase = async () => {
try {
    await AppDataSource.initialize();
    const user = new User();
    user.first_name = "user"
    user.email = "user@user.com"

    user.role = new Role();
    user.role.id = 1

    user.password = bcrypt.hashSync("123456", 6)
    await user.save();

    const userAdmin = new User();
    userAdmin.first_name = "admin"
    userAdmin.email = "admin@admin.com"

    userAdmin.role = new Role();
    userAdmin.role.id = 2

    userAdmin.password = bcrypt.hashSync("123456", 6)
    await userAdmin.save();

    const userSuperAdmin = new User();
    userSuperAdmin.first_name = "superadmin"
    userSuperAdmin.email = "superadmin@superadmin.com"
    userSuperAdmin.role = new Role();
    userSuperAdmin.role.id = 3
    userSuperAdmin.password = bcrypt.hashSync("123456", 6)
    await userSuperAdmin.save();

    const andreu = new User
    andreu.first_name = "andreu"
    andreu.email = "andreu@andreu.com"

    andreu.role = new Role();
    andreu.role.id = 1

    andreu.password = bcrypt.hashSync("123456", 6)
    await andreu.save();

    const ana = new User
    ana.first_name = "andreu"
    ana.email = "ana@ana.com"

    ana.role = new Role();
    ana.role.id = 1

    ana.password = bcrypt.hashSync("123456", 6)
    await ana.save();

    const claudia = new User
    claudia.first_name = "claudia"
    claudia.email = "claudia@claudia.com"

    claudia.role = new Role();
    claudia.role.id = 1

    claudia.password = bcrypt.hashSync("123456", 6)
    await claudia.save();

    const leonor = new User
    leonor.first_name = "leonor"
    leonor.email = "leonor@leonor.com"

    leonor.role = new Role();
    leonor.role.id = 1

    leonor.password = bcrypt.hashSync("123456", 6)
    await leonor.save();

    const amadeo = new User
    amadeo.first_name = "amadeo"
    amadeo.email = "amadeo@amadeo.com"

    amadeo.role = new Role();
    amadeo.role.id = 1

    amadeo.password = bcrypt.hashSync("123456", 6)
    await amadeo.save();

    
    console.log('------------------------------------------');
    console.log('Los usuarios se han guardado correctamente');
    console.log('------------------------------------------');

} catch (error) {
    
 } finally {
    await AppDataSource.destroy()
  }

  }
//SERVICIOS
  const serviceSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
  
      const service1 = new Service();
      service1.serviceName = "Tatuajes del cátalogo"
      service1.description = "Los clientes tendrán la libertad de seleccionar motivos y diseños únicos, personalizando completamente su experiencia de tatuaje de acuerdo a sus preferencias y gustos."
      await service1.save()
  
      const service2 = new Service();
      service2.serviceName = "Tatuajes del cátalogo"
      service2.description = "Ofrecemos la realización de tatuajes basados en diseños predefinidos en nuestro catálogo. Los clientes pueden elegir entre una variedad de opciones estilizadas y probadas."
      await service2.save()
  
      const service3 = new Service();
      service3.serviceName = "Restauración y rejuvenecimiento de trabajos"
      service3.description = "Ofrecemos la realización de tatuajes basados en diseños predefinidos en nuestro catálogo. Los clientes pueden elegir entre una variedad de opciones estilizadas y probadas."
      await service3.save()
  
      const service4 = new Service();
      service4.serviceName = "Colocación de piercings y dilatadores"
      service4.description = "Ofrecemos servicios profesionales para la colocación de piercings y dilatadores. Nuestro equipo garantiza procedimientos seguros y estilos variados para satisfacer las preferencias individuales de nuestros clientes."
      await service4.save()
  
      const service5 = new Service();
      service5.serviceName = "Venta de piercings y otros artículos"
      service5.description = "Además de nuestros servicios de aplicación, ofrecemos una selección de piercings y otros artículos relacionados con el arte corporal. Los clientes pueden adquirir productos de calidad para complementar su estilo único."
      await service5.save()
  
      console.log('------------------------------------------');
      console.log('Los servicios se han guardado correctamente');
      console.log('------------------------------------------');
  
    } catch (error) {
      console.log(error);
    } finally {
      await AppDataSource.destroy()
    }
  }

  //CITAS
  const appointmentsSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
  
      const appointment1 = new Appoinment();
      appointment1.user = new User()
      appointment1.user.id = 48;
      appointment1.service = new Service()
      appointment1.service.id = 25
      appointment1.appointmentDate = new Date("2024-04-03");
      await appointment1.save()
  

      
  
      console.log('------------------------------------------');
      console.log('Las citas se han guardado correctamente');
      console.log('------------------------------------------');
  
    } catch (error) {
      console.log(error);
    } finally {
      await AppDataSource.destroy()
    }
  }

  const launchSeeder = async () => {
    await roleSeedDatabase();
    await userSeedDatabase();
    await serviceSeedDatabase()
    await appointmentsSeedDatabase()
  }
  
  launchSeeder();
  
 