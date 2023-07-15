import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any;
declare var Typed: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'melisa-temel-portfolio';
  @ViewChild('typedElement') typedElementRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const typedElement = this.typedElementRef.nativeElement;
    const options = {
      strings: ['Web Developer', 'Flutter Developer'],
      typeSpeed: 90,
      backDelay: 700,
      contentType: 'html',
      loop: true,
      resetCallback: () => {
        this.newTyped();
      }
    };
    $(typedElement).typed(options);
  }

  newTyped(): void {
  }

  resetTyped(): void {
    const typedElement = this.typedElementRef.nativeElement;
    $(typedElement).typed('reset');
  }
}
