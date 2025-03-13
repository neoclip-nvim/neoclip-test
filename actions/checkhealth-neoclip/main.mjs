import core from "@actions/core"
import exec from "@actions/exec"

const nvim = core.getInput('nvim')
const log = 'health.log'

exec.exec(`${nvim} +'checkhealth neoclip' +'w ${log}' +q`)
exec.exec('cat', log)
exec.exec('rm', log)

// TODO fail on fail
