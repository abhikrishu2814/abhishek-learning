const http = require('http');

http.createServer((req, res) => {
  res.end("🚀 CI/CD Working via Jenkins + Docker + automationpush + dockerhub");
}).listen(3000);