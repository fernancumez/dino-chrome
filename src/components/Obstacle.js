class Obstacle {
  constructor(x, size, horizon, color) {
    this.x = x;
    this.y = horizon - size;

    this.size = size;
    this.color = color;

    this.onScreen = true;
  }

  /**
   *	handle x and onScreen values
   */

  update(speed) {
    /* check if offscreen */
    this.onScreen = this.x > -this.size;

    /* movement */
    this.x -= speed;
  }

  draw() {
    fill(this.color);
    stroke(255);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size);
  }

  /**
   * checks for collisions
   */

  hits() {
    let halfSize = this.size / 2;
    let minimumDistance = halfSize + dino.radius; // closest before collision

    /* find center coordinates */
    let xCenter = this.x + halfSize;
    let yCenter = this.y + halfSize;

    let distance = dist(xCenter, yCenter, dino.x, dino.y); // calculate distance from centers

    return distance < minimumDistance; // return result
  }
}
