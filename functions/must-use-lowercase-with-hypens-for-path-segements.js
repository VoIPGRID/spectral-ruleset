const rePathParam = new RegExp('^(\{.*\})$');
const reRegularHypenedWord = new RegExp('^([\/a-z][a-z0-9\-\/]*)$');


const check = (path) => {
  const parts = path.split('/');
  parts.forEach((part) => {
    if (part != '' && !part.match(rePathParam) && !part.match(reRegularHypenedWord)){
      console.log(part, part.match(rePathParam), part.match(reRegularHypenedWord));
      throw 'Path must only use hypens and lower case!';
    }
  });
};


export default path => {
  try {
    check(path);
  } catch (ex) {
    return [
      {
        message: ex,
      },
    ];
  }
};