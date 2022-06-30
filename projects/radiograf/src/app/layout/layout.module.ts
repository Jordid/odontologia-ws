import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InsideInitComponent } from './components/inside/inside-init/inside-init.component';
import { FooterComponent } from './components/inside/footer/footer.component';
import { ToolbarComponent } from './components/inside/toolbar/toolbar.component';
import { OutsideInitComponent } from './components/outside/outside-init/outside-init.component';

@NgModule({
  declarations: [
    FooterComponent,
    InsideInitComponent,
    OutsideInitComponent,
    ToolbarComponent,
  ],
  imports: [CommonModule],
  exports: [OutsideInitComponent, InsideInitComponent],
})
export class LayoutModule {}
