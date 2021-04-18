const crypto = require('crypto')
const fs = require('fs')
const readline = require('readline')

async function readFile(path) {
  return new Promise((accept) => {
    const rl = readline.createInterface(fs.createReadStream(path))
    const data = []
    rl.on('line', (input) => data.push(input))
    
    rl.on('close', () => accept(data))
  })
}


async function main() {
  const nouns = await readFile('./data/nouns.txt')
  const adjectives = await readFile('./data/adjectives.txt')

  const randomWord = (wset) => {
    const n = crypto.randomInt(0, wset.length)
    return wset[n]
  }

  const passphrase = (pairs, d) => {
    if (!d) d = " "
    if (typeof pairs !== 'number') pairs = 1
    if (pairs < 1 && pairs > 10) return
    if (d.length > 1 || ' _-'.indexOf(d) < 0) return

    let result = []
    
    while (pairs > 0) {
      result.push(randomWord(adjectives))
      result.push(randomWord(nouns))
        
      pairs--
    }
    
    return result.join(d)
  }

  console.log(passphrase(1))
}

main().catch(console.error)