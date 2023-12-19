
// navbar icon active 
let navItems = document.querySelectorAll('.icon, .account-icon');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    removeActive();
    item.classList.add('active');

    if (item.classList.contains('account-icon')) {
      item.style.backgroundColor = 'var(--main-color)';
      document.querySelector(".account-page").style.display = 'block';
      
      document.querySelector(".nav-column").style.display = 'none';
      document.querySelector(".account-page-navbar").style.display = 'flex';
      document.querySelector('.follower-page').style.display = 'none';
    } else {
      document.querySelector(".account-page").style.display = 'none';
      document.querySelector(".nav-column").style.display = 'flex';
      document.querySelector(".account-page-navbar").style.display = 'none';
      
      document.querySelector('.follower-page').style.display = 'none';
    }
  });
});

function removeActive() {
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.classList.contains('account-icon')) {
      item.style.backgroundColor = ''; // Reset background color
    }
  });
}

// এই কোডের দ্বারা লাভ আইকন চেঞ্জ করা হচ্ছে এবং লাইক কাউন্ট করা হচ্ছে এবং আইকন animated করা হচ্ছে।



$(document).ready(function(){
  const likeBtn = $(".like-btn-box");
  const likeCountElement = $("#likeCount");

  // Retrieve liked state and count from local storage
  let isLiked = localStorage.getItem('isLiked') === 'true';
  let likedCount = parseInt(localStorage.getItem('likedCount')) || 0;

  // Set initial liked count to 0 if not previously saved
  if (likedCount === 4) {
    likedCount = 0;
  }

  // Set initial state based on local storage
  if (isLiked) {
    likeBtn.addClass("liked");
    likeBtn.find("i").addClass("bxs-heart").removeClass("bx-heart");
  }

  // Set initial liked count
  likeCountElement.text(likedCount);

  likeBtn.click(function(){
    // Toggle the "liked" class and heart icon
    isLiked = !isLiked;
    $(this).toggleClass("liked", isLiked);
    $(this).find("i").toggleClass("bxs-heart bx-heart");

    // Update the like count
    likedCount = isLiked ? likedCount + 1 : Math.max(likedCount - 1, 0);
    likeCountElement.text(likedCount);

    // Update liked state and count in local storage
    localStorage.setItem('isLiked', isLiked.toString());
    localStorage.setItem('likedCount', likedCount.toString());

    // Animate the heart
    animateHeart();
  });
});

function animateHeart() {
  const likeBtn = document.querySelector('.like-btn-box');
  
  // Remove 'clicked' class to reset the animation
  likeBtn.classList.remove('clicked');
  
  // Trigger reflow to restart the animation
  void likeBtn.offsetWidth;
  
  // Add 'clicked' class to start the animation
  likeBtn.classList.add('clicked');
}
  

// follower page click open
document.querySelector('#followerPage').addEventListener('click', () => {
  document.querySelector('.follower-page').style.display = 'block';
  
  document.querySelector(".nav-column").style.display = 'none';

  // Add a delay of 3 seconds before checking internet connection status
 setTimeout(() => {
  if (navigator.onLine) {
 // If internet connection is good, hide the '.loading-follower-page' element
  document.querySelector('.loading-follower-page').style.display = 'none';
    } else {
 // Handle case when internet connection is not available
  //alert('No internet connection');
// You can add further handling here if needed
    }
  }, 2000);
});




// profile picture select
document.querySelector('#select-profile').addEventListener('change',()=>{
  document.querySelectorAll('#selectImg').forEach(AllMyProfileImg=>{
  AllMyProfileImg.src = URL.createObjectURL(document.querySelector('#select-profile').files[0])
  
  })
});



// cover photo select
document.querySelector('#cover-image').addEventListener('change',()=>{
  document.querySelectorAll('#selectCoverImg').forEach(AllMyCoverImg=>{
  AllMyCoverImg.src = URL.createObjectURL(document.querySelector('#cover-image').files[0])
  
  })
});



//edit profile btn click

