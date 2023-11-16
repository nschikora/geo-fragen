import Head from "next/head";
import { questions } from "./questions";

interface Question {
  q: string;
  a: string;
}

interface Topic {
  title: string;
  questions: Question[];
}

function Question(question: Question) {
  return (
    <div className="p-4 col-span-1 flex flex-col items-center">
      <div className="flex items-center text-center">
        <h2 className="text-xl mb-4">{question.q}</h2>
      </div>
      <p
        className="text-xs"
        style={{
          transform: "rotate(180deg)",
        }}
      >
        {question.a}
      </p>
    </div>
  );
}

function Topic(topic: Topic) {
  return (
    <div>
      <div className="text-center my-4">
        <h1 className="text-xl font-bold">{topic.title}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {topic.questions.map((question) => (
          <Question {...question} key={question.q} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Geo Fragen</title>
      </Head>
      <div className="p-4">
        {questions.map((topic) => (
          <Topic
            title={topic.topic}
            key={topic.topic}
            questions={topic.questions}
          />
        ))}
      </div>
    </>
  );
}
