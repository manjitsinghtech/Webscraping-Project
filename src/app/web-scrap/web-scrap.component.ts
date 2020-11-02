import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ScrapService } from '../scrap.service';


@Component({
    selector: 'app-web-scrap',
    templateUrl: './web-scrap.component.html',
    styleUrls: ['./web-scrap.component.css']
})
export class WebScrapComponent implements OnInit {
    formModel: FormGroup;
    allLinks: any[];
    imgsrc: any;
    showDiv: boolean = false;
    showLoader: boolean = false;
    lblSite: any;
    lblTitle: any;
    lblDescription: any;
    lblKeywords: any;

    constructor(private fb: FormBuilder, private service: ScrapService) {
        const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
        this.formModel = this.fb.group({
            urlInput: ['', [Validators.required, Validators.pattern(reg)]]
        });
    }

    ngOnInit(): void {
    }
    get f() {
        return this.formModel.controls;
    }
    onSubmit() {
        debugger;
        if (!this.formModel.valid) {
            return false;
        }
        this.showLoader = true;

        var data;
        this.service.getScrappedData(this.formModel.value.urlInput).subscribe(
            (res: any) => {
                data = res;
                this.lblSite = data.siteName;
                if (data.title != "" && data.title != null) {
                    this.lblTitle = data.title;
                }
                else {
                    this.lblTitle = "No Title exist"
                }
                if (data.metaDescription != "" && data.metaDescription != null) {
                    this.lblDescription = data.metaDescription;
                }
                else {
                    this.lblDescription = "No Description exist"
                }
                if (data.metaKeywords != "" && data.metaKeywords != null) {
                    this.lblKeywords = data.metaKeywords;
                }
                else {
                    this.lblKeywords = "No Keywords exist"
                }
                this.imgsrc = data.imagePath;
                this.allLinks = data.hyperlinks;
                this.showDiv = true;
                this.showLoader = false;
            });
    }
    SavePDF() {

    }
}


