const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Hand detection with MediaPipe Hands
const hands = new Hands({locateFaceLandmarks: false, maxNumHands: 1});
hands.onResults(onHandsDetected);

// Function to handle successful video stream access
function handleVideoStream(stream) {
  video.srcObject = stream;
}

// Function to handle errors accessing the video stream
function handleVideoError(error) {
  console.error('Error accessing video stream:', error);
}

// Function to process detected hands
function onHandsDetected(results) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (results.multiHandLandmarks.length > 0) {
    const handLandmarks = results.multiHandLandmarks[0];

    // Access specific landmark data (replace with your logic)
    const wristLandmark = handLandmarks[wristLandmarkIndex]; // Replace with desired landmark index
    const x = wristLandmark.x * canvas.width;
    const y = wristLandmark.y * canvas.height;

    generateArt(x, y); // Pass hand position data for dynamic art
  }
}

// Function to generate art based on hand position (replace with your logic)
function generateArt(x, y) {
  const brushSize = Math.min(x, canvas.width - x) / 5; // Adjust based on hand position
  ctx.fillStyle = 'hsl(' + (x / canvas.width) * 360 + ', 100%, 50%)'; // Dynamic color based on x position
  ctx.beginPath();
  ctx.arc(x, y, brushSize, 0, 2 * Math.PI);
  ctx.fill();
}

// Request access to the webcam stream
navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleVideoStream)
  .catch(handleVideoError);
