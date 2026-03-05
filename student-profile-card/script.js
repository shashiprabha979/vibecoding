document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    const nameInput = document.getElementById('name');
    const streamInput = document.getElementById('stream');
    const bioInput = document.getElementById('bio');

    const displayName = document.getElementById('display-name');
    const displayStream = document.getElementById('display-stream');
    const displayBio = document.getElementById('display-bio');
    const profileCard = document.getElementById('profile-card');

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Update card content
        displayName.textContent = nameInput.value;
        displayStream.textContent = streamInput.value;
        displayBio.textContent = bioInput.value;

        // Add a subtle update animation
        profileCard.style.animation = 'none';
        profileCard.offsetHeight; // trigger reflow
        profileCard.style.animation = 'cardUpdate 0.5s ease-out';
    });

    // Optional: Real-time preview
    const inputs = [nameInput, streamInput, bioInput];
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.id === 'name') {
                displayName.textContent = input.value || 'John Doe';
            }
            if (input.id === 'stream') displayStream.textContent = input.value || 'Software Engineering';
            if (input.id === 'bio') displayBio.textContent = input.value || 'Passionate student exploring the world of web development and UI/UX design.';
        });
    });
});

// Add keyframe for card update via JS
const style = document.createElement('style');
style.innerHTML = `
@keyframes cardUpdate {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}
`;
document.head.appendChild(style);