document.getElementById('editProfile').addEventListener('click', function() {
  
    document.querySelector('.edit-profile-page').style.bottom = '0'
    document.querySelector('nav').style.display = 'none'
    
    document.querySelector('.account-page-navbar').style.display = 'none'
});
// edit profile back btn click
document.getElementById('backBtn').addEventListener('click', function() {
  
    document.querySelector('.edit-profile-page').style.bottom = '-100%'
    
    document.querySelector('.account-page-navbar').style.display = 'flex'
    document.querySelector('nav').style.display = 'flex'
});


// create story click 
document.getElementById('myStory').addEventListener('click', function() {
  
    document.querySelector('.create-story-page').style.bottom = '0'
    document.querySelector('nav').style.display = 'none'
    document.querySelector('header').style.display = 'none'
    document.querySelector('.create-story-page-header').style.display = 'flex'
});

//create story back btn click
document.getElementById('cross-btn').addEventListener('click', function() {
  
    document.querySelector('.create-story-page').style.bottom = '-100%'
    document.querySelector('nav').style.display = 'flex'
    document.querySelector('header').style.display = 'flex'
    document.querySelector('.create-story-page-header').style.display = 'none'
});



document.getElementById('reels-btn').addEventListener('click', function() {
  
    document.querySelector('.active-border').style.left = '12.1rem';
    document.querySelector('.reelsColor').style.color = 'var(--main-color)';
    document.querySelector('.storieColor').style.color = 'black';
    document.querySelector('.story-scroll-container2').style.display = 'flex';
    document.querySelector('.story-scroll-container').style.display = 'none';
});

document.getElementById('srorie-btn').addEventListener('click', function() {
  
    document.querySelector('.active-border').style.left = '2rem';
    
    document.querySelector('.storieColor').style.color = 'var(--main-color)';
    document.querySelector('.reelsColor').style.color = 'black';
    document.querySelector('.story-scroll-container2').style.display = 'none';
    document.querySelector('.story-scroll-container').style.display = 'flex';
});

// navbar bottom bar 
document.getElementById('frist-icon').addEventListener('click', function() {
  
    document.querySelector('.nav-scroll-bottom-bar').style.left = '0';
    
    document.querySelector('.nav-column').style.display = 'flex';
    document.querySelector('header').style.height = '6rem';
    document.querySelector('.post-create-container').style.marginTop = '6rem'
    document.querySelector('.follower-page').style.display = 'none';
    document.getElementById('home1').style.display = 'none';
    document.getElementById('home2').style.display = 'flex';
    document.getElementById('bell2').style.display = 'none';
    document.getElementById('bell1').style.display = 'flex';
    document.getElementById("user2").style.display='none'
    document.getElementById("user1").style.display='flex'
    document.getElementById('store1').style.display = 'flex';
    document.getElementById('store2').style.display = 'none';
});

document.getElementById('second-icon').addEventListener('click', function() {
  
    document.querySelector('.nav-scroll-bottom-bar').style.left = '4.7rem';
    document.querySelector('.nav-column').style.display = 'none';
    document.querySelector('header').style.height = '3rem';
    document.querySelector('.post-create-container').style.marginTop = '3rem'
    document.getElementById('home1').style.display = 'flex';
    document.getElementById('home2').style.display = 'none';
    document.getElementById("user2").style.display='none'
    document.getElementById("user1").style.display='flex'
    document.getElementById('bell2').style.display = 'none';
    document.getElementById('bell1').style.display = 'flex';
    document.getElementById('store2').style.display = 'flex';
    document.getElementById('store1').style.display = 'none';
});

document.getElementById('third-icon').addEventListener('click', function() {
  
    document.querySelector('.nav-scroll-bottom-bar').style.left = '9.6rem';
    document.querySelector('.nav-column').style.display = 'none';
    document.querySelector('header').style.height = '3rem';
    document.querySelector('.post-create-container').style.marginTop = '3rem'
    document.getElementById('bell1').style.display = 'none';
    document.getElementById('bell2').style.display = 'flex';
    document.getElementById("user2").style.display='none'
    document.getElementById("user1").style.display='flex'
    document.getElementById('home1').style.display = 'flex';
    document.getElementById('home2').style.display = 'none';
    document.getElementById('store1').style.display = 'flex';
    document.getElementById('store2').style.display = 'none';
});

