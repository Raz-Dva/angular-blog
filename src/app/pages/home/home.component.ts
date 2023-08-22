import {Component, Inject, OnInit} from '@angular/core';
import {WINDOW} from "src/app/utils/help-functios/window-helper";
import {PostInterface} from "src/app/interfaces/post.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: PostInterface[] = [
    {
      id: 1,
      text: 'In the heart of the city, bustling streets hummed with life as people hurried to work, their footsteps echoing through the urban canyons.',
      title: 'New Arrivals',
      image: '/assets/images/post1.jpg',
    },
    {
      id: 2,
      text: 'Among the stars, distant galaxies formed',
      title: 'Stars From The Stars',
      image: '/assets/images/post2.jpg',
    },
    {
      id: 3,
      text: 'On a snowy morning, the village awoke to a blanket of white, transforming the landscape On a snowy morning, the village awoke to a blanket of white, transforming the landscape',
      title: 'Village awoke to a blanket of white',
      image: '/assets/images/post3.jpg',
    },
    {
      id: 4,
      text: 'Across the rolling plains, wildflowers swayed in harmony with the wind, their vibrant colors a celebration of nature',
      title: 'a celebration of nature',
      image: '/assets/images/post4.jpg',
    },
    {
      id: 5,
      text: 'At the edge of the world',
      title: 'At the edge of the world',
      image: '/assets/images/post5.jpg',
    },
    {
      id: 6,
      text: 'In a cozy cafe, the aroma of freshly brewed coffee mingled with laughter and conversation, creating a haven',
      title: 'the aroma of freshly brewed coffee',
      image: '/assets/images/post6.jpg',
    },
    {
      id: 7,
      text: 'Through the pages of a book, characters leapt to life, their stories weaving',
      title: 'the pages of a book',
      image: '/assets/images/post7.jpg',
    },
    {
      id: 8,
      text: 'On a snowy morning',
      title: 'On a snowy morning',
      image: '/assets/images/post8.jpg',
    },
    {
      id: 9,
      text: 'Through the pages of a book, characters leapt',
      title: 'characters leapt',
      image: '/assets/images/post9.jpg',
    },
  ]
  width: number;

  constructor(@Inject(WINDOW) private window: Window) {
    this.width = this.cols;
  }

  ngOnInit(): void {
  }

  get cols(): any {
    const windowWidth = this.window.innerWidth;
    switch (true) {
      case (windowWidth >= 1200):
        return new Array(4);

      case (windowWidth >= 992):
        return new Array(3);

      case (windowWidth >= 768):
        return new Array(2);

      case (windowWidth >= 576):
        return new Array(2);

      case (windowWidth < 576):
        return new Array(1);
    }
  }
}
