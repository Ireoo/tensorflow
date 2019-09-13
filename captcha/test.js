const gm = require("gm");

const file = process.argv[2];

gm(file).format(function(err, value) {
  // note : value may be undefined
  console.log(`format ->`, err, value);
});

gm(file).size(function(err, value) {
  // note : value may be undefined
  console.log(`size ->`, err, value);
});

gm(file).depth(function(err, value) {
  // note : value may be undefined
  console.log(`depth ->`, err, value);
});

gm(file).color(function(err, value) {
  // note : value may be undefined
  console.log(`color ->`, err, value);
});

gm(file).res(function(err, value) {
  // note : value may be undefined
  console.log(`res ->`, err, value);
});

gm(file).filesize(function(err, value) {
  // note : value may be undefined
  console.log(`filesize ->`, err, value);
});

gm(file).identify(function(err, value) {
  // note : value may be undefined
  console.log(`identify ->`, err, value);
});

gm(file).orientation(function(err, value) {
  // note : value may be undefined
  console.log(`orientation ->`, err, value);
});
