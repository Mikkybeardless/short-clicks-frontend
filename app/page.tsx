
import Footer from './ui/home/footer'
import Header from './ui/home/header'
import Main from './ui/home/main'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header/>
    <Main/>
    <Footer/>
    </div>
  )
}