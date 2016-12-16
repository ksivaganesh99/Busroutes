import { Component, OnInit , AfterViewInit , AfterContentInit , ViewChild , ElementRef} from '@angular/core';
import { SpinnerService } from '../shared/spinner.service';
declare var google : any;

@Component({
   
    selector: 'about',
    templateUrl: 'app/common/about.component.html',
    
})

export class AboutComponent implements OnInit, AfterViewInit ,AfterContentInit {
    constructor(public myElement : ElementRef,private _spinner:SpinnerService) { 
       
    }

    ngOnInit() { 
        this._spinner.hide();
     }
  
    ngAfterViewInit(){
     
              
    }
ngAfterContentInit(){
    
}
}