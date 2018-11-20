const Engine = Matter.Engine
const Render = Matter.Render
const World = Matter.World
const Bodies = Matter.Bodies
const engine = Engine.create({
  timing:{
    timeScale: 0.25
  }
})
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 320,
    height: 240
  }
});

const fixPos = (x, y, w, h) => [x + (w / 2), y + (h / 2), w, h]
const toRad = (Math.PI * 2) / 360
const $wall = {
  isStatic: true
};
const $yoko = {
  angle: 90 * toRad
};
const _rect = [16, 32];
const _cube = [32, 32];

const genRect = (x, y, angle) => Bodies.rectangle(...fixPos(x, y, 16, 32), {
  angle: angle * toRad
});
const genCube = (x, y, angle) => Bodies.rectangle(...fixPos(x, y, 32, 32), {
  angle: angle * toRad
});

const walls = [
  Bodies.rectangle(...fixPos(0, 0, 320, 40), $wall),
  Bodies.rectangle(...fixPos(0, 200, 320, 40), $wall),
  Bodies.rectangle(...fixPos(-10, 0, 10, 240), $wall),
  Bodies.rectangle(...fixPos(320, 0, 10, 240), $wall),
];
const items = [
  genRect(112, 160, 0),
  genRect(112, 144, 90),
  genRect(128, 112, 0),
  genRect(112, 96, 90),
  genRect(128, 64, 0),
  genRect(112, 48, 90),
];

const objects = [
  ...walls,
  ...items,
]

World.add(engine.world, objects);
Engine.run(engine);
Render.run(render);