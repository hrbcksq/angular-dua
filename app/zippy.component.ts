import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy-panel',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading" (click)='onExpand()' [ngStyle]="{
                'border-width' : expanded ? '1px' : '0px' 
            }">            
                <div class='row'>
                    <div class='col-md-11'>{{ title }}</div>
                    <div class='col-md-1 text-right'>
                        <i class='glyphicon' [ngClass]="{                            
                            'glyphicon-chevron-up' : expanded,
                            'glyphicon-chevron-down' : !expanded}"></i>                        
                    </div> 
                </div>
                                               
            </div>
            <div class="panel-body" [hidden]='!expanded'>                    
                <ng-content></ng-content>
            </div>
        </div>`
})
export class ZippyPanel{
    @Input() expanded: boolean;
    @Input() title: string;

    onExpand(){
        this.expanded = !this.expanded;
    }
}

