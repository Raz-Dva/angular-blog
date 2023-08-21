import {Component, Inject, OnInit} from '@angular/core';
import {WINDOW} from "src/app/utils/help-functios/window-helper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts = [
    {
      text: 'In the heart of the city, bustling streets hummed with life as people hurried to work, their footsteps echoing through the urban canyons.',
      title: 'New Arrivals'
    },
    {
      text: 'Among the stars, distant galaxies formed',
      title: 'Stars From The Stars',
    },
    {
      text: 'On a snowy morning, the village awoke to a blanket of white, transforming the landscape On a snowy morning, the village awoke to a blanket of white, transforming the landscape',
      title: 'Village awoke to a blanket of white',
    },
    {
      text: 'Across the rolling plains, wildflowers swayed in harmony with the wind, their vibrant colors a celebration of nature',
      title: 'a celebration of nature',
    },
    {
      text: 'At the edge of the world',
      title: 'At the edge of the world',
    },
    {
      text: 'In a cozy cafe, the aroma of freshly brewed coffee mingled with laughter and conversation, creating a haven',
      title: 'the aroma of freshly brewed coffee',
    },    {
      text: 'Through the pages of a book, characters leapt to life, their stories weaving',
      title: 'the pages of a book',
    },    {
      text: 'On a snowy morning',
      title: 'On a snowy morning',
    },    {
      text: 'Through the pages of a book, characters leapt',
      title: 'characters leapt',
    },
  ]
  width: number;

  constructor(@Inject(WINDOW) private window: Window) {
    this.width = this.w;
  }

  ngOnInit(): void {
  }

  get w(): any{
    const windowWidth = this.window.innerWidth;
    switch (true) {
      case (windowWidth >= 1200):
        return { cols: new Array(4), windowWidth };

      case (windowWidth >= 992):
        return { cols: new Array(3), windowWidth };

      case (windowWidth >= 768):
        return { cols: new Array(2), windowWidth };

      case (windowWidth >= 576):
        return { cols: new Array(2), windowWidth };

      case (windowWidth < 576):
        return { cols: new Array(1), windowWidth };
    }
  }
}
