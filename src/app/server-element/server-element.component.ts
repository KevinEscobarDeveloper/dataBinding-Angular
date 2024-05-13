import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log('text content of paragraph ' + this.paragraph.nativeElement.textContent);
  }


  @Input('srvElement') element: { type: string, name: string, content: string };
  @ContentChild('contentParagraph') paragraph: ElementRef;

}
