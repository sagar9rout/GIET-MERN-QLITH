
import './App.css'
import ChildA from './ChildA'
import Card from './Card';

let data=[
  {
    Title:"Demon Slayer",
    desc:"Anime about demons and slayers",
    // img:"https://www.chromethemer.com/download/hd-wallpapers/demon-slayer-art-3840x2160.jpg"
    img:"https://wallpapers-clan.com/wp-content/uploads/2025/04/demon-slayer-tanjiro-burning-spirit-desktop-wallpaper-preview.jpg"
  },
  {
    Title:"Attack on Titan",
    desc:"Anime about titans and war",
    img :"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/364b47fb-12ce-467c-8384-e147ab7e6893/d61olzx-99fc01c7-969f-49c6-a448-1d95b3a41017.jpg/v1/fill/w_1024,h_640,q_75,strp/attack_on_titans_anime_wallpaper__1920x1200__by_abdu1995_d61olzx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6Ii9mLzM2NGI0N2ZiLTEyY2UtNDY3Yy04Mzg0LWUxNDdhYjdlNjg5My9kNjFvbHp4LTk5ZmMwMWM3LTk2OWYtNDljNi1hNDQ4LTFkOTViM2E0MTAxNy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sCzvMB-ddVtGTn9jaO4g0EWWZRrBScs2C7pP3tOHnhc"
  },
  {
    Title:"One Piece",
    desc:"Anime about pirates and adventure",
    img:"https://4kwallpapers.com/images/wallpapers/one-piece-egghead-2560x1440-14417.jpeg"
  },
  {
    Title:"Naruto",
    desc:"Anime about ninjas and friendship",
    img:"https://i.pinimg.com/736x/79/2a/48/792a48f1bd5401b1f0fcd62bcc81a5db.jpg"
  }
]

function App() {
  let a = 20;
  return (
    <>
      <div>
        {/* <h1 className='bg-orange-400'>Parent Component</h1>
        <ChildA num={a} str={"Optimus Prime"} ispassed={true} isPassed={false} arr={[1,2,3,4]} /> */}
        {/* num,str are key and {are value} */}
        <div className='max-w-7xl mx-auto flex flex-wrap'>
          {
            data.map((obj) => (
              <Card obj={obj}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
