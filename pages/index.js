import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [questionInput, setQuestionInput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    setLoading(true);
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
    setLoading(false);
    setQuestionInput("");
  }

  return (
    <div>
      <Head>
        <title>Angry Shakespeare</title>
      </Head>
      <div className="headerContainer">
        <h1>Angry Shakespeare - By Hazem Fahad</h1>
      </div>
      <main className={styles.main}>
        <form onSubmit={onSubmit}>
          <label>
            <input
              type="text"
              name="question"
              value={questionInput}
              placeholder="Enter your question here"
              onChange={(e) => {
                setQuestionInput(e.target.value);
              }}
            />
            <input
              type="submit"
              value={loading ? "Loading..." : "Ask Shakespeare!"}
            />
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
