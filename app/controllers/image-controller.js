import ImageService from "../services/image-service.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _draw (imgUrl) {
	// document.body.style.backgroundImage = `url(${imgUrl})`;
	let bgImg =  document.getElementById('bg-img');
	bgImg.src = imgUrl;
}

export default class ImageController {
	constructor () {
		this.doDrawAsync();
	}
	async doDrawAsync () {
		// Draw the information RETURNED from the service
		let imgUrl = await ImageService.getImgAsync();
		_draw(imgUrl.large_url || imgUrl.url);
	}
}
