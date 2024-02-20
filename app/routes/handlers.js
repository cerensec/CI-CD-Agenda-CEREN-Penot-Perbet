function welcome(req, res) {
  res.send('Welcome to the default route');
}

function add(req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.send((a + b).toString());
}

module.exports = { welcome, add};