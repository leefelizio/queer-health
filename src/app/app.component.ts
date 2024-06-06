import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import '@khmyznikov/pwa-install';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, IonApp, IonRouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent {}