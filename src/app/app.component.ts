import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tribunhikayeleri';

  imageuploaded;

  readfiles(files){
      console.log('files from readfiles -  ',files[0]);
      const reader = new FileReader();
      let image = new Image();

      reader.onload =  (event) =>{
        console.log("ssst");
        let fileReader = event.target as FileReader;
        //image.src = fileReader.result;
        //image.width = 150;
        //this.imageuploaded="<img src='" +fileReader.result + "'>";
        //reader.result diyince dönüyo  o arrayi buranın içinde yapman lazım
        console.log("RESULT:",reader.result);

      };
      reader.readAsArrayBuffer(files[0]);

    }//readfiles
    imageChange(event){
      this.readfiles(event.target.files);
    }//imageChange
}
