function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});

$(document).ready(function () {
	$('.header__phoneButton').click(function (event) {
		$('.header__phoneButton').addClass('is-active');
		function pausephoneButton() {
			$('.header__phoneButton').removeClass('is-active');
		}
		setTimeout(pausephoneButton, 1000);
	});
});

$(document).ready(function () {
	$('.header__buttonAction').click(function (event) {
		$('.header__buttonAction').addClass('is-active');
		function pausephoneButton() {
			$('.header__buttonAction').removeClass('is-active');
		}
		setTimeout(pausephoneButton, 1000);
	});
});

$(document).ready(function () {
	$('.burger, .burgermenu__list>li').click(function (event) {
		$('.burger, .burger-circle, .burgermenu, body').toggleClass('is-active dis-active');
		$('.burgermenu').removeClass('startPage');
	});
});

$('.burger-circle').hover(function () {
	$('.burger').addClass('white');
}, function () {
	$('.burger').removeClass('white');
});

$('.servicesFoto__box_1').hover(function () {
	$('.buttonMore1, .subtitle1').addClass('is-active');
}, function () {
	$('.buttonMore1, .subtitle1').removeClass('is-active');
});

$('.servicesFoto__box_2').hover(function () {
	$('.buttonMore2, .subtitle2').addClass('is-active');
}, function () {
	$('.buttonMore2, .subtitle2').removeClass('is-active');
});

$('.servicesFoto__box_3').hover(function () {
	$('.buttonMore3, .subtitle3').addClass('is-active');
}, function () {
	$('.buttonMore3, .subtitle3').removeClass('is-active');
});

$('.servicesFoto__box_4').hover(function () {
	$('.buttonMore4, .subtitle4').addClass('is-active');
}, function () {
	$('.buttonMore4, .subtitle4').removeClass('is-active');
});

$('.servicesFoto__box_5').hover(function () {
	$('.buttonMore5, .subtitle5').addClass('is-active');
}, function () {
	$('.buttonMore5, .subtitle5').removeClass('is-active');
});

$('.servicesFoto__box_6').hover(function () {
	$('.buttonMore6, .subtitle6').addClass('is-active');
}, function () {
	$('.buttonMore6, .subtitle6').removeClass('is-active');
});

