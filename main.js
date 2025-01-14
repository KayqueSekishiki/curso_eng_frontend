// Função construtora base (abstração)
function Monster(name, type, hitPoints) {
  this.name = name;
  this.type = type;
  this.hitPoints = hitPoints;
}

Monster.prototype.attack = function () {
  console.log(`${this.name} ataca com fúria!`);
};

Monster.prototype.takeDamage = function (amount) {
  this.hitPoints -= amount;
  console.log(
    `${this.name} sofreu ${amount} de dano e agora tem ${this.hitPoints} pontos de vida.`
  );
  if (this.hitPoints <= 0) {
    console.log(`${this.name} foi derrotado!`);
  }
};

function Dragon(name, hitPoints, element) {
  Monster.call(this, name, "Dragão", hitPoints);
  this.element = element;
}

Dragon.prototype = Object.create(Monster.prototype);
Dragon.prototype.constructor = Dragon;

Dragon.prototype.attack = function () {
  console.log(`${this.name}, o dragão de ${this.element}, cospe fogo!`);
};

function Goblin(name, hitPoints, weapon) {
  Monster.call(this, name, "Goblin", hitPoints);
  this.weapon = weapon;
}

Goblin.prototype = Object.create(Monster.prototype);
Goblin.prototype.constructor = Goblin;

Goblin.prototype.attack = function () {
  console.log(
    `${this.name}, o goblin armado com um(a) ${this.weapon}, golpeia com rapidez!`
  );
};

const smaug = new Dragon("Smaug", 300, "fogo");
const grob = new Goblin("Grob", 50, "adaga enferrujada");
const minion = new Monster("Lacaio", "Desconhecido", 100);

smaug.attack();
grob.attack();
minion.attack();

grob.takeDamage(30);
smaug.takeDamage(310);
