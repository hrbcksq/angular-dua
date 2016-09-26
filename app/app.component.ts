import {Component} from '@angular/core';
import {Routes, RouterOutlet, RouterLink, } from '@angular/router';

import {AlbumsComponent} from './albums.component';
import {AlbumComponent} from './album.component';
import {ContactComponent} from './contact.component';

@RouteConfig([
	{ path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true },	
	{ path: '/albums/:id', name: 'Album', component: AlbumComponent },
	{ path: '/contact', name: 'Contact', component: ContactComponent },
	{ path: '/*other', name: 'Other', redirectTo: ['Albums'] }
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',    
    directives: [RouterOutlet, RouterLink]
})
export class AppComponent {
}
