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
            components: []
        }
    }
    
    console.log(composedComponents)
    
    // build compilation tree
    let writtenFile = anchorContents.replace('#', indexContents.toString()).replace('module.exports = Index', '').replace('<>','\\`').replace('</>','\\`')
    
    var varsString = ''
    
    for(let k in composedComponents){
        let requiredLoading = await getFileContents('./src/tmplts/' + composedComponents[k].rawPackage.replace('./', ''))
        requiredLoading = "#" + " " + requiredLoading
        writtenFile = writtenFile.replace('#', requiredLoading.toString()).replace('module.exports = ' + k, '').replace('<>','\\`').replace('</>','\\`')
        writtenFile = writtenFile.replace(`const ${k} = require('${composedComponents[k].rawPackage}')`,'' )
        
        // skittle a member and get arguments
        // add to template
        // append to array
        const re = /\<(?<component>[A-Z]+.+)\b(\s.+={.+})\/\>?/gm
        
        const matches1 = writtenFile.matchAll(re);
        for (const match of matches1) {
          // console.log(match);
          // console.log(match.index)
          composedComponents[match[1]].c.push(match[0])
          // break;
        }
        
        // composedComponents[s.groups.component] = {
        //     rawComponent: s[0],
        //     ...composedComponents[s.groups.component]
        // }

        const membersRegex = /((?<key>\S+)={(.+?)})/g
        let keys = []
        Object.keys(composedComponents).map((k) => {
            for(const c of composedComponents[k].c){
                const matches2 = c.trim().matchAll(membersRegex);
                for (const match of matches2) {
                    console.log('k')
                    if(match[2] == 'key') keys.push(match[3])
                }
            }
        })
                        let i =0

        Object.keys(composedComponents).map((k) => {
            for(const c of composedComponents[k].c){
                const matches2 = c.trim().matchAll(membersRegex);
                const arguments = []
                for (const match of matches2) {
                  console.log(match);
                  if(match.groups.key != 'key') {
                      arguments.push([match[2],match[3]])
                      const obj = {}
                      obj[keys[i++]] = arguments
                    composedComponents[k].components = [...composedComponents[k].components, obj]
                  }
                }
            }
        })
        
        
        // const arguments = []
        // for (const match of matches2) {
        //   console.log(match);
        //   arguments.push(match[3])
        //   console.log(match.index)
        // }
        
        // varsString += `let ${k.toLowerCase()}${Date.now()} = await (new ${k}(${arguments.toString()})).view();\n`
        
        // await setupClickHandlers()
    }
    
    console.log(JSON.stringify(composedComponents))
    let index = 0;
    Object.entries(composedComponents).map(([k,v]) => {
        console.log(k)
        console.log(v)
        v.components.map((c) => {
            console.log(c)
            Object.values(c).forEach((v) => {
            console.log(v)
                varsString += `let ${k.toLowerCase()}${index++} = await (new ${k}(${v[0][1]})).view();\n`
            })

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
    console.log('-------')
    console.log(c)
    console.log(composedComponents[c].c)
        for(let k of composedComponents[c].c){
            console.log(k)
            const string = writtenFile 
            const stringToAdd = `main = main.replaceAll("${k}", ${c.toLowerCase()+j++})`;
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
