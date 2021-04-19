## Passphrase Nodejs

**TODO**
  
- [x] load nouns from data/nouns.txt
- [x] load ajectives from data/adjectives.txt
- [x] create a function that accepts two arguments
- [x] first argument (number of pairs) is a positive number between 1 and 10 as a first argument. if not specified default is 1
- [x] second argument (delimeter) is a string character from the string " _-". if not specified default to " " (space)
- [x] function must return a random pair of noun and ajective separated by a delimeter character. number of pairs must be determined by a first argument (minimum 1)
- [x] run it as cli command `passphrase`
- [x] cli option `--pair -p int` - number of pairs (1..256)
- [x] cli option `--delimeter -d str` - word delimeter (" ", "-", "_")
- [ ] add ability to install via `npm install -g @fupslot/passphrase`