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

---

**Decorator** Labels to add additional functionalities to a class or method.

---

**Add new functionality**
1) Create the module
2) Create the controller. The argument of the controller label is used as the base route. 
3) Define methods. Use labels to define validations and body or route params.
