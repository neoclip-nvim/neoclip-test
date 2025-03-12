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
    // TODO
    exec.exec('echo LaZy')
    break
  default:
    core.setFailed(`unknown plugin-manager: '${pluginManager}'`)
}
