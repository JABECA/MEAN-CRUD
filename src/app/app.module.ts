import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// import { EmployeeService } from './services/employee.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
