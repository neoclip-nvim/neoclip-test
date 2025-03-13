import core from "@actions/core"
import exec from "@actions/exec"

const report = core.getInput('report')

exec.exec('echo report')

// TODO fail on fail
