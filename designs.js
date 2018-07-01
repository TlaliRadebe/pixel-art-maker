//document ready function. 
//clicking submit button
$('#sizePicker').submit(function(event) {
event.preventDefault();//prevent the element from submiting the form
makeGrid();//calling the function to make grid
});

//function to make a grid
function makeGrid() {
//defining and assigning row and coloumn variables
let r = $('#inputWeight').val();
let c = $('#inputHeight').val();
$('tr').remove();//remove the previous grid when creating a new one

for (let i = 1; i<= c; i++){    //nested loop to create the grid
    $('#pixelCanvas').append('<tr></tr>');
    for(let j = 1; j <=r; j++) {
        $('tr').last().append('<td></td>');
   }
}

$('td').click(function(){ //to colour the grid
    color = $('#colorPicker').val(); //assigning to the colour picked
    $(this).attr('style')? $(this).removeAttr('style'):
     $(this).attr('style', 'background-color:' + color); 
})
}
