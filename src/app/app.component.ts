import { Component,OnInit } from '@angular/core';

declare var firebase: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  names = Array();

  constructor(){
    this.names = ["j"];
  }

  ngOnInit(){
    firebase.database().ref('/main/').on('child_added',function(snapshot){
      console.log(snapshot.val())
    })
  }

  insert(){
    firebase.database().ref('/main/')
      .push({
        nat_id: '123445666677',
        first_name: 'Fabrice',
        last_name: 'Higiro',
        gender: 'M'
       
      })
  }
  get(){
    var names = [];
    firebase.database().ref('/main/').on('child_added',function(snapshot){
      console.log(snapshot.val())
      names.push(snapshot.val())  
    })

    this.names = names;
  }

}
