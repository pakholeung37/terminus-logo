import fs from 'fs'
import path from 'path'
import {
  componentToAngular,
  componentToReact,
  componentToSolid,
  componentToSvelte,
  componentToVue,
  parseJsx,
} from '@builder.io/mitosis'

async function start() {
  const svgPath = `${path.resolve(
    __dirname,
    '../packages/svg/lib/terminus-logo.svg',
  )}`
  let svgContent: string = ''
  try {
    svgContent = (await fs.promises.readFile(svgPath, 'utf8')).replace(
      '>',
      ' {...props}>',
    )
  } catch (e) {
    throw e
  }
  const mitosisTemplate = `
    export default function Logo(props: any) {
      return ${svgContent}
    }
  `
  const mitosisComponent = parseJsx(mitosisTemplate)

  const transpilers = [
    {
      target: 'vue',
      transpiler: componentToVue({ vueVersion: 3 }),
      ext: 'vue',
    },
    { target: 'angular', transpiler: componentToAngular(), ext: 'ts' },
    { target: 'react', transpiler: componentToReact(), ext: 'tsx' },
    { target: 'solid', transpiler: componentToSolid(), ext: 'tsx' },
    { target: 'svelte', transpiler: componentToSvelte(), ext: 'svelte' },
  ]

  transpilers.forEach(async ({ target, transpiler, ext }) => {
    const result = transpiler({ path: '', component: mitosisComponent })
    try {
      const outputPath = `${path.resolve(
        __dirname,
        '../packages/',
      )}/${target}/src`
      await fs.promises.mkdir(outputPath, {
        recursive: true,
      })
      await fs.promises.writeFile(`${outputPath}/index.${ext}`, result)
      console.log(`Generated ${`${outputPath}/index.${ext}`}`)
    } catch (e) {
      console.error(e)
    }
  })
}

start()
