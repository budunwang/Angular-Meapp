import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
	selector: 'app-tree-node',
	templateUrl: './tree-node.component.html',
	styleUrls: ['./tree-node.component.css']
})

export class TreeNodeComponent implements OnInit {
	
	@Input() 
	childNodes: Array<Object>;
	@Input() 
	isShow: boolean;

	@Output() 
	onClicked = new EventEmitter<any>();

	private isChildNodeShow: Array<boolean>;

	constructor() { 
	}

	ngOnInit() {
		// set array to keep file state (is click or not) 
		let length: number = this.childNodes.length;
		this.isChildNodeShow = new Array<boolean>(length);
		this.isChildNodeShow.fill(false, 0, length);
	}

	trigger(event, i) {
		event.preventDefault();
		event.stopPropagation();
		let childNode: any = this.childNodes[i];
		// Trigger file state if it is file
		// change icon and open sub nodes
		if(childNode.children.length != 0) {
			this.isChildNodeShow[i] = !this.isChildNodeShow[i];	
		}
		// emit event
		this.onClicked.emit(childNode);
	}

	// pass click event to parent node
	passClickEvent(event) {
		this.onClicked.emit(event);
	}
}
