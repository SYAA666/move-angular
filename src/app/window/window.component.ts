import {Component, Input, ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer
    ) { }
  @Input() index: number;
  thatBody = this.elRef.nativeElement;
  moveHandler;
  deleteNode() {
    this.elRef.nativeElement.innerHTML = '';
  }
  onMouseDown() {
    this.thatBody.style.position = 'absolute';
    this.moveHandler = this.renderer.listen(this.thatBody, 'mousemove', evt => {
      this.thatBody.style.left = evt.pageX - (this.thatBody.offsetWidth / 2) + 'px';
      this.thatBody.style.top =  evt.pageY - (this.thatBody.offsetHeight / 2) + 'px';
    });
  }
  onMouseUp() {
    this.moveHandler();
  }
}
