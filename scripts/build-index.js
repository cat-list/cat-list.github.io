var lunr = require('lunr'),
  stdin = process.stdin,
  stdout = process.stdout,
  buffer = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (data) {
  buffer.push(data);
});

stdin.on('end', function () {
  var documents = JSON.parse(buffer.join(''));

  var idx = lunr(function () {
    this.ref('title');
    this.field('name');
    this.field('content');

    documents.forEach(function (doc) {
      this.add(doc);
    }, this);
  });

  stdout.write(JSON.stringify(idx));
});
