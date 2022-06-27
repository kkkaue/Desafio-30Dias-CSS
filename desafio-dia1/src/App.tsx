import { Card } from "./components/Card"

function App() {
  return (
    <ul className="relative m-0 p-0 flex">
      <Card className="bg-[#3b5999]" icon="fa fa-facebook"/>
      <Card className="bg-[#55acee]" icon="fa fa-twitter"/>
      <Card className="bg-[#dd4b39]" icon="fa fa-google-plus"/>
      <Card className="bg-[#0077b5]" icon="fa fa-linkedin"/>
      <Card className="bg-[#e4405f]" icon="fa fa-instagram"/>
    </ul>
  )
}

export default App
