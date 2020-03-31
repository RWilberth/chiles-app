import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-input',
  templateUrl: './img-input.component.html',
  styleUrls: ['./img-input.component.scss']
})
export class ImgInputComponent implements OnInit {

  @Input()
  formControlName: string;

  @Input()
  images: Array<string | ArrayBuffer>;

  @Output()
  imagesChange: EventEmitter<Array<string | ArrayBuffer>> = new EventEmitter<Array<string | ArrayBuffer>>();

  @Output()
  addFile: EventEmitter<string | ArrayBuffer> = new EventEmitter<string | ArrayBuffer>();

  constructor() {
    this.images = [];
  }

  ngOnInit(): void {
  }

  changeListener($event): void {
    if (this.images === undefined) {
      this.images = [];
    }
    this.addNewFile($event.target);
  }


  addNewFile(inputValue): void {
    console.log(inputValue);

    const fileReader: FileReader = new FileReader();

    fileReader.onloadend = (e) => {
      const fileReaded = fileReader.result;
      this.images.push(fileReaded);
      this.imagesChange.emit(this.images);
      this.addFile.emit(fileReaded);
    };
    for (const file of inputValue.files) {
      fileReader.readAsDataURL(file);
    }
  }

  deleteFile($event, file) {
    const indexFileToDelete = this.images.findIndex(f => f === file);
    this.images.splice(indexFileToDelete, 1);
    this.imagesChange.emit(this.images);
  }

}