document.getElementById('followerPage').addEventListener('click', function() {
  
    document.querySelector('.nav-scroll-bottom-bar').style.left = '14.4rem';
    document.querySelector('header').style.height = '3rem';
    document.getElementById("user2").style.display='flex'
    document.getElementById("user1").style.display='none'
    document.getElementById('bell2').style.display = 'none';
    document.getElementById('bell1').style.display = 'flex';
    document.getElementById('home1').style.display = 'flex';
    document.getElementById('home2').style.display = 'none';
    document.getElementById('store1').style.display = 'flex';
    document.getElementById('store2').style.display = 'none';
});

document.getElementById('five-icon').addEventListener('click', function() {
  
    document.querySelector('.nav-scroll-bottom-bar').style.left = '18.4rem';
    document.querySelector('.follower-page').style.display = 'none';
    document.querySelector('header').style.height = '3rem';
    document.getElementById("user2").style.display='none'
    document.getElementById("user1").style.display='flex'
    document.getElementById('bell2').style.display = 'none';
    document.getElementById('bell1').style.display = 'flex';
    document.getElementById('home1').style.display = 'flex';
    document.getElementById('home2').style.display = 'none';
    document.getElementById('store1').style.display = 'flex';
    document.getElementById('store2').style.display = 'none';
});


// create post page open
document.getElementById('input-box-container').addEventListener('click', function() {
  
  document.querySelector(".create-post-page").style.bottom = '0';
  document.querySelector('header').style.display = 'none';
});

document.getElementById('back-arrow').addEventListener('click', function() {
  
  document.querySelector(".create-post-page").style.bottom = '-100%';
  document.querySelector('header').style.display = 'block';
});





// comment content making start

document.getElementById('sendIcon').addEventListener('click', function() {
    // Get the content from the input field
    var commentContent = document.getElementById('commentInput').value;

    // Create a new comment box
    var newCommentBox = document.createElement('div');
    newCommentBox.className = 'comment-box';

    // Create elements for the new comment box
    var commentProfile = document.createElement('div');
    commentProfile.className = 'comment-profile';
    var profileImage = document.createElement('img');
    profileImage.src = 'profile.jpg'; // Set the path to your profile image
    profileImage.alt = 'Profile Image';
    commentProfile.appendChild(profileImage);

    var commentContentDiv = document.createElement('div');
    commentContentDiv.className = 'comment-content';
    var commentParagraph = document.createElement('p');
    commentParagraph.textContent = commentContent;
    commentContentDiv.appendChild(commentParagraph);

    // Append elements to the new comment box
    newCommentBox.appendChild(commentProfile);
    newCommentBox.appendChild(commentContentDiv);

    // Append the new comment box to the comment container
    document.getElementById('commentContainer').appendChild(newCommentBox);

    // Clear the input field
    document.getElementById('commentInput').value = '';
});



// comment-btn click and comment-page.open

document.getElementById('comment-btn-box').addEventListener('click', function() {
  
  document.querySelector(".comment-page").style.bottom = '0';
  document.querySelector('.comment-page-navbar').style.bottom = '0';
  document.querySelector('.main-content').style.display = 'none';
});


// comment page back btn click
document.getElementById("comment-page-back").addEventListener('click',function() {
  
  document.querySelector(".comment-page").style.bottom = '-100%';
  document.querySelector('.comment-page-navbar').style.bottom = '-20%';
  document.querySelector('.main-content').style.display = 'block';
})

document.addEventListener('backbutton', function() {
  document.querySelector(".comment-page").style.bottom = '-100%';
  document.querySelector('.comment-page-navbar').style.bottom = '-20%';
  document.querySelector('.main-content').style.display = 'block';
});