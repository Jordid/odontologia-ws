import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInitComponent } from './components/admin-init/admin-init.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminInitComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
