import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from '../app.component';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
   OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('myPost') post: Post;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info') infoRef: ElementRef;

  // tslint:disable-next-line:typedef
  removePost(){
    this.onRemove.emit(this.post.id);
  }

  constructor() {
    console.log('constructor');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    }

  ngDoCheck(): void {
        console.log('ngDoCheck');
    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    }

  ngOnInit(): void {
    console.log('ngOnInit');
   // console.log(this.infoRef.nativeElement);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }



}
