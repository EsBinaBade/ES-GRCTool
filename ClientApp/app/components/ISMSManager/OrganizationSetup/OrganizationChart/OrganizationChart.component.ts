import { Component, OnInit } from '@angular/core';
import { OrganizationChartService} from './ChartService.service';

@Component({
    selector: 'orgChart',
    templateUrl: './OrganizationChart.component.html',
    styleUrls: ['../OrganizationSetup.component.css'],
    providers: [OrganizationChartService]
})
export class OrganizationChartComponent implements OnInit{
    imageUrl: string = "./image1.png";
    fileToUpload: File;

    constructor(private _imageService: OrganizationChartService) { }

    ngOnInit() { }

    handlefileInput(file: FileList) {
        this.fileToUpload = file.item(0);

        //show image preview
        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.imageUrl = event.target.result;
        }
        reader.readAsDataURL(this.fileToUpload);

    }

    OnSubmit(Caption, Image) {
        this._imageService.postfile(Caption.value, this.fileToUpload).subscribe(
            data => {
                console.log('done');
                Caption.value = null;
                Caption.Image = null;
                this.imageUrl = "./image1.png";
            }
            )
    }
}


