import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserModule } from '../user/user.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ClientsAutocompleteComponent } from './clients-autocomplete/clients-autocomplete.component';
import { MedicsAutocompleteComponent } from './medics-autocomplete/medics-autocomplete.component';

@NgModule({
  declarations: [
    AutocompleteComponent,
    MedicsAutocompleteComponent,
    ClientsAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    UserModule,
  ],
  exports: [
    AutocompleteComponent,
    MedicsAutocompleteComponent,
    ClientsAutocompleteComponent,
  ],
})
export class AutocompletesModule {}
