var zetta = require('zetta');
var SineWave = require('zetta-photocell-mock-driver');
var LED = require('zetta-led-mock-driver');
var AutoScout = require('zetta-auto-scout');

var hub = zetta()
  .name('detroit')
  .use(LED)
  .use(AutoScout, 'led', LED, 1)
  .use(AutoScout, 'led', LED, 2)
  .use(AutoScout, 'photocell', SineWave, 1)
  .use(AutoScout, 'photocell', SineWave, 2)
  .link('http://localhost:5000')
  .listen(5001);
