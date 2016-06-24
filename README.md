# Meetup Medellín JS

Angular 2 y Firebase

Angular cli permite estandarizar las aplicaciones angular siguiendo la guía de estilos de John Papa.

## Introducción

Crear proyecto en Firebase: 
```
https://console.firebase.google.com/
```

Ventajas
```
https://firebase.google.com/pricing/
```

## Prerequisitos

Instalar los siguientes módulos con npm de manera global:
```console
npm install -g angular-cli@1.0.0-beta.5
npm install -g firebase-tools
npm install broccoli-typescript-compiler --save-dev
```

## Instalación

Crear el proyecto:  
```console
ng new medjs-angularjs2-firebase
```

Cambiar a la nueva carpeta del proyecto: 
```console
cd /medjs-angularjs2-firebase
```

Instalar localmente angularfire2 : 
```console
npm install npm install angularfire2@2.0.0-beta.0 firebase@2.4.2 --save
```

Instalar Typings globales:
```console
npm install typings -g
typings install --save --global
```

Construir el proyecto:
```console
ng build
```

Añadir al main.ts:
```javascript
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

bootstrap(MedjsAngularjs2FirebaseAppComponent, [
	FIREBASE_PROVIDERS,
	defaultFirebase('https://medjs-angularjs2-firebase.firebaseio.com')
]);
```

Añadir al system-config.ts:
```javascript
/** Map relative paths to URLs. */
const map: any = {
'firebase':'vendor/firebase/lib/firebase-web.js',
'angularfire2':'vendor/angularfire2'
};

/** User packages configuration. */
const packages: any = {
  angularfire2: {
    defaultExtension: 'js',
	main: 'angularfire2.js'
  }
};
```

Modificar el componente de la aplicación (medjs-angularjs2-firebase.component):
```javascript
import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2'

@Component({
  moduleId: module.id,
  selector: 'medjs-angularjs2-firebase-app',
  templateUrl: 'medjs-angularjs2-firebase.component.html',
  styleUrls: ['medjs-angularjs2-firebase.component.css']
})
export class MedjsAngularjs2FirebaseAppComponent {
  title = 'medjs-angularjs2-firebase works!';
  list:FirebaseListObservable<any[]>;
  
  constructor(private af:AngularFire){}
  
  ngOnInit() {
    // la colección de firebase
    this.list = this.af.database.list('/asistentes');  
	// suscripción para mostrar los cambios en tiempo real (ejemplo).
	this.list.subscribe(data => {
	  console.log(data);
	});
	
  adduser(user.string) {
    this.list.push({
      name: user
	  })
  }
	
  }
  }
```

Subir el server:
```console
ng serve
````

Ingresar a:
```
http://localhost:4200/
```

Modificar el archivo medjs-angularjs2-firebase.component.html para ver en tiempo real los datos de BD firebase.
```html
<ul>
  <li *ngFor="let user of list | async">{{user.name}}</li>
</ul>
```
