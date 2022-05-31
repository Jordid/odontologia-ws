import { Component, Input } from '@angular/core';

@Component({
  selector: 'odo-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
})
export class FilePreviewComponent {
  @Input() urlFile: string;
}
