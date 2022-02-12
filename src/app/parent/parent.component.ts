import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, AfterViewInit {
  // @ViewChild('child', { static: true }) child: ChildComponent =
  //new ChildComponent();

  @ViewChild('para', { static: true }) para!: ElementRef;

  title = 'Parent calls an @ViewChild()';

  ngOnInit(): void {}

  increment() {
    //this.child.increment();
  }

  decrement() {
    //this.child.decrement();
  }

  ngAfterViewInit() {
    /*console.log(this.para.nativeElement.innerHTML);
    this.para.nativeElement.innerHTML = 'Kingsley is killing them';*/
  }
}
