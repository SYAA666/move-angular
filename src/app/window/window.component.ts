import {Component, OnInit, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
  constructor( private elRef: ElementRef) { }
  @Input() index: number;
  thatBody = this.elRef.nativeElement;
  evt;
  ngOnInit(): void {
  
  }
  deleteNode() {
    this.elRef.nativeElement.innerHTML = '';
  }

  moveWithMouse(X, Y) {
    this.thatBody.style.left = X - (this.thatBody.offsetWidth / 2) + 'px';
    this.thatBody.style.top =  Y- (this.thatBody.offsetHeight / 2) + 'px';
  }

  move(event) {
    this.moveWithMouse(event.pageX, event.pageY);
  }
  
  onMouseDown(event) {
    this.thatBody.style.position = 'absolute';
    this.thatBody.addEventListener('mousemove', (event) => {
      this.thatBody.style.left = event.pageX - (this.thatBody.offsetWidth / 2) + 'px';
      this.thatBody.style.top =  event.pageY - (this.thatBody.offsetHeight / 2) + 'px';
    });
  }
  onMouseUp(event) {
    const evt = event;
    event.target.removeEventListener('mousemove',(event) => {
      this.thatBody.style.left = event.pageX - (this.thatBody.offsetWidth / 2) + 'px';
      this.thatBody.style.top =  event.pageY - (this.thatBody.offsetHeight / 2) + 'px';
    });
    this.thatBody.onmouseup = null;
  }
  /* moveWithMouse(event) {
    const windowNode = this.window.nativeElement.parentNode;
    windowNode.style.left = event.pageX - windowNode.offsetWidth / 2;
    windowNode.style.top = event.pageY - windowNode.offsetHeight / 2;
    console.log(event.pageX);
  } */
}
