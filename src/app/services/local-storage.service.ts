import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Set a value in local storage
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Get a value from local storage
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Remove a value from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all items from local storage
  clear(): void {
    localStorage.clear();
  }
}

// ## USAGE ## 

// import { Component } from '@angular/core';
// import { LocalStorageService } from './local-storage.service';

// @Component({
//   selector: 'app-root',
//   template: `
//     <button (click)="saveToLocalStorage()">Save to Local Storage</button>
//     <button (click)="retrieveFromLocalStorage()">Retrieve from Local Storage</button>
//   `,
// })
// export class AppComponent {
//   constructor(private localStorageService: LocalStorageService) {}

//   saveToLocalStorage() {
//     this.localStorageService.setItem('myKey', 'Hello, Local Storage!');
//   }

//   retrieveFromLocalStorage() {
//     const value = this.localStorageService.getItem('myKey');
//     console.log(value);
//   }
// }