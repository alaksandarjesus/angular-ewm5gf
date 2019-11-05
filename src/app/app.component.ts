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
      span: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 2",
      answer: "World",
      span: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 3",
      answer: "Alaksanda",
      span: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 4",
      answer: "Jesus",
      span: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 5",
      answer: "Gene",
      span: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 6",
      answer: "Maria",
      span: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 7",
      answer: "Susai",
      span: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 8",
      answer: "Bibiana",
      span: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 9",
      answer: "Diana",
      span: 0,
      x: -1,
      y: -1
    },
    {
      question: "Question 10",
      answer: "Kirubai",
      span: 0,
      x: -1,
      y: -1
    }
  ];
  // answer should not exceed 10 characters
  ngOnInit() {
    this.initTrs();
    _.forEach(this.data, item => (item.span = item.answer.length));
    this.data = _.reverse(_.sortBy(this.data, "span"));
    this.setFirstTds();
  }

  initTrs() {
    const tds = ["", "", "", "", "", "", "", "", "", ""];

    for (let i = 0; i < 10; i++) {
      this.trs.push(tds);
    }
  }

  setFirstTds() {
    const first = this.data[0];

    const direction:any = 'r'; //this.directions[_.random(0, this.directions.length - 1)];
    console.log("direction", direction);
    let fits = false;
    for (let i = 0; i < 10; i++) {
      const coordinates = this.getCoordinates();
      
      switch (direction) {
        case "t":
          break;
        case "r":
          if(first.span >= coordinates[1]){
              console.log("span",first.span);
              console.log(coordinates[0], coordinates[1]);
          }
          break;
        case "b":
          break;
        case "l":
          break;
      }
      
    }
  }

  getCoordinates() {
    let x = _.random(0, 10);
    let y = _.random(0, 10);
    if (x < 0) x = x * -1;
    if (y < 0) y = y * -1;
    return [x, y];
  }
}
