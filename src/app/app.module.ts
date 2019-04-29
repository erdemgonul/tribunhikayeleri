import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HttpClientModule }    from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { StoryComponent } from './story/story.component';
import { LatestThreadsComponent } from './latest-threads/latest-threads.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    HomeComponent,
    SigninComponent,
    CreateStoryComponent,
    StoryComponent,
    LatestThreadsComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
 BrowserAnimationsModule,
 MatCheckboxModule,
 MatButtonModule,
 MatInputModule,
 MatAutocompleteModule,
 MatDatepickerModule,
 MatFormFieldModule,
 MatRadioModule,
 MatSelectModule,
 MatSliderModule,
 MatSlideToggleModule,
 MatMenuModule,
 MatSidenavModule,
 MatToolbarModule,
 MatListModule,
 MatGridListModule,
 MatCardModule,
 MatStepperModule,
 MatTabsModule,
 MatExpansionModule,
 MatButtonToggleModule,
 MatChipsModule,
 MatIconModule,
 MatProgressSpinnerModule,
 MatProgressBarModule,
 MatDialogModule,
 MatTooltipModule,
 MatSnackBarModule,
 MatTableModule,
 MatSortModule,
MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
