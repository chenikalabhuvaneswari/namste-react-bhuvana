module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react',{runtime:'automatic'}]
],
};

// babel is transpiler , it converts one form to another form 
// why presets 