**Controller:** Manages http methods. It needs to call services' methods.

  

E.g: Gets, post are exposed in that route and call these services

  

**Service:** Bussiness logic methods.

E.g: remove/create users in a repo by calling these functions

  

**Entity:** Defines structured data entities. Manages repositories automatically.

E.g: An user has id, name and password

  

**Module directory:** Groups related controllers, services and entities.

E.g: Person controller, person service and entity are in the same folder.

  

**Module**: Defines how to handle dependencies and what controllers will be used.

E.g: If someone requires a service, that specific instance is going to be given.

**DTO**: Classes that

---

**Decorator** Labels to add additional functionalities to a class or method.

---

**Add new functionality**
1) Create the module
2) Create the controller. The argument of the controller label is used as the base route. 
3) Define methods. Use labels to define validations and body or route params.
4) Create entity
5) Create DTOs
6) Create service and inject the repository




---

**Run Data Base:** 
```
docker compose up -d
```
This file needs to give pgadmin permissions.
sudo docker exec --user root pgadmin4_container chown pgadmin /var/lib/pgadmin

Sign in in pg-admin. You can use the user postgres and the db_password. The hostname must be db(the service), because pgadmin and the db are in the same server. In psql you use localhost

---

**Nest database association**
App module.


**Authentication**
Auth module uses User entity and usersService. We specify these importations in the file. Users module class also sasys that users service is exported. 

**JWT strategy:** Implements the token validation and signing methods.

**Auth module:** Specify dependency injection in token signing. 

**Role guard:** After