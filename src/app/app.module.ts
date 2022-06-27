import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './components/form/form.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DragDropModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    FormComponent,
    ListCategoryComponent,
    DashboardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
