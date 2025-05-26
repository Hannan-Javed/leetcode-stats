const app = require('./index');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Test server running on http://localhost:${PORT}`);
});
