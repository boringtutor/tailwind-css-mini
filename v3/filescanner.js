import { promises as fs } from 'fs';
import {glob} from 'glob';


export async function findUsedClasses(pattern) {
    const files = glob.sync(pattern);
    let classes = new Set();
  
    for (const file of files) {
      const content = await fs.readFile(file, 'utf8');
      const matches = content.match(/class="[^"]+"/g);
      if (matches) {
        matches.forEach(match => {
          match.replace(/class="(.+?)"/g, (_, classList) => {
            classList.split(/\s+/).forEach(cls => classes.add(cls));
          });
        });
      }
    }
  
    return classes;
  }
