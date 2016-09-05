import {Component} from 'angular2/core';
import {ZippyPanel} from './zippy.component'

@Component({
    selector: 'my-app',    
    template: `                        
            <zippy-panel title='Manual Reloading'>
                If the streams support doesn't suit your needs, you can fire the reload method manually by wrapping it in a task. This example will compile & auto-inject CSS just as before, but when HTML files are changed, the browsers will be reloaded instead.
            </zippy-panel>
        `,    
    directives: [ZippyPanel]
})
export class AppComponent {
    
}