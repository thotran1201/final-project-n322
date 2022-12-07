import { Component } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  currentQuestion = window.localStorage.getItem("question");
  items: any[] = this.currentQuestion !== null ? JSON.parse(this.currentQuestion) : [];
  count = this.items.length > 0 ? this.items.length : 0
  constructor() {
  }

  setData(question: IonInput) {
    var userquestion = question.value ? question.value.toString(): "";
    
    if(userquestion.length > 0) {
      this.items.push({number: this.count, question: userquestion})
      // window.localStorage.setItem(this.count.toString(),userquestion);
      console.log(this.items)
      window.localStorage.setItem("question", JSON.stringify(this.items))
      this.count++;
    }
    else {
      alert("Please enter a question.")
    }
  }

  getData() {
    console.log("get");
  }

  updateData(index: number, question: IonInput) {
    var updatequestion = question.value ? question.value.toString(): "";
    let updateSpot = -1;
    if(updatequestion.length > 0) {
      for (let item of this.items) {
        if(item.number === index) {
          updateSpot = index
          break;
        }
      }
      if(updateSpot > -1) {
        let item = {number: updateSpot, question: updatequestion};
        this.deleteData(updateSpot)
        this.items.splice(updateSpot, 0, item);
        this.count = this.items.length;
      }
    }
    else {
      alert("Please enter your updated question.")
    }
    console.log("update");
    console.log(window.localStorage)
  }

  deleteData(index: number) {
    console.log(index)
    let deleteSpot = -1;
    if(this.items.length > 0) {
      for (let item of this.items) {
      if(item.number === index) {
        deleteSpot = index
        break;
      }
       
    }
    if(deleteSpot > -1) {
      this.items.splice(deleteSpot, 1);
      console.log(this.items);
      this.count = this.items.length;
      window.localStorage.setItem("question", JSON.stringify(this.items))
    }
    }
    
  }

}
