# ignite-react-book

## Configurando o Babel

https://babeljs.io/

### Babel é um compilador JavaScript
Babel é um conjunto de ferramentas usado principalmente para converter o código ECMAScript 2015+ em uma versão compatível com versões anteriores de JavaScript em navegadores ou ambientes atuais e mais antigos. Aqui estão as principais coisas que o Babel pode fazer por você

```bash
yarn add @babel/core @babel/cli @babel/preset-env -D
yarn add @babel/preset-react -D

yarn babel src/index.js --out-file dist/bundle.js
./node_modules/.bin/babel src/index.jsx --out-file dist/bundle.js
```

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

## Configurando o Webpack
https://webpack.js.org/

```bash
yarn add webpack webpack-cli webpack-dev-server -D
```

configurar webpack.config.js web

yarn webpack