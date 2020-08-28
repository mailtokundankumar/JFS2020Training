import { OnInit, Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appEmoji]'
})
export class EmojiDirective implements OnInit {

  constructor(private el: ElementRef){

  }

  ngOnInit() {
    //this.el.nativeElement.textContent +=  '🎉'
    const tempText = this.el.nativeElement.textContent;
    this.el.nativeElement.textContent =  '🎉' + tempText;

  }
}
