import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  @ViewChild('header', {static: true}) header: ElementRef;
  @ViewChild('mask', {static: true}) mask: ElementRef;
  @ViewChild('menu', {static: true}) menu: ElementRef;

  constructor(
    private router: Router,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    const _ = this;
    console.log(_.router.url, ' iosa');
    // if(_.router.url == '/'){
    //   _.header.nativeElement.classList.add('isWelcome');
    // }
  }

  openMenu(){
    let _ = this;
    if(!_.isOpen){
      _.isOpen = true;
      _.mask.nativeElement.classList.add('active');
      _.menu.nativeElement.classList.add('active');
      return
    }
    _.mask.nativeElement.classList.remove('active');
    _.menu.nativeElement.classList.remove('active');
  }
}
