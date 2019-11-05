import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  trs = [];
  directions = ["t", "r", "b", "l"];
  data = [
    {
      question: "Question 1",
      answer: "Hello",
      length: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 2",
      answer: "World",
      length: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 3",
      answer: "Alaksanda",
      length: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 4",
      answer: "Jesus",
      length: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 5",
      answer: "Gene",
      length: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 6",
      answer: "Maria",
      length: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 7",
      answer: "Susai",
      length: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 8",
      answer: "Bibiana",
      length: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 9",
      answer: "Diana",
      length: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 10",
      answer: "Kirubai",
      length: 0,
      x: -1,
      y: -1
    }
  ];
  // answer should not exceed 10 characters
  ngOnInit() {
    this.initTrs();
    _.forEach(this.data, item => (item.length = item.answer.length));
    this.data = _.reverse(_.sortBy(this.data, "length"));
    console.log(this.data);
    this.setFirstTds();
  }

  initTrs() {
    const tds = ["", "", "", "", "", "", "", "", "", ""];

    for (let i = 0; i < 9; i++) {
      this.trs.push(tds);
    }
  }

  setFirstTds() {
    const first = this.data[0];
   
    const direction = this.directions[_.random(0, this.directions.length - 1)];
    let fits = false;
    let count = 0;
  //  do {
    //   console.log("count", count);
    //   const coordinates = this.getCoordinates();
    //   switch (direction) {
    //     case "t":
    //       break;
    //     case "r":
    //       break;
    //     case "b":
    //       break;
    //     case "l":
    //       break;
    // //   }
    //   count++;
    //   fits = fits || (count < 10);
    // } while (fits);
    console.log(this.trs)
  }

  getCoordinates(){
     let x = _.random(0, 10);
    let y = _.random(0, 10);
    if (x < 0) x = x * -1;
    if (y < 0) y = y * -1;
    return [x, y]
  }
  
}
