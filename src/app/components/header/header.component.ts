import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('header', {static: true}) header:ElementRef;

  constructor(
    private router: Router,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    const _ = this;
    if(_.router.url == '/'){
      _.header.nativeElement.classList.add('isWelcome');
    }
  }
}
