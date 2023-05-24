// import Blogs from "../components/Blogs";

// export default function Index() {
//     return (
//       <div className="single">
//         <div className="content">
//         <img src="https://www.schoolstickers.com/media/catalog/category/BANNER-anti-bullying.png" alt="banner"/>
//         <div className="info">
//         <span>Sherry</span>
//         <p>Posted 2 days ago {blogs.created_at}</p>
//         </div>
//         Index page
//         {/* <Blogs /> */}
      
//       <div className="menu">m</div>
//     </div></div>
//     );
//   }

import Blogs from "../components/Blogs";

export default function Index() {
  return (
    <div className="blogs">
      <h2>Index</h2>
      <Blogs />
    </div>
  );
}


  