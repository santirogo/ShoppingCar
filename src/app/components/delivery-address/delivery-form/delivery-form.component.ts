import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faUser, faEnvelope, faPhoneAlt, faMapMarkedAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {DeliveryAddress} from '../../../models/config.model';
import {ConstantsService} from '../../../services/constants.service';
import {RestService} from '../../../services/rest.service';
import {LocationModel} from '../../../models/location.model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FormRequestModel} from '../../../models/form-request.model';
import {ModalComponent} from 'angular-custom-modal';
import Swal from 'sweetalert2';


@Component({
  selector: 'blacksip-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss']
})
export class DeliveryFormComponent implements OnInit {
  @Input() config: DeliveryAddress;
  public locationInfo: LocationModel;
  public form: FormGroup;

  constructor(
    private library: FaIconLibrary,
    public constants: ConstantsService,
    private rest: RestService,
    private fb: FormBuilder
  ) {
    library.addIcons(faUser, faEnvelope, faPhoneAlt, faMapMarkedAlt, faMapMarkerAlt);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input0: new FormControl(''),
      input1: new FormControl(''),
      input2: new FormControl(''),
      input3: new FormControl(''),
      input4: new FormControl(''),
      input5: new FormControl(''),
      input6: new FormControl(''),
      input7: new FormControl(''),
      input8: new FormControl(''),
      input9: new FormControl(''),
    });
  }

  public onBlur(postalCode: string): void {
    this.rest.getLocationInfo(postalCode).subscribe((data) => {
      this.locationInfo = data;
      this.form.get('input5').setValue(this.locationInfo.colonies[0]);
      this.form.get('input6').setValue(this.locationInfo.state);
      this.form.get('input7').setValue(this.locationInfo.city);
      this.form.get('input8').setValue(this.locationInfo.town);
    }, (error) => {
      console.error(error);
    });
  }

  public submit(): void {
    const request: FormRequestModel = {
      name: this.form.get('input0').value,
      lastname: this.form.get('input1').value,
      email: this.form.get('input2').value,
      phone: this.form.get('input3').value,
      postalCode: this.form.get('input4').value,
      suburb: this.form.get('input5').value,
      state: this.form.get('input6').value,
      city: this.form.get('input7').value,
      municipality: this.form.get('input8').value,
      street: this.form.get('input9').value,
    };
    this.rest.sendContactInfo(request).subscribe((data) => {
      Swal.fire({
        title: this.config.SuccessMessage,
        confirmButtonColor: '#000',
      }).then(() => {});
    }, () => {
      Swal.fire({
        title: this.config.ErrorMessage,
        confirmButtonColor: '#000',
      }).then(() => {});
    });
  }

}
