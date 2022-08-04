let turn = 0;
Slide();

function Slide() {
	let slide = document.querySelectorAll(".slideimg > a > img");
	for (let i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	turn++;
	if (turn > slide.length)
		turn = 1;
	slide[turn - 1].style.display = "block";
	setTimeout(Slide, 3000);
}