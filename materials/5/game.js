//③-1 イベント処理定義==================================
canvas1.addEventListener(
	"mousedown",
	(e)=>{
		ball1.x = player1.x;
		ball1.y = player1.y; 
	}
);

canvas1.addEventListener(
	"mousemove",
	(e)=>{
		const rect = e.target.getBoundingClientRect();
		player1.x = e.clientX-rect.left;
	}
);

//③-2 関数定義===============================
function clearDraw(canvas){
	ctx1.clearRect(0, 0, canvas.width, canvas.height);
}

function rectDraw(rect){
	ctx1.fillStyle = rect.color;
	ctx1.fillRect(rect.x-rect.w/2, rect.y-rect.h/2, rect.w, rect.h);
}

function pointDraw(point){
	ctx1.fillStyle = "black";
	ctx1.font = "20px sans-serif";
	ctx1.fillText(point.value, 0, 400);
}

function rectCal(canvas,target,ball,point,audio){
//移動
	target.x += target.dir;
	ball.y -= 5;
	
//壁衝突計算
	if( (target.x < target.w/2) || (canvas.width - target.w/2 < target.x) ){
		target.dir *= -1;
	}

//ポイントゲット
	if( (100 === ball.y) && (Math.abs(target.x - ball.x)<25)){
		point.value++; 
		audio.play();							//音を鳴らす
	}
}

//5-2
function imgDraw(image){
	ctx1.drawImage(image.img, image.x-image.w/2, image.y-image.h/2);
}