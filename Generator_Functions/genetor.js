function* simpleGenetor(){
    console.log("Start");
    yield 1;
    console.log("Resume");
    yield 2;
    console.log('End');
    
}

const generator = simpleGenetor();
console.log(generator.next());
console.log(generator.next());
console.log( typeof generator.next());
