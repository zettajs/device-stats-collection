var zetta = require('zetta');

var KairosDbCollector = require('../collection-kairosdb');
var kairos = new KairosDbCollector({
  host: process.env.KAIROS_HOST,
  port: process.env.KAIROS_PORT || 8080
});

var InfluxDbCollector = require('../collection-influxdb');
var influx = new InfluxDbCollector({
  host: process.env.INFLUX_HOST,
  port: process.env.INFLUX_PORT || 8086,
  username: process.env.INFLUX_USER,
  password: process.env.INFLUX_PASSWORD,
  database: process.env.INFLUX_DATABASE
});

var hub = zetta()
  .name('cloud')
  .use(kairos.collect())
  .use(influx.collect())
  .listen(5000);
