import gh from 'gh-pages'
import path from 'path'
import chalk from 'chalk'

process.env.NODE_ENV = 'production'

gh.publish(path.join(process.cwd(), 'dist'), () => {
  console.log(chalk.cyan('  Push complete.\n'))
})
