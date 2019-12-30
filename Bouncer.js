class Bouncer {
    constructor(x, y, s, xMov, yMov) {
      this.x = x
      this.y = y
      this.s = s
  
      this.xMov = xMov
      this.yMov = yMov
  
      this.r = random(255)
      this.g = random(255)
      this.b = random(255)
      this.a = random(255)
    }
    show() {
      fill(this.r, this.g, this.b, this.a)
      ellipse(this.x, this.y, this.s)
    }
    move() {
      this.x += this.xMov
      this.y += this.yMov
  
  
      this.s -= 0.5
    }
  }