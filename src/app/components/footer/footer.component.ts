// import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonFooter, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    IonFooter,
    IonToolbar,
    IonButton,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() isValid!:boolean;
  @Input() value!:any;
  @Output() addNow: EventEmitter<any[]> = new EventEmitter();
  
  constructor(public firestoreService: FirestoreService) { 
    
  }

  addData(){
    this.firestoreService.addData(this.value)
  }

}
