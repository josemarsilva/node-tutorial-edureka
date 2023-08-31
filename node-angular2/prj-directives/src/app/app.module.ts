import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveNgIfComponent } from './directive-ng-if/directive-ng-if.component';
import { TestLintComponent } from './test-lint/test-lint.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgIfComponent,
    TestLintComponent,
    DirectiveNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
