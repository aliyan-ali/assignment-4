var names=new Array();
names[0]="yasmeen";
names[1]="johnSeanaa";
names[2]="jenoid";
names[3]="jeason";
names[4]="pcaul";
names[5]="franklin";
names[6]="leash";
names[7]="chris";
names[8]="jeepra";
names[9]="jimmy";

for (var i = 0; i < names.length; i++) {
	if (names[i].charAt(0)=='j' || names[i].charAt(0)=='J') {
		console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}

