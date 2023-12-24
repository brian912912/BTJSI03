class Circle {
    constructor(bankinh) {
      (this.bankinh = bankinh)
    }
  
    dientich() {
      return Math.PI * this.bankinh * this.bankinh;
    }
  
    chuvi() {
      return 2 * Math.PI * this.bankinh;
    }
  }
  
  class Rectangle {
    constructor(chieurong, chieucao) {
      (this.chieurong = chieurong),(this.chieucao = chieucao)
    }
  
    dientich() {
      return this.chieurong * this.chieucao;
    }
  
    chuvi() {
      return 2 * (this.chieurong + this.chieucao);
    }
  }
  
  class Triangle {
    constructor(canh1, canh2, canhday, chieucaotg) {
      (this.canh1 = canh1),(this.canh2 = canh2),(this.canhday = canhday),(this.chieucaotg = chieucaotg)
    }
  
    calculateArea() {
      return (canhday * this.chieucaotg) / 2
    }
  
    calculatePerimeter() {
      return this.side1 + this.side2 + this.canhday;
    }
  }
  