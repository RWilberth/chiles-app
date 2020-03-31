import { Component, OnInit } from '@angular/core';
import * as Dropzone from 'dropzone';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  productCreateForm: FormGroup;
  isSubmitted: boolean;
  images: Array<string | ArrayBuffer>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) {
    this.productCreateForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcionCorta: ['', Validators.required],
      descripcionLarga: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }


}
