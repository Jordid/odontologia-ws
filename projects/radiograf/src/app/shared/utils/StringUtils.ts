export class StringUtils {
  public static cutText(text: string, size: number): string {
    let cut: string = '';
    if (text && size) {
      if (text.length <= size) {
        cut = text;
      } else {
        cut = text.substring(0, size - 1);
      }
    }
    return cut;
  }

  public static cutAddingThreePointsAtEnd(text: string, size: number): string {
    let cut: string = this.cutText(text, size);
    if (text && text.length <= size) {
      return cut;
    } else {
      cut = text.substring(0, size - 1);
      if (cut) {
        cut = cut + '...';
      }
    }
    return cut;
  }
}
