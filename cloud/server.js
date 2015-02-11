var zetta = require('zetta');

var KairosDbCollector = require('../collection-kairosdb');
var collector = new KairosDbCollector({
  host: 'ec2-52-0-199-129.compute-1.amazonaws.com',
  port: 8080
});

var hub = zetta()
  .name('cloud')
  .use(collector.collect())
  .listen(5000);
