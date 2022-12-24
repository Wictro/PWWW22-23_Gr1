const blogLikes = document.getElementById("blog-likes");
            const totalLikes = document.getElementById("total-likes");
    
            var likes= 0;
            totalLikes.innerHTML = likes;
            const handleLikes = () => {
                likes++;
                totalLikes.innerHTML = likes;
            };
blogLikes.addEventListener("click", handleLikes);