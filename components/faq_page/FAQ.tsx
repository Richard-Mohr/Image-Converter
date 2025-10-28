import { Header } from "../header/Header"
import { Footer } from "../footer/footer"
import { QuestionAndAnswer } from "./QuestionAndAnswer"

export function FAQ() {
    return (
        <div className="min-h-screen bg-background">
            <Header/>
            <div className="p-8">
                <QuestionAndAnswer
                    question="Is this image converter really free to use?"
                    answer="Yes. The converter is completely free with no hidden fees, watermarks, or sign-ups required."
                />
                <QuestionAndAnswer
                    question="Does it work offline?"
                    answer="Yes. Once the page is loaded, you can use the converter even without an internet connection. All conversions happen locally in your browser."
                />
                <QuestionAndAnswer
                    question="How does this image converter protect my privacy?"
                    answer="This image converter works entirely in your browser. No images are uploaded or stored on any server, so your files never leave your device. Your data stays 100% under your control."
                />
                <QuestionAndAnswer
                    question="Which image formats are supported?"
                    answer="You can choose between PNG, JPG, and WebP formats. We're also working on adding additional file types in future updates."
                />
                <QuestionAndAnswer
                    question="Do I need to install any software?"
                    answer="No installation is required. The Secure Image Converter runs directly in your browser."
                />
            </div>
            <Footer/>
        </div>
    )
}
