# FULLSTACK WEBAPP: ANGULAR 17 & SPRING BOOT 3

## DESCRIPTION
The **goal** of this project is to provide a starter kit for a **fullstack** web application using latest versions. It provides:
 * a frontend via Angular 17.
 * a backend via Spring Boot 3.
 * a redux (NgRx) Angular 17 basic app.
 * a cart Angular 17 webapp with angular routes.
 * a cart Angular 17 webapp (old version). With modal.
 * an invoice Angular 17 webapp. Actions such as adding and deleting elements. 
 * a tutorial Angular 17 webapp with the basics elements: angular-tutorial.

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
