var zetta = require('zetta');

var KairosDbCollector = require('../collection-kairosdb');
var kairos = new KairosDbCollector({
  host: 'ec2-52-0-199-129.compute-1.amazonaws.com',
  port: 8080
});

var InfluxDbCollector = require('../collection-influxdb');
var influx = new InfluxDbCollector({
  host: 'ec2-52-0-199-129.compute-1.amazonaws.com',
  port: 8086,
  username: 'zetta',
  password: '12345',
  database: 'test-db'
});

var hub = zetta()
  .name('cloud')
  .use(kairos.collect())
  .use(influx.collect())
  .listen(5000);