$(document).ready(function () {
	$('.servicesFoto__buttonMore').click(function (event) {
		$('.servicesFoto__buttonMore').addClass('pressed');
		function pausephoneButton() {
			$('.servicesFoto__buttonMore').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.all').click(function (event) {
		$('.minPrice, .middlePrice, .topPrice, .superPrice').removeClass('is-active');
		$('.all').addClass('is-active');
		$('.apartaments__box').addClass('_visible');
		$('.apartaments__buttonMore').removeClass('is-active');
	});
});

$(document).ready(function () {
	$('.minPrice').click(function (event) {
		$('.all, .middlePrice, .topPrice, .superPrice, .apartaments__buttonMore').removeClass('is-active');
		$('.minPrice').addClass('is-active');
		$('.apartaments__box').removeClass('_visible');
		$('.apartaments__box:nth-child(1), .apartaments__box:nth-child(2), .apartaments__box:nth-child(6), .apartaments__box:nth-child(12)').addClass('_visible');
	});
});

$(document).ready(function () {
	$('.middlePrice').click(function (event) {
		$('.minPrice, .all, .topPrice, .superPrice, .apartaments__buttonMore').removeClass('is-active');
		$('.middlePrice').addClass('is-active');
		$('.apartaments__box').removeClass('_visible');
		$('.apartaments__box:nth-child(5), .apartaments__box:nth-child(7), .apartaments__box:nth-child(8), .apartaments__box:nth-child(11), .apartaments__box:nth-child(13)').addClass('_visible');
	});
});

$(document).ready(function () {
	$('.topPrice').click(function (event) {
		$('.minPrice, .middlePrice, .all, .superPrice, .apartaments__buttonMore').removeClass('is-active');
		$('.topPrice').addClass('is-active');
		$('.apartaments__box').removeClass('_visible');
		$('.apartaments__box:nth-child(4), .apartaments__box:nth-child(9), .apartaments__box:nth-child(10)').addClass('_visible');
	});
});

$(document).ready(function () {
	$('.superPrice').click(function (event) {
		$('.minPrice, .middlePrice, .topPrice, .all, .apartaments__buttonMore').removeClass('is-active');
		$('.superPrice').addClass('is-active');
		$('.apartaments__box').removeClass('_visible');
		$('.apartaments__box:nth-child(14)').addClass('_visible');
	});
});

$(document).ready(function () {
	$('.storyBlitz__image_1').click(function (event) {
		$('.storyBlitz__image_2, .storyBlitz__image_3, .storyBlitz__image_4, .storyBlitz__image_5').removeClass('is-active');
		$('.storyBlitz__image_1').addClass('is-active');
	});
});

$(document).ready(function () {
	$('.storyBlitz__image_2').click(function (event) {
		$('.storyBlitz__image_1, .storyBlitz__image_3, .storyBlitz__image_4, .storyBlitz__image_5').removeClass('is-active');
		$('.storyBlitz__image_2').addClass('is-active');
	});
});

$(document).ready(function () {
	$('.storyBlitz__image_3').click(function (event) {
		$('.storyBlitz__image_1, .storyBlitz__image_2, .storyBlitz__image_4, .storyBlitz__image_5').removeClass('is-active');
		$('.storyBlitz__image_3').addClass('is-active');
	});
});

$(document).ready(function () {
	$('.storyBlitz__image_4').click(function (event) {
		$('.storyBlitz__image_1, .storyBlitz__image_2, .storyBlitz__image_3, .storyBlitz__image_5').removeClass('is-active');
		$('.storyBlitz__image_4').addClass('is-active');
	});
});

$(document).ready(function () {
	$('.storyBlitz__image_5').click(function (event) {
		$('.storyBlitz__image_1, .storyBlitz__image_2, .storyBlitz__image_3, .storyBlitz__image_4').removeClass('is-active');
		$('.storyBlitz__image_5').addClass('is-active');
	});
});

$(document).ready(function () {
	$('.boxButton1').click(function (event) {
		$('.boxButton1').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton1').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton2').click(function (event) {
		$('.boxButton2').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton2').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton3').click(function (event) {
		$('.boxButton3').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton3').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton4').click(function (event) {
		$('.boxButton4').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton4').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton5').click(function (event) {
		$('.boxButton5').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton5').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton6').click(function (event) {
		$('.boxButton6').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton6').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton7').click(function (event) {
		$('.boxButton7').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton7').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton8').click(function (event) {
		$('.boxButton8').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton8').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton9').click(function (event) {
		$('.boxButton9').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton9').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton10').click(function (event) {
		$('.boxButton10').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton10').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton11').click(function (event) {
		$('.boxButton11').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton11').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton12').click(function (event) {
		$('.boxButton12').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton12').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton13').click(function (event) {
		$('.boxButton13').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton13').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.boxButton14').click(function (event) {
		$('.boxButton14').addClass('pressed');
		function pausephoneButton() {
			$('.boxButton14').removeClass('pressed');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.apartaments__buttonMore').click(function (event) {
		$('.apartaments__buttonMore').addClass('pressed');
		function pausephoneButton() {
			$('.apartaments__buttonMore').removeClass('pressed is-active');
			$('.apartaments__box:nth-child(14), .apartaments__box:nth-child(13), .apartaments__box:nth-child(12), .apartaments__box:nth-child(11)').addClass('_visible');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.leader__questionButton').click(function (event) {
		$('.leader__questionButton').addClass('pressed');
		function pausephoneButton() {
			$('.leader__questionButton').removeClass('pressed is-active');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.footer__button').click(function (event) {
		$('.footer__button').addClass('pressed');
		function pausephoneButton() {
			$('.footer__button').removeClass('pressed is-active');
		}
		setTimeout(pausephoneButton, 500);
	});
});

$(document).ready(function () {
	$('.storyBlitz__buttonMore').click(function (event) {
		$('.storyBlitz__buttonMore').addClass('pressed');
		function pausephoneButton() {
			$('.storyBlitz__buttonMore').removeClass('pressed is-active');
		}
		setTimeout(pausephoneButton, 500);
	});
});

//Динамический адаптив - перенос объекта=====================

class DynamicAdapt {
	constructor(type) {
		this.type = type;
	}

	init() {
		// массив объектов
		this.оbjects = [];
		this.daClassname = '_dynamic_adapt_';
		// массив DOM-элементов
		this.nodes = [...document.querySelectorAll('[data-da]')];

		// наполнение оbjects объктами
		this.nodes.forEach((node) => {
			const data = node.dataset.da.trim();
			const dataArray = data.split(',');
			const оbject = {};
			оbject.element = node;
			оbject.parent = node.parentNode;
			оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
			оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
			оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.оbjects.push(оbject);
		});

		this.arraySort(this.оbjects);

		// массив уникальных медиа-запросов
		this.mediaQueries = this.оbjects
			.map(({
				breakpoint
			}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)
			.filter((item, index, self) => self.indexOf(item) === index);

		// навешивание слушателя на медиа-запрос
		// и вызов обработчика при первом запуске
		this.mediaQueries.forEach((media) => {
			const mediaSplit = media.split(',');
			const matchMedia = window.matchMedia(mediaSplit[0]);
			const mediaBreakpoint = mediaSplit[1];

			// массив объектов с подходящим брейкпоинтом
			const оbjectsFilter = this.оbjects.filter(
				({
					breakpoint
				}) => breakpoint === mediaBreakpoint
			);
			matchMedia.addEventListener('change', () => {
				this.mediaHandler(matchMedia, оbjectsFilter);
			});
			this.mediaHandler(matchMedia, оbjectsFilter);
		});
	}

	// Основная функция
	mediaHandler(matchMedia, оbjects) {
		if (matchMedia.matches) {
			оbjects.forEach((оbject) => {
				оbject.index = this.indexInParent(оbject.parent, оbject.element);
				this.moveTo(оbject.place, оbject.element, оbject.destination);
			});
		} else {
			оbjects.forEach(
				({ parent, element, index }) => {
					if (element.classList.contains(this.daClassname)) {
						this.moveBack(parent, element, index);
					}
				}
			);
		}
	}

	// Функция перемещения
	moveTo(place, element, destination) {
		element.classList.add(this.daClassname);
		if (place === 'last' || place >= destination.children.length) {
			destination.append(element);
			return;
		}
		if (place === 'first') {
			destination.prepend(element);
			return;
		}
		destination.children[place].before(element);
	}

	// Функция возврата
	moveBack(parent, element, index) {
		element.classList.remove(this.daClassname);
		if (parent.children[index] !== undefined) {
			parent.children[index].before(element);
		} else {
			parent.append(element);
		}
	}

	// Функция получения индекса внутри родителя
	indexInParent(parent, element) {
		return [...parent.children].indexOf(element);
	}

	// Функция сортировки массива по breakpoint и place 
	// по возрастанию для this.type = min
	// по убыванию для this.type = max
	arraySort(arr) {
		if (this.type === 'min') {
			arr.sort((a, b) => {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}
					if (a.place === 'first' || b.place === 'last') {
						return -1;
					}
					if (a.place === 'last' || b.place === 'first') {
						return 1;
					}
					return a.place - b.place;
				}
				return a.breakpoint - b.breakpoint;
			});
		} else {
			arr.sort((a, b) => {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}
					if (a.place === 'first' || b.place === 'last') {
						return 1;
					}
					if (a.place === 'last' || b.place === 'first') {
						return -1;
					}
					return b.place - a.place;
				}
				return b.breakpoint - a.breakpoint;
			});
			return;
		}
	}
}

const da = new DynamicAdapt("max");
da.init();