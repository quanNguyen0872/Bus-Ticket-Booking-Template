import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { LoginDialogComponent } from './components/navbar/components/login-dialog/login-dialog.component';
import { LoginComponent } from './components/navbar/components/login-dialog/login/login.component';
import { RegisterComponent } from './components/navbar/components/login-dialog/register/register.component';

@NgModule({
    declarations: [NavbarComponent, FooterComponent, SearchWidgetComponent, LoginDialogComponent, LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatTabsModule,
        MatStepperModule,
        MatSlideToggleModule,
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        SearchWidgetComponent,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatTabsModule,
        MatStepperModule,
        MatSlideToggleModule,
    ],
})
export class ShareModule {}
