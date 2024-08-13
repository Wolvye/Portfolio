import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { WrapperComponent } from './wrapper/wrapper.component';

export const routes: Routes = [
    { path: 'imprint', component: ImprintComponent },
    { path: '', component: WrapperComponent }
];
