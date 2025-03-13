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
    const u = './actions/run-neoclip/lazy/init.lua'
    exec.exec(`nvim -u ${u}`)
    break
    // TODO post-action: cleanup
  default:
    core.setFailed(`unknown plugin-manager: '${pluginManager}'`)
}
