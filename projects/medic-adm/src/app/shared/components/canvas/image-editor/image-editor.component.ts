import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'odo-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss'],
})
export class ImageEditorComponent implements AfterViewInit {
  @Input() imageSrc: string;

  public filtersString =
    'brightness(100%) contrast(100%) invert(100%) sepia(100%)';
  private image = null;
  private espacioW: number = 0;
  private espacioH: number = 0;

  /** Template reference to the canvas element */
  @ViewChild('canvasElement') canvasElement: ElementRef;

  /** Canvas 2d context */
  private context: CanvasRenderingContext2D;

  ngAfterViewInit() {
    this.context = (
      this.canvasElement.nativeElement as HTMLCanvasElement
    ).getContext('2d');

    this.image = new Image();
    console.log("imageSrc: ", this.imageSrc);

    this.image.src = this.imageSrc;
    this.image.onload = () => this.drawImage(this.image, this.canvasElement);
  }

  drawImage(image: any, canvas: any) {
    canvas.width = image.width;
    canvas.height = image.height;
    this.context.drawImage(image, 0, 0);

    this.applyFilters();
  }

  applyFilters() {
    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
    this.context.filter = this.filtersString;
    this.context.drawImage(
      this.image,
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
    if (this.context.canvas.width > 10 && this.context.canvas.height > 10) {
      // filtroColor('#4a0');
    }
  }

  onFiltersChange(filters: string) {
    this.filtersString = filters;
    this.applyFilters();
  }
}
