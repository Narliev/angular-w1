import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world-2201681048';

  title1 = "1. Who am I?";
  title2 = "2. Do I have hobbies?";
  title3 = "3. Do I have favourite Youtuber?";
  title4 = "4. Do I have Youtube channel?";
  title5 = "5. If yes, what would it cost?";

  info1 = "I am Koce, simple as that!";
  info2 = "I watch Youtube!";
  info3 = "So many, but must be The Act Man!";
  info4 = "The world is not ready for this!";
  info5 = "Let's say MrBeast will ask me for tips!";

  p1 = false;
  p2 = false;
  p3 = false;
  p4 = false;
  p5 = false;

  constructor() {
    this.p1 = false;
    this.p2 = false;
    this.p3 = false;
    this.p4 = false;
    this.p5 = false;
  }

  hideAll()
  {
    this.p1 = false;
    this.p2 = false;
    this.p3 = false;
    this.p4 = false;
    this.p5 = false;
  }

  toogleInfo(num:number)
  {
    this.hideAll();
    if(num == 1) this.p1 = true;
    else if(num == 2) this.p2 = true;
    else if(num == 3) this.p3 = true;
    else if(num == 4) this.p4 = true;
    else if(num == 5) this.p5 = true;
  }
  
}



