var Particle = function(x, y) {

  this.posicion = createVector(x, y);
  this.velocidad = createVector(1, 0);

  this.update = function() {
    var aux = createVector(0,0);
    aux.add(this.velocidad);
    aux.add(this.posicion);
    aux.y =50 +( 50 * Math.sin(this.posicion.x) );
    this.posicion.set(aux);

    //this.posicion.add(this.velocidad);
  };

  this.display = function() {
    fill(255);
    ellipse(this.posicion.x, this.posicion.y, 10);
  };

// x = 20 y 30
//aux.x = 21, aux.y = 30
//aux.y = .2129
//posicion x = 41, 30.2129


};
