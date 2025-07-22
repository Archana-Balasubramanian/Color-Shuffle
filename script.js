
$('#add_button').on('click', function () {
    var selectedColor = $('#color_input').val();

    console.log(selectedColor)

    var div = $(`<div style="background-color: ${selectedColor}"> ${selectedColor };</div>`)
    div.css('width','200px')
    div.css('height','100px')
    div.css('display', 'flex')
    div.css('justify-content', 'center')
    div.css('align-items', 'center')
    div.css('color', 'white')

   



    $('#box_container').append(div)
})