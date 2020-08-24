import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-address-detail',
  templateUrl: './user-address-detail.component.html',
  styleUrls: ['./user-address-detail.component.css']
})

export class UserAddressDetailComponent implements OnInit {


  model: addressModel;
  countryData: any[] = ['India', 'US', 'Australia'];

  constructor() {

    this.model = {
      address: '',
      city: '',
      state: '',
      postcode: null,
      country: null,
      aggrement: false
    };

   }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log("The Form Submitted", this.model);
  }

  getAddressClassStyling(address,f){
    return {
      'invalid-data': address.invalid && f.submitted,
      'valid-data': address.valid && f.submitted
    };
  }

}

interface addressModel{
  address: string,
  city: string,
  state: string,
  postcode: number,
  country: any[],
  aggrement: boolean
}
