const fs = require('fs')
const {open, writeFile} = require('node:fs/promises');

const getFileContents = async (filePath) => {
    const file = await open(filePath)

    const fh1 = await file.stat([])
    const buf1 = Buffer.alloc(fh1.size);
    const buffer1 = await file.read(buf1, 0, fh1.size, 0)
    const contents = buffer1.buffer.toString()

    return contents
}

const setupClickHandlers = () => {
 //            let re = /(.+)\(\)\s{([^}]*)\}/g
	// let matchesFuncs = [];
	// let matches = [];
	// let match;

	// while ((match = re.exec(writtenFile)) !== null) {
	// 	matchesFuncs.push(match[1]);
	// 	matches.push(match[2]);
	// }
	
	// matchesFuncs = matchesFuncs.map((matches) => matches.replace('async ','').replace('\t', ''))

	// matchesFuncs.slice(1,matchesFuncs.length-1).map((matchesFunc, i) => {
	// 	let stringArray = writtenFile.indexOf('onclick="this.')
	// 	let stringArrayEnd = writtenFile.indexOf(matchesFunc.trim() + '">')
	// 	const functionString = `(async () => {${matches[i+1]}})()`
	// 	writtenFile = writtenFile.replace(writtenFile.slice(stringArray+9, stringArrayEnd+matchesFunc.length), functionString)
	// })
}

(async () => {

    // directory path
    const file = './src/tmplts/Index.jsx'

    let indexContents = await getFileContents(file)
    const anchorContents = await getFileContents('./anchor.js')
    
    indexContents = "#" + " " + indexContents
    
    // dynamic anchoring
    const matchPackages = /(?<declaration>const|let) (?<component>.+) = require\('(?<package>.+)'\)/g
    
    let composedComponents = {}
    
    while ((packagesMatched = matchPackages.exec(indexContents)) !== null) {
        composedComponents[packagesMatched.groups.component] = {
            rawPackage: packagesMatched.groups.package,
            c: [],
            components: {}
        }
    }
    
    
    // build compilation tree
    let writtenFile = anchorContents.replace('#', indexContents.toString()).replace('module.exports = Index', '').replace('<>','\\`').replace('</>','\\`')
    
    var varsString = ''
    
    for(let k in composedComponents){
        let requiredLoading = await getFileContents('./src/tmplts/' + composedComponents[k].rawPackage.replace('./', ''))
        requiredLoading = "#" + " " + requiredLoading
        writtenFile = writtenFile.replace('#', requiredLoading.toString()).replace('module.exports = ' + k, '').replace('<>','\\`').replace('</>','\\`')
        writtenFile = writtenFile.replace(`const ${k} = require('${composedComponents[k].rawPackage}')`,'' )
        
        const re = /\<(?<component>[A-Z]+.+)\b(\s.+={.+})\/\>?/gm
        
        const matches1 = writtenFile.matchAll(re);
        for (const match of matches1) {
          console.log(match);
          if(!composedComponents[match.groups.component].c.includes(match[0])){
              composedComponents[match.groups.component].c.push(match[0])

          }
        }


        const membersRegex = /((?<key>\S+)={(.+?)})/g
        let keys = []
        Object.keys(composedComponents).map((k) => {
            for(const c of composedComponents[k].c){
                const matches2 = c.trim().matchAll(membersRegex);
                for (const match of matches2) {
                    if(match[2] == 'key') keys.push(match[3])
                }
            }
        })
        let i =0
        
        let count = 0
        
        keys.map((key) => {

            Object.keys(composedComponents).map((k) => {
                let i = 0;
                const arguments = []
                for(const c of composedComponents[k].c) {
                    const matches2 = c.trim().matchAll(membersRegex);
                    for (const match of matches2) {
                        arguments.push([match[2],match[3]])
                    }
                }
                
                let keyIncr = false
                let index = 0
                for(let i = 0; i < arguments.length; i++) {
                    if(arguments[i][0] == 'key') {
                        index = arguments[i][1]
                        if(keyIncr) keyIncr = false
                        else keyIncr = true
                        
                    }
                    
                    if(keyIncr == false && key == index){
                        keyIncr = true
                    }
                    if(keyIncr && key == index){
                        if(composedComponents[k].components[key]) composedComponents[k].components[key].push(arguments[i])
                        else composedComponents[k].components[key] = []
                    }
                }
            })
        })

        // await setupClickHandlers()
    }
    
    let index = 0;
    Object.entries(composedComponents).map(([k,v]) => {
        Object.entries(v.components).map(([keys, members]) => {
                const args = members.map((args) => args[1])
                varsString += `let ${k.toLowerCase()}${index++} = await (new ${k}(${args.toString()}));\n`
        })
    })

    const str = writtenFile;
    const str1 = varsString;
    const idx = writtenFile.indexOf('let index = new Index();') + 'let index = new Index();'.length;

    const s1 = str.slice(0, idx);
    const s2 = str.slice(idx);

    writtenFile = `${s1}\n\t\t${str1}${s2}`;
    let j=0
    for(let c in composedComponents){
        for(let k of composedComponents[c].c){
            const string = writtenFile 
            const stringToAdd = `main = main.replaceAll("${k}", await ${c.toLowerCase()+j}.view((await ${c.toLowerCase()+j++}.publicMembers())[0]))`;

            const index = writtenFile.indexOf('let main = contents;') + 'let main = contents;'.length;
            const s_1 = string.slice(0, index);
            const s_2 = string.slice(index);
            writtenFile = `${s_1}\n\t\t${stringToAdd}${s_2}`;

        }
    }
    

    // clean up sign anchors
    writtenFile = writtenFile.replace('#', '')
    writtenFile = writtenFile.replace('&)', '')
    
    // write to index
    await writeFile('./index.js', writtenFile)

})()
