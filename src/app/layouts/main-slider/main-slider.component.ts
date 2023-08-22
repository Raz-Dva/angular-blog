import {Component, OnInit, ViewChild} from '@angular/core';
import {GalleryItem, ImageItem, GalleryComponent, Gallery, ImageSize, ThumbnailsPosition} from 'ng-gallery';
import {Lightbox} from "ng-gallery/lightbox";

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  get thumbHeight() {
    const heightGallery = this.wrapperGallery.offsetHeight
    const thumbsLength = this.slideData.length;
    const thumbHeight = (heightGallery / thumbsLength).toFixed(1);
    return Number(thumbHeight);
  }

  items!: GalleryItem[];
  slideData = [
    {
      srcUrl: "/assets/images/slide1.jpg",
      previewUrl: "/assets/images/slide1.jpg",
      title: "Whereas recognition of the inherent dignity",
      pretext: "Exploring the serene underwater world, surrounded by colorful corals and graceful marine life, is a captivating experience that rejuvenates the soul",
    },
    {
      srcUrl: "/assets/images/slide2.jpg",
      previewUrl: "/assets/images/slide2.jpg",
      title: "Whereas recognition of the inherent dignity",
      pretext: "Exploring the serene underwater world, surrounded by colorful corals and graceful marine life, is a captivating experience that rejuvenates the soul",
    },
    {
      srcUrl: "https://preview.ibb.co/mwsA6R/img7.jpg",
      previewUrl: "https://preview.ibb.co/mwsA6R/img7.jpg",
      title: "Whereas recognition of the inherent dignity",
      pretext: "Exploring the serene underwater world, surrounded by colorful corals and graceful marine life, is a captivating experience that rejuvenates the soul",
    },
    {
      srcUrl: "/assets/images/slide4.jpg",
      previewUrl: "/assets/images/slide4.jpg",
      title: "Lorem Ipsum Lorem IpsumLorem Ipsum",
      pretext: "Exploring the serene underwater world, surrounded by colorful corals and graceful marine life, is a captivating experience that rejuvenates the soul",
    },
    {
      srcUrl: "/assets/images/slide5.jpg",
      previewUrl: "/assets/images/slide5.jpg",
      title: "Lorem Ipsum Lorem IpsumLorem Ipsum",
      pretext: "Exploring the serene underwater world, surrounded by colorful corals and graceful marine life, is a captivating experience that rejuvenates the soul",
    }
  ];

  @ViewChild('wrapGallery', {static: true}) wrapperGallery!: HTMLElement;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit(): void {
    this.items = this.slideData.map(item => new ImageItem({
      src: item.srcUrl,
      thumb: item.previewUrl
    }));
    // const lightboxRef = this.gallery.ref('lightbox');
    // lightboxRef.setConfig({});
    // lightboxRef.load(this.items);
  }

}
