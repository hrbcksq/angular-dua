import {Pipe, PipeTransform} from 'angular2/core'

@Pipe(
    {name: 'summary'}
)
export class SummaryPipe implements PipeTransform{
    transform(value: string, parameter: string) {
        var limit = (parameter) ? parseInt(parameter) : 50;
        if (value) 
            return value.substring(0, limit) + '...';
    }
}
