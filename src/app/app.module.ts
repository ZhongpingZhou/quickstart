import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent}  from './app.component';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HeroFormComponent } from './hero-form.component';
/*为了在这个模块使用NgModule,需要从别的模块导入
*/
@NgModule
({
  imports:      [ BrowserModule,FormsModule],
  declarations: [ AppComponent,HeroFormComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule
{

}
