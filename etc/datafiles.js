const files = {}

files.datadir = __dirname + "/../data",
files.users = `${files.datadir}/users.csv`,
files.notes = `${files.datadir}/notes.csv`
files.note_counter = `${files.datadir}/note_count`

module.exports = files