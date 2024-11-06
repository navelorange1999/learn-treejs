// generate-example-list.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateExampleList() {
  const exampleDir = path.join(__dirname, "../example");
  const outputFilePath = path.join(__dirname, "../example/example-list.json");

  const examples = fs
    .readdirSync(exampleDir)
    .filter((file) => fs.statSync(path.join(exampleDir, file)).isDirectory());

  const exampleList = examples.map((example) => ({
    name: example,
    url: `./example/${example}/index.html`,
  }));

  fs.writeFileSync(outputFilePath, JSON.stringify(exampleList, null, 2));
  console.log("Example list generated:", exampleList);
}

generateExampleList();