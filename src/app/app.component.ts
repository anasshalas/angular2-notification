import {Component, OnInit} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
    
    @Component({
      selector: 'app-root',
      template: '<button class="btn btn-default" (click)="showSuccess()">Toastr Tester</button>'
    })
    export class AppComponent {
    
      constructor(public toastr: ToastsManager) {
      }
        
      showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
      }
    
      showError() {
        this.toastr.error('This is not good!', 'Oops!');
      }
    
      showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
      }
    
      showInfo() {
        this.toastr.info('Just some information for you.');
      }
      
      showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
      }
    }