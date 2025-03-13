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
    const u = './actions/install-neoclip-nolib/lazy/init.lua'
    const nvim = `nvim -u ${u}`
    exec.exec(`${nvim} +'au LazyInstall * q'`)
    core.setOutput('nvim', nvim)
    break
    // TODO post-action: cleanup
  default:
    core.setFailed(`unknown plugin-manager: '${pluginManager}'`)
}
