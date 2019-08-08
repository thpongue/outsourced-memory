import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedListComponent } from './nested-list/nested-list.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { EscapeHtmlTagsPipe } from './escape-html-tags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NestedListComponent,
    SanitizeHtmlPipe,
    EscapeHtmlTagsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
