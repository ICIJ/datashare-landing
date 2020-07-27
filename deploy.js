const gh = require('gh-pages');
const path = require('path');
const chalk = require('chalk')

process.env.NODE_ENV = 'production'

gh.publish(path.join(process.cwd(), 'dist'), () => {
  console.log(chalk.cyan('  Push complete.\n'))
});
