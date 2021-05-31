import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges
} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{

  posts: Post[] = [
    {title: 'Хочу выучить Angular компоненты', text: 'Я всё еще учу компоненты', id: 1},
    //{title: 'Хочу выучить Angular', text: 'Я всё еще учу дериктивы и пайпы', id: 2},
  ]

  constructor() {
  }

  removePost(id: number){
    this.posts = this.posts.filter( p => p.id !== id)
  }

  ngOnInit() {
    console.log('ngOnInit')
    // setTimeout(()=>{
    //   console.log('TimeOut')
    //   this.posts[0].title = 'changed!'
    // }, 5000)
  }

  addNewPost (postNew: Post){
    this.posts.unshift(postNew);
  }

}
