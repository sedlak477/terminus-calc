import { createWorker } from 'tesseract.js'

export async function initRecognition(video: HTMLVideoElement) {
	const [worker, display] = await Promise.all([
		createWorker(),
		navigator.mediaDevices.getDisplayMedia({
			video: true,
			audio: false
		})
	])
	video.srcObject = display
	video.play()
	return () => worker.recognize(video)
}
