import { NgModule } from "@angular/core";
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorComponent } from './contador/contador.component';



@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent,

    ],

})
export class ContadorModule {

}