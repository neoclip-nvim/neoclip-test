import core from "@actions/core"
import exec from "@actions/exec"

const log = 'health.log'

exec.exec('cat', log)
exec.exec('rm', log)

// TODO fail on fail
