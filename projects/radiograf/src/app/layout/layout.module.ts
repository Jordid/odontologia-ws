import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/inside/footer/footer.component';
import { ToolbarComponent } from './components/inside/toolbar/toolbar.component';
import { OutsideInitComponent } from './components/outside/outside-init/outside-init.component';

@NgModule({
  declarations: [OutsideInitComponent, ToolbarComponent, FooterComponent],
  imports: [CommonModule],
  exports: [OutsideInitComponent],
})
export class LayoutModule {}
