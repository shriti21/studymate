let currentSectionId = 'home';

function showSection(sectionId) {
    if (sectionId === currentSectionId) return;

    const currentSection = document.getElementById(currentSectionId);
    const newSection = document.getElementById(sectionId);

    // Slide out current section
    currentSection.classList.remove('active');
    currentSection.classList.add('exiting');

    // Wait for the current section to slide out
    setTimeout(() => {
        currentSection.style.display = 'none';
        currentSection.classList.remove('exiting');

        // Display new section and slide in
        newSection.style.display = 'flex';
        setTimeout(() => {
            newSection.classList.add('active');
        }, 50); // Small delay to ensure the new section is displayed before sliding

        currentSectionId = sectionId;
    }, 500); // Match this duration with CSS transition duration
}

document.addEventListener('DOMContentLoaded', () => {
    // Set initial active section
    document.getElementById(currentSectionId).classList.add('active');
});