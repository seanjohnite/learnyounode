var sum = process.argv.slice(2).reduce(function(mem, item) {return mem + Number(item)}, 0);

console.log(sum);