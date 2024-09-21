import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Ensure the path is correct

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
