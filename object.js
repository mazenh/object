var me={
	"eyesColor":"brown",
	"name":"mazen",
	"height":"180"+"cm",
};
document.write('my name is: '+me.name+'<br>' + 'my eyes color is: ' +me.eyesColor+ '<br>' + 'my height is : '+me.height+ '<br>' );

me.eyesColor="green";

var me={
	"eyesColor":"brown",
	"name":"mazen",
	"height":"180"+"cm",
	"location":"israel?",
	"city": "haifa?",
};

document.write( 'are you from ' +me.location+ '<br>' + 'city ' + me.city+'<br>' );

me.languages={
    "a":"english ?",
	"b":"hebrew ?",
	"c":"russian ?",
};

document.write('do you speak one of the following languages ? ' + '<br>'+ (me.languages.a)+(me.languages.b)+(me.languages.c));


document.write('<br>' + 'the type of hebrew is: '+ typeof(me.languages.b));
