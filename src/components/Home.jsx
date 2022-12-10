// using Infinite Scroll Library

import React, { useState } from "react";
import Error from "../components/Error";
import ListItem from "../components/ListItem";
import Data from "../components/data";
import InfiniteScroll from "react-infinite-scroll-component";
import Logout from "../components/Logout";
function Home(props) {
  const [items, setItems] = useState(Data.slice(0, 20));
  function fetchMoreData() {
    const addItems = Data.slice(items.length, items.length + 20);
    setTimeout(
      setItems((prevNotes) => {
        return [...prevNotes, ...addItems];
      }),
      1000
    );
  }
  if (props.show === false) {
    return <Error />;
  } else {
    return (
      <div>
        <Logout authenticate={props.authenticate} />
        <ul class="list-group List">
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={items.length !== 500}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Data Over :(</b>
              </p>
            }
          >
            {items.map((item) => (
              <ListItem
                name={
                  item.name.title + " " + item.name.first + " " + item.name.last
                }
                image={item.picture.large}
              />
            ))}
          </InfiniteScroll>
        </ul>
      </div>
    );
  }
}
export default Home;

//Custom Code

// import React, { useState } from "react";
// import Error from "../components/Error";
// import ListItem from "../components/ListItem";
// import Data from "../components/data";
// import Loader from "../components/Loader";
// // import InfiniteScroll from "react-infinite-scroll-component";
// import $ from "jquery";
// function Home(props) {
//   const [show, changeShow] = useState("none");
//   const [items, setItems] = useState(Data.slice(0, 20));
//   function fetchMoreData() {
//     const addItems = Data.slice(items.length, items.length + 20);
//     setItems((prevNotes) => {
//       return [...prevNotes, ...addItems];
//     });
//   }
//   function hitBottom(){
//     console.log(show);
//     changeShow("block");
//     setTimeout(fetchMoreData(), 5000);
//     changeShow("none");
//   }
//   $(window).on("scroll", function () {
//     if (
//       $(window).scrollTop() >=
//       $(".List").offset().top +
//         $(".List").outerHeight() -
//         window.innerHeight + 40
//     ) {
//       hitBottom();
//     }
//   });
//   if (props.show === false) {
//     return <Error />;
//   } else {
//     return (
//       <div>
//         <ul class="list-group List">
//           {items.map((item) => (
//             <ListItem
//               name={
//                 item.name.title + " " + item.name.first + " " + item.name.last
//               }
//               image={item.picture.large}
//             />
//           ))}
//           <Loader show={show} />
//         </ul>
//       </div>
//     );
//   }
// }
// export default Home;
