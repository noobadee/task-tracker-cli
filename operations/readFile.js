import fs from 'node:fs';
import { filePath } from '../db/path.js';

export function readFile() {
  // Create a JSON file if it does not exists
  if (!fs.existsSync(filePath)) { fs.writeFileSync(filePath, JSON.stringify([])); }

  // Return the converted JSON as object
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}