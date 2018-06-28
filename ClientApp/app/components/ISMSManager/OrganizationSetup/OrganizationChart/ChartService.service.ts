import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OrganizationChartService {

    constructor(private _http: Http) { }

    postfile(caption: string, fileToUpload: File) {
        const endpoint = '/api/uploadImage';
        const formData: FormData = new FormData();
        formData.append('Image', fileToUpload, fileToUpload.name);
        formData.append('ImageCaption', caption);
        return this._http.post(endpoint, formData);
    }
}