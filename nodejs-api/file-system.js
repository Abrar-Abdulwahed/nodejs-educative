const fs = require("fs").promises;
const getStats = async path => {
    try {
      const stats = await fs.stat(path);
      console.log(stats);
      console.log(`isFile: ${stats.isFile()}`);
      console.log(`isDirectory: ${stats.isDirectory()}`);
  
    } catch (error) {
      console.error(error);
    }
  };
//   getStats('./test.txt');

  const readFile = async (path) => {
    try{
        const contents = await fs.readFile(path, 'utf8');
        console.log(contents);
    }catch(err){
        console.error(err);
    }
  }

  const writeToFile = async (path, data) => {
    try{
        await fs.writeFile(path, data);
    }catch(err){
        console.error(err);
    }
  }

  const appendToFile = async (path, data) => {
    try{
        await fs.appendFile(path, data)
    }catch(err){
        console.error(err)
    }
  }
// writeToFile("./test.txt", "Hello")
appendToFile("./test.txt", " every one")
readFile("./test.txt")
  