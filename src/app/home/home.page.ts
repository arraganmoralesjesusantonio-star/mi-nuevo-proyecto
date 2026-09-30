import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonButton, 
  IonIcon, 
  IonInput 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonLabel,
    FormsModule,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage {
  // Se recomienda usar el tipo primitivo 'string' en minúscula
  public task: string = '';
  public tasks: string[] = [];

  constructor() {
    addIcons({
      addOutline,
    });
  }

  addTask() {
    if (this.task.trim() !== '') {
      console.log(this.task);
      this.tasks.push(this.task);
      console.log('Array: ', this.tasks); // Corregido: se agregó la coma
      this.task = ''; // Limpia el input después de agregar la tarea
    }
  }
}