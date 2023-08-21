import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import randomNumberBetween from "src/app/utils/help-functios/random-number-between";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  maxHeight = 290;
  minHeight = 350;
  randomHighEl: number;
  @Input('item') item!: number;
  @Input('title') title!: string;

  constructor() {
    this.randomHighEl =  randomNumberBetween(this.minHeight, this.maxHeight);
  }

  ngOnInit(): void {
  }
}
