import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, getDoc, query , deleteDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private readonly _firestore: Firestore) { }

    addData(value: any){
      const collRef = collection(this._firestore, `favorites-professionals`);
      const newData: any = {
        favorite: value,
        timeStamp: Date.now()
      }
      addDoc(collRef, newData);
    }

    async removeData(id: string){
      const collRef = doc(this._firestore, `favorites-professionals/${id}`);
      await deleteDoc(collRef);
    }

    loadData(){
      const refCollect = collection(this._firestore, 'favorites-professionals');
      const q = query(refCollect);
      return collectionData(q, {idField: 'id'}) as unknown as Observable<{favorite: {uuid:string, title: string}, id: string;}[]>;
    }
}
