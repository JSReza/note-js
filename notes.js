const notes = []
const displayNotes = function(notes){
     document.getElementById('notes').innerHTML = ''
    if(notes.length < 1){
        const message = document.createElement('p')
        message.textContent = "No notes added"
        document.getElementById('notes').appendChild(message)
    }else{
        notes.forEach(function(note){
            const newNote = document.createElement('li')
            newNote.textContent= note
            document.getElementById('notes').appendChild(newNote)
        })
    }
}
document.querySelector('#form').addEventListener('submit', function(e){
    e.preventDefault()
    const newNote = e.target.elements.input.value
    notes.push(newNote)
    e.target.elements.input.value = ' '
    displayNotes(notes)

})
document.getElementById('clear-btn').addEventListener('click', function(e){
    notes.length = 0
    displayNotes(notes)
})
displayNotes(notes)