import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aha-video';
  isBottom: boolean=false;
  @HostListener('window:scroll', [])
  onScroll(): void {
    console.log(window.scrollY);
    if(window.scrollY>0){
      this.isBottom = true;
    }
    else{
      this.isBottom=false
    }
    // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //   this.isBottom = false;
    // } else if (window.scrollY) {
    //   this.isBottom = false;
    // } else  {
    //   this.isBottom = true;
    // }
  }
}
