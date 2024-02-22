const welcome = (req, res) => {
  res.json({ message: "Bienvenue dans l'API d'une calculatrice !" });
};

const add = (req, res) => {
  const { a, b } = req.body;
  const result = parseFloat(a) + parseFloat(b);
  res.json({ result });
};

const subtract = (req, res) => {
  const { a, b } = req.body;
  const result = parseFloat(a) - parseFloat(b);
  res.json({ result });
};

const multiply = (req, res) => {
  const { a, b } = req.body;
  const result = parseFloat(a) * parseFloat(b);
  res.json({ result });
};

const divide = (req, res) => {
  const { a, b } = req.body;
  if (parseFloat(b) === 0) {
      res.status(400).json({ error: "La division par zéro n'est pas autorisée" });
      return;
  }
  const result = parseFloat(a) / parseFloat(b);
  res.json({ result });
};

module.exports = { welcome, add, subtract, multiply, divide };
