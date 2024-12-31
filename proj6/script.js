// JavaScript to handle post creation and privacy settings
document.getElementById('post-btn').addEventListener('click', function () {
    const postContent = document.getElementById('post-content').value;
    const postPrivacy = document.getElementById('post-privacy').value;
  
    if (!postContent.trim()) {
      alert('Please write something to post.');
      return;
    }
  
    // Add the post to the feed
    const postList = document.getElementById('post-list');
    const postItem = document.createElement('li');
  
    postItem.innerHTML = `
      <p>${postContent}</p>
      <span class="privacy">Privacy: ${postPrivacy}</span>
    `;
    postList.appendChild(postItem);
  
    // Clear the post content
    document.getElementById('post-content').value = '';
  });
  
  // Profile visibility setting (optional for future use)
  document.getElementById('profile-visibility').addEventListener('change', function () {
    const visibility = this.value;
    console.log(`Profile visibility set to: ${visibility}`);
  });
  