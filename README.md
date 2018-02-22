# WebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0-beta.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#1. In Login page:
use follow values to login:

Employer role to access "Employer Dashboard - Profiles" pages:
"email": "aaa@aaa.aaa",
"password": "aaa"

Employee role to access "Employee Dashboard - Profiles" pages:
"email": "bbb@bbb.bbb",
"password": "bbb"


#2. Notifications Online mode:
in "Dashboard - Profiles" and "Main Menu" pages,
user can see the first popup of online notification after 1 second the page load,
click "X" icon on the top right of this popup,the next popup will show.
The "X" icon is used to navigate to all popups of online notification.


#3. Steps to access the "Employee Dashboard - Profiles" and "Employer Dashboard - Profiles" pages

  1) Employer Dashboard - Profiles

     Route:
     -----------
      - /profiles

     Flow Route:
     -----------
      - In Route '/register-frame-page' selecting 'Create a business profile' and after filling all Steps it will re-direct to 'Employer Dashboard - Profiles' https://gyazo.com/49ca6cb72486f3f2761f8a56da51d579

  2) Employee Dashboard - Profiles

     Route:
     -----------
      - /employee-profile

     Flow Route:
     -----------
      - In Route '/register-frame-page' selecting 'Create an employee profile' and after filling all Steps it will re-direct to 'Employee Dashboard - Profiles https://gyazo.com/b17ead975923c765203de40f56eed2e5


#4.New page links for access the Profiles related pages:
Employer role pages:
employer-main-menu
employer-activity
employer-offices
employer-settings
employer-benches
employer-search
employer-friends
employer-profiles

Employee role pages:
employee-main-menu
employee-activity
employee-offices
employee-settings
employee-benches
employee-search
employee-friends
employee-profiles