$(document).ready( function() {

	var darth = "https://i.imgur.com/BtNqTAp.jpg";
	var patrick = "https://i.imgur.com/izzpeRb.jpg";
	var spider = "https://i.imgur.com/TjKJKa7.jpg";
	var tesla = "https://i.imgur.com/S3b0qFS.jpg";
	var apple = "https://i.imgur.com/BOZenzg.png";
	var donald = "https://i.imgur.com/x7Z28NC.jpg";
 
	
	var imgArr = [darth, patrick, spider, tesla, apple, donald,	
				  donald, apple, tesla, spider, patrick, darth];

	createFrontImgs();

	function createFrontImgs()	{
		for (i = 0; i < 12; i++) {
    	var myImage = new Image(150, 150);
    	myImage.src = "https://i.imgur.com/gdFICEX.png";

    	$('#frontImgs').append(myImage);

   		var id = "f" + i;
    	$(myImage).attr('id', id)
		}
	}

	i = 0;
	var firstPick = 0;
	var secondPick = 1;
	$('#frontImgs').on('click', 'img', function()	{
		if (firstPick === secondPick) {
			console.log("It's a Match!")
		} 
		if (i == 0 || i % 2 == 0)	{
			console.log($(this).attr('src'));
			$(this).attr('src', imgArr[i++]);
			firstPick = imgArr[i];
		} else if (i == 1 || i % 2 == 1)	{
			$(this).attr('src', imgArr[i++]);
			secondPick = imgArr[i];
		} 
	})
});