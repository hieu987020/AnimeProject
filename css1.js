var a = ["big2.jpg","big3.jpg","big4.jpg","big5.jpg"];
var i = 0;
function next() {
	if(i < a.length - 1){
		i++;
		var t = document.getElementById("i1");
		t.src = a[i];		
	}

}

function back() {
	if(i > 0){
		i--;
		var t = document.getElementById("i1");
		t.src = a[i];		
	}
	
}