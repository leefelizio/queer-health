import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; 
import { provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideIonicAngular({}),
    provideFirebaseApp(() => initializeApp({ "projectId": "queerhealth-1851c", "appId": "1:235875564895:web:4a03561612b58ffe1a8aea", "storageBucket": "queerhealth-1851c.appspot.com", "apiKey": "AIzaSyBQ616Da2hH6hg3bYhXY9qEc5Qboqp5Xn4", "authDomain": "queerhealth-1851c.firebaseapp.com", "messagingSenderId": "235875564895", "measurementId": "G-ESWJLCNB9G" })),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};


