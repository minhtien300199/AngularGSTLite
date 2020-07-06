import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor(
    private HttpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImage: any;
  base64Data: any;
  convertedImage: any;

  public  onFileChanged(event){
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) =>{
      this.imgURL = reader.result;
    }

  }

  onUpload(){

    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.HttpClient.post<any>('http://localhost:8080/mobilestore/api/v1/image/upload', uploadData)
      .subscribe(
        res =>{
          console.log(res);
          this.receivedImage = res;
          this.base64Data = this.receivedImage.pic;
          this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
          //console.log(this.convertedImage);
        },

        err =>{
          console.log(err);
        }
      )
  }

}
