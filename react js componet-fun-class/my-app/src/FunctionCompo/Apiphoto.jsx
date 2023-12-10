import React, { useEffect, useState } from "react";
const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";

export default function App() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <img src={img} alt="icons" />
    </>
  );
}
// import React, {useState, useEffect} from 'react';
// // import './App.css';

// function App() {
//     // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
//     // We're setting the default value of dogImage to null, so that while we wait for the
//     // fetch to complete, we dont attempt to render the image
//   let [dogImage, setDogImage] = useState(null)

//     // 3. Create out useEffect function
//   useEffect(() => {
//     fetch("https://dog.ceo/api/breeds/image/random/3")
//     .then(response => response.json())
//         // 4. Setting *dogImage* to the image url that we received from the response above
//     .then(data => setDogImage(data.message))
//   },[])

//   return (
//     <div className="App">
//         {/* 5. Returning an img element for each url, again with the value of our src set to the image url */}
//     {dogImage && dogImage.map((dog) => <img width={"200px"} height={"200px"} src={dog}></img>)}
//     </div>
//   );
// }

// export default App;