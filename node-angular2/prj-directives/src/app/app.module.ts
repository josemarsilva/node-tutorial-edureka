import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveNgIfComponent } from './directive-ng-if/directive-ng-if.component';
import { TestLintComponent } from './test-lint/test-lint.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { DirectiveNgswitchComponent } from './directive-ngswitch/directive-ngswitch.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';
import { DirectiveNgclassComponent } from './directive-ngclass/directive-ngclass.component';
import { DirectiveNgstyleComponent } from './directive-ngstyle/directive-ngstyle.component';
import { FormsModule } from '@angular/forms';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { CustomAttrDirectiveDirective } from './shared/custom-attr-directive.directive';
import { CustomAttrDirectiveComponent } from './custom-attr-directive/custom-attr-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgIfComponent,
    TestLintComponent,
    DirectiveNgifComponent,
    DirectiveNgswitchComponent,
    DirectiveNgforComponent,
    DirectiveNgclassComponent,
    DirectiveNgstyleComponent,
    ElvisOperatorComponent,
    NgContentComponent,
    CustomAttrDirectiveDirective,
    CustomAttrDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
