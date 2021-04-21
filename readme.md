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
- [ ] Instead of loading the entire text file into a memory would be better to work with some sortf of index file
  - [ ] Generate index file; Format yet to be defined
  - [ ] Use method [fs.read(fd, buffer, offset, length, position, callback)](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback) for searching withing the index