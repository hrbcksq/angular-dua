import {Component} from 'angular2/core';


@Component({
    selector: 'my-app',    
    template: `
        <ul class='nav nav-tabs'>
            <li (click)='tabChange("map")'><a>Map view</a></li>
            <li (click)='tabChange("list")'><a>List view</a></li>
        </ul>

        <div [ngSwitch]='viewMode'>
            <template [ngSwitchWhen]="'map'">Map template content</template>
            <template [ngSwitchWhen]="'list'">List template content</template>
        </div>
        `          
})
export class AppComponent {
    private viewMode = 'map';

    tabChange(value: string){
        this.viewMode = value; 
        console.log(value);
    }        
}