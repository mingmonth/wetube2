import app from "./app";
const app = express();

const PORT = 4000;

const handleListening = (req, res) =>
  console.log(`Listeninig on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
