import ChallengeElement from './ChallengeElement.js';

export default class ElementPosition {
  private readonly x: number;
  private readonly y: number;
  private element: ChallengeElement;

  public constructor(x: number, y: number, element: ChallengeElement) {
    this.x = x;
    this.y = y;
    this.element = element;

    // Automatically make the element visually match the position
    this.element.setPosX(x);
    this.element.setPosY(y);
  }

  public setElement(newElement: ChallengeElement): void {
    this.element = newElement;
    this.element.setPosX(this.x);
    this.element.setPosY(this.y);
  }

  public getElement(): ChallengeElement {
    return this.element;
  }

  public getPosX(): number {
    return this.x;
  }

  public getPosY(): number {
    return this.y;
  }
}