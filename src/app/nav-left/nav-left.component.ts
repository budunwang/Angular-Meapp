import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ComponentCommService } from '../service/componentComm.service';

@Component({
    selector: 'app-nav-left',
    templateUrl: './nav-left.component.html',
    styleUrls: ['./nav-left.component.css']
})

export class NavLeftComponent implements OnInit {

    private treeNodes: Array<Object> = new Array<Object>();

    constructor(private apiService: ApiService,
        private componentCommService: ComponentCommService) {
    }

    ngOnInit() {
        this.showTreeTable();
    }

    showTreeTable() {
        this.apiService.getTaxonomyTree()
            .subscribe(data => {
                Object.keys(data).map((value, index) => {
                    let treeNode = {
                        categoryCode: data[value].categoryCode,
                        title: data[value].title,
                        children: data[value].children
                    }
                    this.treeNodes.push(treeNode);
                });
            });
    }

    clickEvent(event) {
        this.componentCommService.sendNav(event.categoryCode);
    }
}
