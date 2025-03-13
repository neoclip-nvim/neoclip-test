import core from "@actions/core"
import exec from "@actions/exec"

const repository = core.getInput('repository')
const branch = core.getInput('branch')
const pluginManager = core.getInput('plugin-manager')

switch (pluginManager) {
  case 'neovim':
    // TODO
    exec.exec('echo NEoVim')
    break
  case 'lazy':
    // TODO set branch and repository
    // TODO pass the report filename
    const u = './actions/run-neoclip/lazy/init.lua'
    await exec.exec(`nvim -u ${u}`)

    let report = ''
    await exec.exec('cat', ['health.log'], {listeners: {
      stdout: (buffer) => { report += buffer.toString() }
    }})
    core.setOutput('report', report)
    break
    // TODO post-action: cleanup
  default:
    core.setFailed(`unknown plugin-manager: '${pluginManager}'`)
}
