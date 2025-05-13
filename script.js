// Define the list of audio tracks in the audio folder
const audioTracks = [
    'audio/track01.mp3',
    'audio/track02.mp3',
    'audio/track03.mp3'
];

// Get reference to the audio element
const audio = document.getElementById('audio');

// Object to store current playback time for each track
const trackTimes = [0, 0, 0];

// Start by playing the first track
let currentTrackIndex = 0;
audio.src = audioTracks[currentTrackIndex];
audio.play();

// Add event listeners to each text box
document.querySelectorAll('.text-box').forEach(box => {
    box.addEventListener('click', () => {
        const selectedIndex = parseInt(box.getAttribute('data-track'));

        if (selectedIndex !== currentTrackIndex) {
            // Save current time of current audio track
            trackTimes[currentTrackIndex] = audio.currentTime;

            // Switch to new track and resume from last time
            currentTrackIndex = selectedIndex;
            audio.src = audioTracks[currentTrackIndex];
            audio.currentTime = trackTimes[currentTrackIndex] || 0;

            // Play the new audio
            audio.play();
        }
    });
});
// JavaScript Document