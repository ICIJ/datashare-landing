import gh from 'gh-pages'
import path from 'path'
import chalk from 'chalk'
const ora = require('ora')

process.env.NODE_ENV = 'production'
const spinner = ora('push dist folder to gh-pages branch...')
spinner.start()

gh.publish(path.join(process.cwd(), 'dist'), () => {
  spinner.stop()
  console.log(chalk.cyan('  Push complete.\n'))
})
