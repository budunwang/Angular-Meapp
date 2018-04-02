import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ComponentCommService {

	private navSentSource = new Subject<string>();

	navSent$ = this.navSentSource.asObservable();

	sendNav(val: string) {
		this.navSentSource.next(val);
	}

}