import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function QuestionAndAnswer(props: { question: string, answer: string }) {

    return (
        <Card className="mb-4 mt-4">
            <CardHeader>
                <CardTitle>{ props.question }</CardTitle>
                <CardDescription>{ props.answer }</CardDescription>
            </CardHeader>
        </Card>
    )

}
