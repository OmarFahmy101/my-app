//challenge 1
// const website = (
//   <nav>
//     <h1>FAHMY SITE</h1>
//     <ul>
//       <li>pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )
//challenge 2
// const page = (
//   <div>
//     <h1>1</h1>
//     <h2>2</h2>
//     <h3>3</h3>
//     <h4>4</h4>
//   </div>
// )
// function Page() {
//   return (
//     <div>
//       <h1>1</h1>
//       <h2>2</h2>
//       <h3>3</h3>
//       <h4>4</h4>
//     </div>
//   )
// }

import Footer from "./components/Footer";
import GreyReactLogo from "./components/GreyReactLogo";
import HeaderComponent from "./components/header";
import LogoImage from "./components/logoImage";
import NavBar from "./components/NavBar";
import TemporaryName from "./components/TemporaryName";

//challenge 3
// const webPage = (
// <div >
//   <div className="header">
//     <img src="R.png" alt="" className="Logo-image"></img>
//     <h1>Fun facts about React</h1>
//   </div>
//   <ul>
//     <li>Was first released in 2013 </li>
//     <li>Was originally created by jordan walke</li>
//     <li>Has well over 100k stars on github</li>
//     <li>is maintained by Facebook</li>
//     <li>Powers thousands of enterprise apps, including mobile apps</li>
//   </ul>
// </div>
//)
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <LogoImage /> */}
      <HeaderComponent />
      <GreyReactLogo />
      <TemporaryName />
      <Footer />
    </div>
  );
}

export default App;



