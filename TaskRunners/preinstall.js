if(process.env.npm_execpath.match('yarn')) {
    console.log('Use NPM instead of yarn!');
    process.exit(1);
}