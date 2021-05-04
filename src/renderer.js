const remote = require('electron').remote
const { app } = remote

exports.all = async () => {

    app.quit()

}