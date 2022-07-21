import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [questionInput, setQuestionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: questionInput }),
    });
    const data = await response.json();
    setResult(data.result);
    console.log(result);
    setQuestionInput("");
  }

  return (
    <div>
      <Head>
        <title>Insulting Shakespeare</title>
      </Head>
      <main className={styles.main}>
        <form onSubmit={onSubmit}>
          <label>
            Enter your question:
            <input
              type="text"
              name="question"
              value={questionInput}
              onChange={(e) => {
                setQuestionInput(e.target.value);
              }}
            />
            <input type="submit" value="Ask Shakespeare!" />
          </label>
        </form>
        <div className="shakespeareContainer">
          <div>
            <Image
              src="/kisspng-william-shakespeare-romeo-and-juliet-hamlet-droesh-shakespeare-5aad218849c714.7371059615212957523022.png"
              width={200}
              height={200}
              alt="shakespeare"
              className={styles.icon}
            />
          </div>

          <div className="box sb1">
            {result ? result : "What does thou want to ask?"}
          </div>
        </div>
      </main>
    </div>
  );
}
