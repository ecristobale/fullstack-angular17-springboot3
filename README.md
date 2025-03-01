# FULLSTACK WEBAPP: ANGULAR 17 & SPRING BOOT 3

## DEVELOPER
 * Eduardo Cristóbal
 * Linkedin: [https://www.linkedin.com/in/ecristobale](https://www.linkedin.com/in/ecristobale)
 * GitHub: [https://github.com/ecristobale](https://github.com/ecristobale)
 * Email: [Eduardo Cristóbal - email](mailto:edu_ce_1988@hotmail.com)

## DESCRIPTION
The **goal** of this project is to provide a starter kit for a **fullstack** web application using latest versions: **Spring Boot 3** and **Angular 17+** . There are some subprojects:
 * Main project: users fullstack application
	- a frontend via Angular 19 (17+).
	- a backend via Spring Boot 3.
 * Angular applications:
	- a cart Angular 17 webapp with angular routes and redux.
	- a redux (NgRx) Angular 17 basic app.
	- a cart Angular 17 webapp with angular routes.
	- a cart Angular 17 webapp (old version). With modal.
	- an invoice Angular 17 webapp. Actions such as adding and deleting elements. 
	- a tutorial Angular 17 webapp with the basics elements: angular-tutorial.

## USERS FULLSTACK APPLICATION (SPRING BOOT 3, ANGULAR 19)

### Frontend: ANGULAR 19 (17+)
Project generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.
Project that uses:
 * Components: passing data between components and subcomponents via @Output() and @Input() annotations.
 * Angular routes: passing data between components via angular routes: 
 ```<a [routerLink]="['/mypath']" [state]="{objectData1, objectData2}"```
 and retrieving this data from the destiny component with Router: ```this.router.getCurrentNavigation()?.extras.state!['objectData1']``` and also with ActivatedRoute for request params: ```path/:myId```.
 * Services: from which they emit an event by using EventEmmiters and data could be passed by subscribing to these events.
 * HttpClient: for connecting to api, expecting an observable Object.
 * Pagination: with a subcomponent and by using [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) version 5.3 and Angular Routes to transfer page, totalPages and some metainfo retrieved from backend api.
 * Working with dates (Timestamp) using Angular Material with DatePicker.
 * Angular guards for managing roles and access to views. 
 * Angular interceptors for adding security token to api requests.
 * Customized Alert messages with SweetAlert2 library.
 * Html class styles with [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) version 5.3.
 * Used new @If and @else instead of angular directives ngIf and ngFor.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

### Backend: SPRING BOOT 3
Spring boot starter.
Project that uses:
 * Normal Spring Boot components: (Rest)Controller, Service, Repository, Entity mapped to DB tables and columns.
 * Validations for entity with Hibernate.
 * Pagination with Pageable object.
 * Spring Security JWT (JSON Web Token)
 * H2 in memory DB: with schema.sql and data.sql for configuration.
 * Api links and OK and error responses tested with Postman (collection added to the project).
 
### Screenshots:

Users view:
![Alt text](readme-screenshots/fullstack-users-01.PNG?raw=true "Users view Angular 19")

Login:
![Alt text](readme-screenshots/fullstack-users-00.PNG?raw=true "Login view Angular 19")

Login Error (Authentication failure):
![Alt text](readme-screenshots/fullstack-users-00-alert.PNG?raw=true "Login Error Authentication failure view Angular 19")

Users view - ROLE_ADMIN:
![Alt text](readme-screenshots/fullstack-users-01-admin.PNG?raw=true "Users view ROLE_ADMIN Angular 19")

Users view - ROLE_USER:
![Alt text](readme-screenshots/fullstack-users-01-user.PNG?raw=true "Users view ROLE_USER Angular 19")

Forbidden 403 Denied source access - ROLE_USER:
![Alt text](readme-screenshots/fullstack-users-10-user.PNG?raw=true "Forbidden 403 Denied source access - ROLE_USER Angular 19")

Create user form:
![Alt text](readme-screenshots/fullstack-users-02.PNG?raw=true "Form create user Angular 19")

User created alert:
![Alt text](readme-screenshots/fullstack-users-03.PNG?raw=true "User created alert Angular 19")

Form update user:
![Alt text](readme-screenshots/fullstack-users-04.PNG?raw=true "Form update user Angular 19")

Remove user confirm alert:
![Alt text](readme-screenshots/fullstack-users-05.PNG?raw=true "Remove user confirm alert Angular 19")

Angular 19 Code 1:
![Alt text](readme-screenshots/fullstack-users-06.PNG?raw=true "Code 1 Angular 19")

Angular 19 Code 2:
![Alt text](readme-screenshots/fullstack-users-07.PNG?raw=true "Code 1 Angular 19")

Spring Boot 3 Code:
![Alt text](readme-screenshots/fullstack-users-08.PNG?raw=true "Code 1 Spring Boot 3")

Postman collection:
![Alt text](readme-screenshots/fullstack-users-09.PNG?raw=true "Code 1 Spring Boot 3")


 

## ANGULAR-CART (angular routes, NgRx)

Project generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.12.
Project that uses angular NgRx for managing app actions by using store and effects. Alert messages with SweetAlert2 library. Styles with [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) version 5.3.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## ANGULAR-NGRX (Redux)

Project generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.12.
Redux project that is configured to manage counter actions (increment, decrease, reset) by using store actions with props and reducer.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

NgRx code:
![Alt text](readme-screenshots/angular-ngrx-01.PNG?raw=true "Cart_old Angular 17 Components")

## ANGULAR-CART (angular routes)

Project generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.12.
Project that uses angular routes for using its basic components such as [routerLink], [state] for passing elements, <router-outlet> to display path elements. It is also created a service for emit and subscribe info for passing data across the components. It is also used sessionStorage for maintaining the elements in the Shopping Cart. Alert messages with SweetAlert2 library. Styles with [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) version 5.3.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Catalog component:
![Alt text](readme-screenshots/angular-cart-route-01.PNG?raw=true "Cart_old Angular 17 Components")

Alert element added to Shopping Cart:
![Alt text](readme-screenshots/angular-cart-route-02.PNG?raw=true "Cart_old Angular 17")

Alert displayed when trying to delete an item from Shopping Cart:
![Alt text](readme-screenshots/angular-cart-route-03.PNG?raw=true "Cart_old Angular 17 Shopping Cart Modal")

Alert element removed from Shopping Cart:
![Alt text](readme-screenshots/angular-cart-route-04.PNG?raw=true "Cart_old Angular 17 Shopping Cart hidden Div")

Shopping Cart component:
![Alt text](readme-screenshots/angular-cart-route-05.PNG?raw=true "Cart_old Angular 17 Shopping Cart hidden Div")

Code about angular routes and subscribing to an event:
![Alt text](readme-screenshots/angular-cart-route-06.PNG?raw=true "Cart_old Angular 17 Shopping Cart hidden Div")

## ANGULAR-CART (OLD)

Project generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.12.
The project is structured in one component that has some subcomponents, some of them has another subcomponents. It can be saw how the data is passed across the components in either directions. Actions such as adding and deleting elements filling a Shopping Cart that can be displayed as a hidden div or as a modal by clicking on the navbar. Values of Shopping Cart remains stored by saving them on sessionStorage. Styles with [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) version 5.3.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Components created:
![Alt text](readme-screenshots/angular-cart-old-04.PNG?raw=true "Cart_old Angular 17 Components")

Cart app:
![Alt text](readme-screenshots/angular-cart-old-01.PNG?raw=true "Cart_old Angular 17")

Shopping Cart displayed in Modal:
![Alt text](readme-screenshots/angular-cart-old-02.PNG?raw=true "Cart_old Angular 17 Shopping Cart Modal")

Shopping Cart hidden in Div:
![Alt text](readme-screenshots/angular-cart-old-03.PNG?raw=true "Cart_old Angular 17 Shopping Cart hidden Div")

## ANGULAR-INVOICE

Project generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.12.
Contains one entity formed by some others, each one of this in one component. In this project it can be see how data is passed among the components. Actions such as adding and deleting elements of a dynamic list as well as form validation with customized messages. Styles with [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) version 5.3.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

![Alt text](readme-screenshots/angular-invoice-01.PNG?raw=true "Invoice Angular 17")

## ANGULAR-TUTORIAL

Small and simple project generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.12.
Contains basic elements such as components, services, methods like OnInit and Constructor and actions such as passing data between parent component and his child. Alternative and new way with @for, @if and @else instead of *ngIf, ng-template and *ngFor. Styles with [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) version 5.3.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

![Alt text](readme-screenshots/angular-tutorial-01.PNG?raw=true "Angular 17 Tutorial")

## ANGULAR

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.12, and components added manually with NPM.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
