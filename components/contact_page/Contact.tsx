import { Header } from "../header/Header"
import { Footer } from "../footer/footer"

export function Contact() {
    return (
        <div className="min-h-screen bg-background">
            <Header/>
            <div>
                <p>You can find me on <a href="https://github.com/Richard-Mohr">GitHub</a>.</p>
            </div>
            <Footer/>
        </div>
    )
}
