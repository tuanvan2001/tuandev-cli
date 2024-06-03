# tuandev-cli
Create an express project:
```shell
npx tuandev-cli@latest express-sample
```
Install packages:
```shell
cd express-sample
npm install
```
(Option) Using docker compose to run mysql and redis servers:
```shell
docker-compose -f db.yml up -d
```
Run the server:
```shell
node index.js
```