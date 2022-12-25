function count(likeID) {
    const totalLikes = document.getElementById(likeID);

    let count = parseInt(totalLikes.innerHTML) || 0;
    count += 1;
    totalLikes.innerHTML = " " + count;
  }

for(let blog = 1; blog<=12; blog++) {
    document.getElementById(`blog-likes-${blog}`).addEventListener('click', () => count(`total-likes-${blog}`));
    document.getElementById(`blog-dislikes-${blog}`).addEventListener('click', () => count(`total-dislikes-${blog}`));
}