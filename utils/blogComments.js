const commentExamples = [
    "I can't believe how fresh and tasty these vegetables are. I'm going to have to start buying my produce from this farmer's market.",
    "This meal is absolutely delicious!",
    "The dish was good, but I think it could have used a little more spice."
]

const peopleNames = [ "Anastasia Horton", "Mia Andrade", "Brianna Benton", "Chiara Ingram", "Rafferty Riddle", "Selina Klein", "Nicholas Brady", "Dana Wade"]

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