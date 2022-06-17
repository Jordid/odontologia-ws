import {
  AfterViewChecked, Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'odo-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss'],
})
export class ImageEditorComponent implements AfterViewChecked {
  @Input() imageSrc: string;

  public filtersString: string;
  private image: any;

  /** Template reference to the canvas element */
  @ViewChild('canvasElement') canvasElement: ElementRef;

  /** Canvas 2d context */
  private context: CanvasRenderingContext2D;
  private height: number;
  private width: number;

  ngAfterViewChecked() {
    let nativeElement = this.canvasElement?.nativeElement;
    if (nativeElement) {
      nativeElement = nativeElement as HTMLCanvasElement;
      this.context = this.canvasElement.nativeElement.getContext('2d');

      this.image = new Image();
      this.image.src = this.imageSrc;
      this.image.onload = () => this.drawImage(this.image, this.canvasElement);
    }
  }

  drawImage(image: any, canvas: any) {
    canvas.width = image.width;
    canvas.height = image.height;
    this.height = image.height;
    this.width = image.width;
    this.context.drawImage(image, 0, 0);

    this.applyFilters();
  }

  applyFilters() {
    this.context.clearRect(0, 0, this.width, this.height);

    if (this.filtersString) {
      this.context.filter = this.filtersString;
    }

    this.context.drawImage(this.image, 0, 0, this.width, this.height);
    if (this.context.canvas.width > 10 && this.context.canvas.height > 10) {
      //  filtroColor('#4a0');
    }
  }

  onFiltersChange(filters: string) {
    this.filtersString = filters;
    this.applyFilters();
  }
}
