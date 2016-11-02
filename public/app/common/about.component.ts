import { Component, OnInit , AfterViewInit , AfterContentInit , ViewChild , ElementRef} from '@angular/core';

declare var google : any;

@Component({
   
    selector: 'about',
    templateUrl: 'app/common/about.component.html',
    
})

export class AboutComponent implements OnInit, AfterViewInit ,AfterContentInit {
    constructor(public myElement : ElementRef) { 
       
    }

    ngOnInit() {  }
  
    ngAfterViewInit(){
     
              
    }
ngAfterContentInit(){
    
}
}