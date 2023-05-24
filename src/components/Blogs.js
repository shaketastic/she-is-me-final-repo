

export default function Blogs() {
 
    const posts = [
        [
            {
              id: 1,
              title: "Cyber Bullying",
              name: "Sarah",
              age: 14,
              content: "A few weeks ago I found out 2 of my friends had been taking photos of me and sending them around to others. They also made a photo and video of me as a whale. I felt so alone and lost until I went to the police but the ADA says we cant charge the girls with anything because this was the first time they did something. But recently they have been doing this to 2 other girls so we arent giving up!",
              created_at: "2023-05-23T04:00:00.000Z",
              is_anonymous: false
            },
            {
              id: 2,
              title: "Boys Will be Boys",
              name: "Anonymous",
              age: 11,
              content: "When I was in 6th grade, I was bullies by this guy Tyler (not his real name). Tyler would call me “trash” or “a walking brick” when I was just trying to play basketball. This may not seem like much but I was really insecure about it because he was one of the “popular guys” and since I went to a private school, if I did something stupid in response, everyone would know about it. Then it started getting physical and this guy would purposely run into me, pushing me to the floor. When I told my parents, all they said was “Boys will be boys” and “he just likes you”. Parents, take a step back and look at that. Boys just get a free pass just because theyre boys and immature. I have heard this many many times from many parents, and it hurts dude. Later, he started easing down and bullying my friends instead.",
              created_at: "2023-05-05T04:00:00.000Z",
              is_anonymous: true
            },
            {
              id: 3,
              title: "School sucks",
              name: "Leslie",
              age: 13,
              content: "I have always been on the bigger side but it never really bugged me till 7th grade. I had lost a lot of weight and seem happier and I had stop wearing oversizes hoodies and I was now in Large and medium instead of XL. I was happy but then boy would say stuff about it and so would some of my friends. then it started happening a lot more. then Summer rolled around and i lost more weight but i knew it would never go away because my dad was bigger but when 8th grade started The people I was friends with would make fun of my body and I stop eating I had people telling that i was a cow and needed to go on a run. I let their words get to me. I still have people calling me fat and by now it had gotten worst and i was too scared to tell. Me and this girl used to be friends and one day we just stopped talking and then she started bullying me making fun of me, when she would walk beside me she would make noises at me or she would call me fat for just looking at her. It hurt and i wanted to punch her so bad i was ready too but i couldnt because im still too scared to tell anyone and being away from my school would be a lot better.",
              created_at: "2023-04-25T04:00:00.000Z",
              is_anonymous: false
            },
            {
              id: 4,
              title: "Racism",
              name: "Anonymous",
              age: 16,
              content: "I am 16 and i am from México, i was new to the U.S . I didnt know much English, I was 10 and was in 5th grade so once I knew that I had to change class, in between those time I was tripped by random people and my books would fall to the ground and so did i. It happened over and over again so I went with the principal at my school and told her whats happening, the only thing she tells me “whats wrong with you people” and dismissed me I was angry but at the same sad. I didnt tell my parents but I was bullied because of my race. there is more I want to say but I will remember this for life.",
              created_at: "2023-04-26T04:00:00.000Z",
              is_anonymous: true
            },
            {
              id: 5,
              title: "Disabled Bullying",
              name: "Sean",
              age: 12,
              content: "Ever since I could remember I would always get looked down upon because of my disability. I knew for a fact it wasnt my fault but the words that the children spoke of me at school really hurt my heart and destroyed my self-esteem. I spoke with my parents about this and then they reported the issue to the schools president. The kids stopped saying harmful words to me and I managed to gain my confidence to go back to school and achieve my goal of one day being successful.",
              created_at: "2023-03-15T04:00:00.000Z",
              is_anonymous: false
            },
            {
              id: 6,
              title: "Bullies",
              name: "Anonymous",
              age: 13,
              content: "I remember last year I was 12 and just started at new middle school. I felt alone and had no friends. I tried to sit with lunch with a group of girls I recognized. They always left me out and never listened to me. Everyone I talked to use to make fun of me. I then lost my self-esteem. Then, I acted reckless and lost my parents trust. If you are being bullied, stay strong. I know it is hard.",
              created_at: "2023-01-20T05:00:00.000Z",
              is_anonymous: true
            },
            {
              id: 7,
              title: "Tired, weary and confused",
              name: "Anonymous",
              age: 15,
              content: "For months now at my school Ive been bullied by this group of girls, or as me and my friend who well call Blondie like to refer to them as, the bully buddies. Theyve been attacking me and Blondie and my other friend who well call Blue Eyes, for months. The attacks range from physical violence to verbal threats to fake accusations. One day the leader, who well call Snotface, threw all kinds of homophobic, racist, inappropriate, disrespectful comments at me and Blue Eyes. We reported Snotface and lo and behold, a teacher actually did something about it! Snotface and her friend (alias Two-Sided) spent the rest of the day in our vice principals office being questioned. Snotfaces parents and my parents were called in and Snotface was given a month of detention. The principal is also putting in measures to protect me Blondie and Blue Eyes from Snotface and Two-Sided. The moral of this story is: If you report someone once and nothing happens, KEEP TRYING. Tell as many people with as much description as you can, till the bullies get whats coming to them. I know its cliche, but its true. And remember: you are smart, strong, beautiful, and loved. And dont let anyone change that.",
              created_at: "2023-05-25T04:00:00.000Z",
              is_anonymous: true
            },
            {
              id: 8,
              title: "Hell on Earth and bullying",
              name: "Xiomara",
              age: 12,
              content: "Hitting and hurting me so bad my heart was broken into 10 little million pieces, and I have lost my faith in people and the world too",
              created_at: "2023-05-09T04:00:00.000Z",
              is_anonymous: false
            },
            {
              id: 9,
              title: "Its hard to be yourself",
              name: "Jay",
              age: 14,
              content: "It all started in 5th grade because this was when I transferred schools. So Ive always been an extroverted kid, and in 5th grade, I went to what Ill just call stonewall intermediate. This school was known to be the best school district in my state but the problem was it had tons of spoiled kids. I was a good kid but would get in trouble a lot and got lunch detention and Friday night school often. but I never meant anything but they did ……the boys. but these boys bullied me for having a Samsung, being chubby, having acne, and calling me names. The bullies pointed out anything they could point out, and this was especially hard on me because I didnt have any friends well close ones, and little by little I showed less and less emotion and became very introverted. I wish I had reached out for help sooner because in my freshmen year of high school I made a real friend and she helped me reach out to get them suspended for a few weeks luckily because my school had a strict bullying policy.",
              created_at: "2021-05-05T04:00:00.000Z",
              is_anonymous: true
            },
            {
              id: 10,
              title: "Bullying in Silence",
              name: "S.",
              age: 13,
              content: "hi its S. ive been bullied most all my life because of my hearing. im half deaf in my left ear. i was called names, tripped, this one girl was my friend at the beginning and then she started to be mean to me, like everyday. i did get help but it didnt seem to stop. but then years later it did. she moved and i dont see her anymore. but there are these boys that call me names all the time but i moved away and am going to another school and its a lot better. just know youre not alone and never will be but GET HELP IF YOU NEED IT!",
              "created_at": "2022-05-07T04:00:00.000Z",
              is_anonymous: false
            }
          ]
    ]

  return (
    <div>
      
    </div>
  )
}














// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Container } from "react-bootstrap";
// import Blog from "./Blog";

// const API = process.env.REACT_APP_API_URL;


// export default function Blogs() {

//     const [blog, setBlogs] = useState([])

//     useEffect(() => {
//         axios
//         .get(`${API}/blogs`)
//         .then((response) =>{
//             setBlogs(response.data)
//         })
//         .catch((error) => {
//             console.warn(error)
//         })
//     }, [])

//     // for some reason whenever i make an edit to a snack it gets put to the end of the array, this is to keep it from not changing position on the webpage.
//     blog.sort((a, b) => a.id - b.id);

//     return(
//         <Container className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-5 justify-content-center">
//             {blog.map((blog) => {
//               return ( 
//                 <div key={blog.id}>
//                 <Blog key={blog.id} blog={blog} />
//                 </div>
//               )
//             })}
//         </Container>
//     )
// }
