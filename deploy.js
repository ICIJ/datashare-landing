import gh from 'gh-pages'
import path from 'path'
import chalk from 'chalk'

process.env.NODE_ENV = 'production'

gh.publish(path.join(process.cwd(), 'dist'), (err) => {
  if(err){
    console.error("error ",err)
  } else {
    console.log(chalk.cyan('  Push complete.\n'))
  }
})
