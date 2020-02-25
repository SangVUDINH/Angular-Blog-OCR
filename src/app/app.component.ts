import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Blog-OCR';
  constructor (){
    var firebaseConfig = {
      apiKey: "AIzaSyD7k8wtIqFGwt_8ys4_sJPJ5l1apVeKZu8",
      authDomain: "blogs-95be3.firebaseapp.com",
      databaseURL: "https://blogs-95be3.firebaseio.com",
      projectId: "blogs-95be3",
      storageBucket: "blogs-95be3.appspot.com",
      messagingSenderId: "605836848936",
      appId: "1:605836848936:web:5874eb46a561646968ea1d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  // Your web app's Firebase configuration
  
}
