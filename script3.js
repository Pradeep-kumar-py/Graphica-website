
    // Like Button Functionality
    document.querySelectorAll('.like-btn').forEach((likeBtn) => {
        likeBtn.addEventListener('click', () => {
            let count = parseInt(likeBtn.dataset.count || '0') + 1;
            likeBtn.dataset.count = count;
            likeBtn.textContent = `👍 Like (${count})`; // Update button text
        });
    });

    // Comment Button Functionality - Toggle Comment Section
    document.querySelectorAll('.comment-btn').forEach((commentBtn, index) => {
        commentBtn.addEventListener('click', () => {
            const commentSection = document.querySelectorAll('.comment-section')[index];
            commentSection.style.display = 
                commentSection.style.display === 'none' || !commentSection.style.display ? 'block' : 'none';
        });
    });

    // Adding Comments Dynamically
    document.querySelectorAll('.comment-submit').forEach((submitButton, index) => {
        submitButton.addEventListener('click', () => {
            const commentInput = document.querySelectorAll('.comment-input')[index];
            const commentText = commentInput.value.trim();
            
            if (commentText) {
                const commentSection = document.querySelectorAll('.comment-section')[index];
                const newComment = document.createElement('div');
                newComment.classList.add('comment');
                newComment.innerHTML = `
                    <img src="image/profile.jpeg" alt="Profile" class="avatar">
                    <div class="comment-details">
                        <h4 class="comment-username">Your Name</h4>
                        <p class="comment-text">${commentText}</p>
                    </div>
                `;
                commentSection.insertBefore(newComment, commentSection.querySelector('.add-comment'));
                commentInput.value = ''; // Clear input field after posting
            }
        });
    });

    // Share Button Functionality with Icons
    document.querySelectorAll('.share-btn').forEach((shareBtn) => {
        shareBtn.addEventListener('click', () => {
            const postContent = shareBtn.closest('.community-post').querySelector('.post-content p').textContent;
            const shareURL = encodeURIComponent(window.location.href);
            const message = encodeURIComponent(`Check this out: ${postContent}\n${shareURL}`);

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

    // Profile Image Click - Redirect to Profile Page
    document.querySelectorAll('.avatar').forEach((avatar) => {
        avatar.addEventListener('click', () => {
            window.location.href = 'profile.html'; // Redirect to profile page
        });
    });

