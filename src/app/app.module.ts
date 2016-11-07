import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';

let options: any = {
  animate: 'flyRight',
  positionClass: 'toast-top-right',
};
    
@NgModule({
  imports: [BrowserModule, 
        ToastModule.forRoot(options),
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

}    