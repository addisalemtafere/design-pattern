const fs = require('fs');

class Journal {
    constructor() {
        this.entries = {}
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}:${text}`;
        this.entries[c] = entry;
        return c;

    }

    removeEntry(index) {
        delete this.entries(index)
    }

    toString() {
        return Object.values(this.entries).join("\n");
    }

    saveFile(fileName) {
        fs.writeFileSync(fileName, this.toString())
    }


}

Journal.count = 0;
let j = new Journal();
j.addEntry("hello one ")
j.addEntry("hello two ")

console.log(j.toString())
const name = "D:\\my-project\\Design pattern practise\\Journal.text"
j.saveFile(name);
