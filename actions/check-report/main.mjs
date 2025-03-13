import core from "@actions/core"
import exec from "@actions/exec"

const report = core.getMultilineInput('report')

if (/ERROR/.test(report)) {
  core.setFailed('ERROR in report')
}

if (!/OK/.test(report)) {
  core.setFailed('no OK in report')
}
