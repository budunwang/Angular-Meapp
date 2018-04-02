import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ComponentCommService } from '../service/componentComm.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {

	private subscription: Subscription;
    private message: string;
    private productList: any;

	constructor(private apiService: ApiService,
		private componentCommService: ComponentCommService) { 
		this.subscription = componentCommService.navSent$.subscribe( data => {
            this.showTaxonomy(data);
        });
	}

	ngOnInit() {
    }
    
    showTaxonomy(val) {
        this.apiService.getProductByTaxonomyCode(val)
            .subscribe(data => {
                this.productList = data;
            });
    }

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
