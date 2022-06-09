import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'odo-filter-slider',
  templateUrl: './filter-slider.component.html',
  styleUrls: ['./filter-slider.component.scss'],
})
export class FilterSliderComponent {
  @Input() min: number;
  @Input() max: number;
  @Input() leftLabel: string;
  @Input() type: string;
  @Output() selectedValue = new EventEmitter<string>();
  public rightLabel: string;

  onSliderInputChange(matSliderChange: MatSliderChange): void {
    if (this.type) {
      if (this.type === '%') {
        if (matSliderChange.value) {
          let value = matSliderChange.value.toString();
          this.selectedValue.emit(value.concat(this.type));
          this.rightLabel = matSliderChange?.value
            ?.toString()
            ?.concat(this.type);
        }
      }
    }
  }
}
