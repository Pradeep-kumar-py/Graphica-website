
// Like Button Functionality
document.querySelectorAll('.like-btn').forEach((likeBtn) => {
    likeBtn.addEventListener('click', () => {
        let count = parseInt(likeBtn.dataset.count || '0') + 1;
        likeBtn.dataset.count = count;
        likeBtn.textContent = `👍 Like (${count})`; // Update button text
    });
});

// Comment Button Functionality - Toggle comment section
document.querySelectorAll('.comment-btn').forEach((commentBtn, index) => {
    commentBtn.addEventListener('click', () => {
        const commentSection = document.querySelectorAll('.comment-section')[index];
        commentSection.style.display =
            commentSection.style.display === 'none' || !commentSection.style.display ? 'block' : 'none';
    });
});

// Share Button Functionality
document.querySelectorAll('.share-btn').forEach((shareBtn) => {
    shareBtn.addEventListener('click', () => {
        const postContent = shareBtn.closest('.community-post').querySelector('.post-content p').textContent;
        const shareURL = encodeURIComponent(window.location.href);
        const message = encodeURIComponent(`Check this out: ${postContent}\n${shareURL}`);

        // Create share options container if it doesn't exist
        let shareOptionsContainer = shareBtn.nextElementSibling;
        if (!shareOptionsContainer || !shareOptionsContainer.classList.contains('share-options')) {
            shareOptionsContainer = document.createElement('div');
            shareOptionsContainer.classList.add('share-options');
            shareOptionsContainer.innerHTML = `
                    <a href="https://wa.me/?text=${message}" target="_blank">
                        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
                    </a>
                    <a href="mailto:?subject=Check this post&body=${message}" target="_blank">
                        <img src="https://img.icons8.com/ios-filled/50/000000/gmail.png" alt="Gmail" />
                    </a>
                `;
            shareBtn.parentNode.insertBefore(shareOptionsContainer, shareBtn.nextSibling);
        } else {
            shareOptionsContainer.style.display =
                shareOptionsContainer.style.display === 'none' ? 'flex' : 'none';
        }
    });
});

// Profile Image Click - Open Profile Tab
document.querySelectorAll('.avatar').forEach((avatar) => {
    avatar.addEventListener('click', () => {
        window.location.href = 'profile.html'; // Redirect to profile page
    });
});

