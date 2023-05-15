import React, { useState } from "react";

type Props = {};

export const Page: React.FC<Props> = () => {
  const [todos, setTodos] = useState<string[]>(["日報を書く"]);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>("");
  const [impression, setImpression] = useState<string>("");
  return (
    <>
      <header className="py-6">
        <h1 className="text-slate-600 text-2xl">演習課題用ページ</h1>
      </header>
      <main className="flex flex-col space-y-4 text-slate-600">
        <section className="bg-slate-100 p-4 rounded-md">
          <h2 className="text-xl">Pattern1 : buttonとクリック</h2>
          <div className="px-2">
            <div className="py-2">
              <div>
                <p className="py-2">利用しているサービス</p>
                <span className="mx-2">
                  <label>
                    <input type="checkbox" name="service" />
                    <span className="ml-1">kintone</span>
                  </label>
                </span>
                <span className="mx-2">
                  <label>
                    <input type="checkbox" name="service" />
                    <span className="ml-1">Garoon</span>
                  </label>
                </span>
                <span className="mx-2">
                  <label>
                    <input type="checkbox" name="service" />
                    <span className="ml-1">Office</span>
                  </label>
                </span>
                <span className="mx-2">
                  <label>
                    <input type="checkbox" name="service" />
                    <span className="ml-1">Mailwise</span>
                  </label>
                </span>
              </div>
            </div>
            <div className="py-2">
              <div>
                <p className="py-2">感想</p>
                <span className="mx-2">
                  <label>
                    <input type="radio" name="service" />
                    <span>とても良い</span>
                  </label>
                </span>
                <span className="mx-2">
                  <label>
                    <input type="radio" name="service" />
                    <span>良い</span>
                  </label>
                </span>
                <span className="mx-2">
                  <label>
                    <input type="radio" name="service" />
                    <span>悪い</span>
                  </label>
                </span>
                <span className="mx-2">
                  <label>
                    <input type="radio" name="service" />
                    <span>とても悪い</span>
                  </label>
                </span>
                <span className="mx-2">
                  <label>
                    <input type="radio" name="service" />
                    <span>わからない</span>
                  </label>
                </span>
              </div>
            </div>
            <div className="py-2">
              <button
                className="bg-sky-700 px-3 py-1 rounded-md text-slate-50 text-sm"
                onClick={() => setIsSaved(true)}
              >
                保存
              </button>
              {isSaved && <span className="mx-1 text-sm">保存しました</span>}
            </div>
          </div>
        </section>
        <section className="bg-slate-100 p-4 rounded-md">
          <h2 className="text-xl">Pattern2 : Textboxと入力</h2>
          <div className="p-2 flex-col flex">
            <label className="py-2" htmlFor="impressions">
              感想
            </label>
            <input
              type="textarea"
              id="impressions"
              value={impression}
              onChange={(e) => setImpression(e.target.value)}
            />
            {impression.length > 140 && (
              <div className="p-2 text-sm text-rose-700">
                ※ 140文字以内で入力してください
              </div>
            )}
          </div>
        </section>
        <section className="bg-slate-100 p-4 rounded-md">
          <h2 className="text-xl">Pattern3 : 項目追加</h2>
          <div className="p-2 flex flex-row items-center">
            <label htmlFor="todo">TODOタイトル</label>
            <input
              type="text"
              id="todo"
              className="mx-1"
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
            />
            <button
              disabled={todoText == ""}
              onClick={() => {
                setTodoText("");
                setTodos([...todos, todoText]);
              }}
              className={`mx-2 bg-sky-700 ${
                todoText == "" && "opacity-40"
              } px-2 py-1 rounded-md text-slate-50 text-sm`}
            >
              追加
            </button>
          </div>
          <div className="px-2">
            <ul>
              {todos.map((title, index) => (
                <li className="flex-row flex px-2 py-1 items-center">
                  <div>{`☑️ ${title}`}</div>
                  <button
                    onClick={() => {
                      setTodos([...todos].filter((_, idx) => idx !== index));
                    }}
                    className="mx-2 bg-rose-700 px-2 py-1 rounded-md text-slate-50 text-sm"
                  >
                    削除
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <footer className="text-sm text-slate-500 flex flex-row-reverse pt-12">
        サイボウズ開運研修2023「フロントエンドテスト自動化」
      </footer>
    </>
  );
};
