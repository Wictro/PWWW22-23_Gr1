const commentExamples = [
    "I can't believe how fresh and tasty these vegetables are. I'm going to have to start buying my produce from this farmer's market.",
    "This meal is absolutely delicious!",
    "The dish was good, but I think it could have used a little more spice.",
    "This is the best thing I've ever tasted!",
    "The flavors in this dish are so well balanced, it's really impressive.",
    "I can't believe how good this is!",
    "I've never had anything like this before, it's amazing!",
    "I can't get over how delicious this is, it's incredible.",
    "This food has great flavor!",
    "I love the combination of flavors in this dish, it's really unique.",
    "The portion size of this dish is perfect, not too big or too small.",
    "This food is so filling and satisfying.",
    "I love the texture of this dish.",
    "The sauce on this dish is amazing, it really makes the meal.",
    "The spices in this meal are perfect.",
    "The presentation of this dish is really impressive.",
    "The ingredients in this dish are really fresh and high quality.",
    "This food is cooked to perfection.",
    "I'm blown away by the taste and presentation of this dish.",
    "This is the most flavorful food I've ever had!",
    "I can't get over how delicious this is, it's truly amazing.",
    "This food is so satisfying and comforting, it's exactly what I needed.",
    "I've never had anything like this before, it's truly unique and amazing.",
    "This is the best meal I've had in a long time, thank you for cooking it for me."
]

const peopleNames = [ "Anastasia Horton", "Mia Andrade", "Brianna Benton", "Chiara Ingram", "Rafferty Riddle", "Selina Klein", "Nicholas Brady", "Dana Wade",
                      "Isobel Boyer", "Neil Nixon", "Zackary Hall", "Pearl Sawyer", "Arun Mahoney", "Henri Cervantes", "Mollie Davila", "Mohammad Gutierrez",
                      "Shania Berg", "Olivier Harmon", "Talia Yoder", "Sebastian Rowe", "Xavier Carter", "Nicolas Willis", "Anton Doherty", "Minnie Hale"]

const blogComments = document.getElementById("blog-comments-1")
const commentsContent = '<div style="display:flex; flex-wrap: wrap; ">'+ 
                             '<div style="font-size: 25px; margin: 10px 5px 0px 6px; color: white; width: 10%; height: 40px; background-color: #616263; border-radius: 20px"><i class="fa fa-user" style="padding-top: 15%; padding-left: 25%;"></i></div>'+
                             '<div style = "margin: 10px 10px 0px 0px; border-radius: 15px; width: 82%; background-color: #616263; font-family: sans serif;">'+
                             '<span style="font-size: 13px; font-weight: 600; color: #e4e6eb; padding-left: 12px; padding-top: 3px;">'+peopleNames[1]+'</span>'+
                             '<p style="font-size: 11px; color: #d7d9df; padding-left: 20px; padding-bottoms: 3px;">'+commentExamples[0]+'</p>'+
                              '</div>'+
                        '</div>'+
                        '<div style="display:flex; flex-wrap: wrap; ">'+ 
                             '<div style="font-size: 25px; margin: 10px 5px 0px 6px; color: white; width: 10%; height: 40px; background-color: #616263; border-radius: 20px"><i class="fa fa-user" style="padding-top: 15%; padding-left: 25%;"></i></div>'+
                             '<div style = "margin: 10px 10px 0px 0px; border-radius: 15px; width: 82%; background-color: #616263; font-family: sans serif;">'+
                             '<span style="font-size: 13px; font-weight: 600; color: #e4e6eb; padding-left: 12px; padding-top: 3px;">'+peopleNames[2]+'</span>'+
                             '<p style="font-size: 11px; color: #d7d9df; padding-left: 20px; padding-bottoms: 3px;">'+commentExamples[1]+'</p>'+
                              '</div>'+
                        '</div>'
                      
blogComments.innerHTML = commentsContent