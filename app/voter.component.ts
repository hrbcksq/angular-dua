import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'voter',
    templateUrl: 'app/voter.template.html',
    styleUrls: ['app/voter.style.css']
})
export class VoterComponent{
    @Input('votesCount') votes: number;
    @Input('myVote') vote: number;
    @Output('vote') onVote = new EventEmitter();

    private onChange(step: number){
        if (step == this.vote) return;        
        this.onVote.emit({"step": step});
    } 
}
