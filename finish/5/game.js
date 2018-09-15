//③-1 イベント処理定義==================================
CANVAS1.addEventListener(
	"mousedown",
	(e)=>{
		BALL1.x = PLAYER1.x;
		BALL1.y = PLAYER1.y; 
	}
);

CANVAS1.addEventListener(
	"mousemove",
	(e)=>{
		const RECT = e.target.getBoundingClientRect();
		PLAYER1.x = e.clientX-RECT.left;
	}
);

//③-2 関数定義===============================
function clearDraw(canvas){
	CTX1.clearRect(0, 0, canvas.width, canvas.height);
}

function rectDraw(rect){
	CTX1.fillStyle = rect.color;
	CTX1.fillRect(rect.x-rect.w/2, rect.y-rect.h/2, rect.w, rect.h);
}

function pointDraw(point){
	CTX1.fillStyle = "black";
	CTX1.font = "20px sans-serif";
	CTX1.fillText(point.value, 0, 400);
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
	CTX1.drawImage(image.img, image.x-image.w/2, image.y-image.h/2);
}