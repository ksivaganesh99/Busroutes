import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../shared/spinner.service';
declare var google : any;
@Component({
   
    selector: 'contact',
    templateUrl: 'app/common/contact.component.html'
})
export class ContactComponent implements OnInit {
    constructor(private _spinner:SpinnerService) { }

    ngOnInit() {
         this._spinner.hide();
          var myOptions = {zoom:10,center:new google.maps.LatLng(17.2309294,78.5631429),mapTypeId: google.maps.MapTypeId.ROADMAP};
               
                 this.map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
                
                 this.marker = new google.maps.Marker({map: this.map,position: new google.maps.LatLng(17.2309294,78.5631429)});this.infowindow = new google.maps.InfoWindow({content:'<strong>TCS Adibatla</strong><br> Adibhatla, Telangana 501510, India<br>'});
                // google.maps.event.addListener(this.marker, 'click', function(){this.infowindow.open(this.map,this.marker);});this.infowindow.open(this.map,this.marker);
     }

}