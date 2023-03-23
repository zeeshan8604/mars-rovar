
var input = $("#datepicker").datepicker({ dateFormat: 'yy-mm-dd' });
function ShowImage(e){
    e.preventDefault();
    var Date=input.val();
    if( Date === "") {
        alert("Please fill the field");
        return;
    }
    let url="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+Date+"&api_key=DEMO_KEY";
    $.get(url, function(data){
        let photos=data.photos;
        
        if(photos.length === 0 ) {
            alert("No photos available for this date");
            return;
        }
        for(let photo of photos){
            $(document.createElement('img')).attr('src',photo.img_src).appendTo('#image-container');
        }
    })
}

$('#btn').click(ShowImage)