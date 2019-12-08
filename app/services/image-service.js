// @ts-ignore
const _IMGAPI = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/images",
	timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
	async getImgAsync () {
		//Returns img URL for ease of processing.x`
		let imgData = await _IMGAPI.get();
		return imgData.data;
	}
}

const imageService = new ImageService();
export default imageService;
