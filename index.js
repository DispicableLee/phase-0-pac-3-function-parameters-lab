function introduction(name){
    return `Hi, my name is ${name}`
}

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}`
}

function introductionWithLanguageOptional(name, language){
    const string = `${language}`
    if(string != "javascript"){
        let string = "javascript"
        return (`Hi, my name is ${name}, and I am learning to program in ${string}`)
    }else{
        return (`Hi, my name is ${name}, and I am learning to program in ${language}`)
    }
}
console.log(introductionWithLanguageOptional("rob", "C++"))