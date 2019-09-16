// CORE MODULES

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,
         FormsModule             } from '@angular/forms';
import { BrowserModule           } from '@angular/platform-browser';
import { NgModule                } from '@angular/core';
import { NgbModule               } from '@ng-bootstrap/ng-bootstrap';

// CUSTOM MODULES
import { AppRoutingModule        } from './app-routing.module';

// MATERIAL MODULES
import {
  MatAutocompleteModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatStepperModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatChipsModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
} from '@angular/material';

// CUSTOM COMPONENTS
import { RecoverKeyComponent } from './recover-key/recover-key.component';
import { ApiListComponent    } from './api-list/api-list.component';
import { SwaggerComponent    } from './swagger/swagger.component';
import {ApiToolComponent, SecurityDialog} from './api-tool/api-tool.component';
import { AddApiComponent     } from './add-api/add-api.component';
import { FooterComponent     } from './footer/footer.component';
import { HomeComponent       } from './home/home.component';

import { AppComponent        } from './app.component';
import { ApiComponent        } from './api/api.component';

import { NavComponent        } from './nav/nav.component';
import { KeyComponent        } from './key/key.component';

// CUSTOM SERVICES
import { NavService          } from './nav/nav.service';
import { ApiService          } from './api-list/api.service';
import {HttpClient} from '@angular/common/http';
import {MarkdownToHtmlModule} from 'markdown-to-html-pipe';
import { RequestDialogComponent } from './api-tool/request-dialog/request-dialog.component';


@NgModule({
  declarations: [
    RequestDialogComponent,
    RecoverKeyComponent,
    ApiToolComponent,
    ApiListComponent,
    SwaggerComponent,
    AddApiComponent,
    FooterComponent,
    SecurityDialog,
    HomeComponent,
    AppComponent,
    NavComponent,
    KeyComponent,
    ApiComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MarkdownToHtmlModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MatExpansionModule,
    MatCheckboxModule,
    MatSidenavModule,
    AppRoutingModule,
    MatStepperModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatChipsModule,
    MatInputModule,
    MatChipsModule,
    MatTabsModule,
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    NavService,
    ApiService
  ],
  entryComponents: [
    RequestDialogComponent,
    SecurityDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
