const airplane = document.getElementById('airplane');
const target = document.getElementById('target');

document.addEventListener('mousemove', (e) => {
	airplane.style.left = e.pageX + 'px';
	airplane.style.top = e.pageY + 'px';
});

document.addEventListener('click', () => {
	const airplaneRect = airplane.getBoundingClientRect();
	const targetRect = target.getBoundingClientRect();

	if (
		airplaneRect.x < targetRect.x + targetRect.width &&
		airplaneRect.x + airplaneRect.width > targetRect.x &&
		airplaneRect.y < targetRect.y + targetRect.height &&
		airplaneRect.y + airplaneRect.height > targetRect.y
	) {
		alert('Hit!');
	} else {
		alert('Miss!');
	}
});