import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstitucionesPage } from './instituciones';

@NgModule({
  declarations: [
    InstitucionesPage,
  ],
  imports: [
    IonicPageModule.forChild(InstitucionesPage),
  ],
})
export class InstitucionesPageModule {}
