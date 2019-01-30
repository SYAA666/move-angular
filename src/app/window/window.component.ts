import {Component, OnInit, Input, ViewChild, ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
  constructor(rd: Renderer) { }
  @ViewChild('windowElement') window; @Input() index: number;
  public X: any;
  public Y: any;
  /*

  lol() {
    console.log(this.index);
  }
  deleteNode() {
    this.window.nativeElement.parentNode.style.display = 'none';
  }
  } */
  ngOnInit(): void {

  }
  deleteNode() {
    this.window.nativeElement.parentNode.innerHTML = '';
  }
  onMouseDown(event) {
    const windowNode = this.window.nativeElement.parentNode;
    windowNode.style.position = 'absolute';
    windowNode.style.zIndex = 999;
    addEventListener('mousemove', () => {
      windowNode.style.marginLeft = pageXOffset;
      windowNode.style.marginTop =  pageYOffset;
    });
  }
  /* moveWithMouse(event) {
    const windowNode = this.window.nativeElement.parentNode;
    windowNode.style.left = event.pageX - windowNode.offsetWidth / 2;
    windowNode.style.top = event.pageY - windowNode.offsetHeight / 2;
    console.log(event.pageX);
  } */
}
