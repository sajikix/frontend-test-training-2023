import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Page } from "../pages/Page";
import React from "react";

const Component = () => {
  return <Page />;
};

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Playground: Story = {
  parameters: { chromatic: { disableSnapshot: false } },
};

// 利用しているサービス: kintone / 感想: とても良い /保存ボタン をそれぞれクリックしてみよう
export const Task1: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // kintone という名前のチェックボックスを探す
    // - findByRole では a11yロール と a11yネーム から探すことができます。
    // - a11yロール と a11yネームはdeveloper toolからも見れます
    const kintoneCheckBox = await canvas.findByRole("", {
      name: "",
    });
    // kintone という名前のチェックボックスをクリックする
    // - userEvent.click([要素]); でクリックできます
    userEvent.click(kintoneCheckBox);

    // 感想: とても良いのラジオボタンを探す

    // 感想: とても良いのラジオボタンをクリックする

    // 保存ボタンを探す

    // 保存ボタンをクリックする
  },
};

// 利用しているサービス: kintone / 感想: とても良い をクリックし、ちゃんと選択されていることを確認しよう
export const Task2: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // kintone という名前のチェックボックスを探す

    // kintone という名前のチェックボックスをクリックする

    // kintone という名前のチェックボックスにチェックがついてる
    // - 拡張されたJestの expect() 構文でその要素の状態を確認できます。
    //   - jestに元からあるもの : https://jestjs.io/ja/docs/expect
    //   - DOM用に拡張されたもの : https://github.com/testing-library/jest-dom
    // - 今回はDOMにチェックがついていることを見たいので......

    // expect().toBeHoge()

    // 感想: とても良いのラジオボタンを探す

    // 感想: とても良いのラジオボタンをクリックする

    // とても良い という名前のラジオボタンが選択されている

    // 保存ボタンを探す

    // 保存ボタンをクリックする

    // 保存しましたというテキストが表示されている
  },
};

// 感想部分に「最高だった！」と書き込んでみよう
export const Task3: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 感想というラベルのついたテキストボックスを探す
    // - labelから入力を探すクエリに findByLabelText がありましたね....

    // 「最高だった！」と書き込む
    // - userEvent.type([要素],'入力文字列') で文字の入力ができます
  },
};

// 感想部分に140文字以上入力してエラーが出ることを確認してみよう。
export const Task4: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 感想というラベルのついたテキストボックスを探す

    // 140文字以上の内容を書き込む。

    // 文字数オーバーのエラーを確認する
    // - エラーは入力ではなく単なるテキストですが、これを取得するクエリもあったはず....
  },
};

// TODOリストに２つ項目を追加し、全部でTODOが3つあることを確認してみよう。
export const Task5: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 「TODOタイトル」というラベルのついたテキストボックスを探す

    // TODOタイトルを入力する

    // 追加ボタンを探す

    // 追加ボタンを押す

    // 項目が追加されるまで待つ(ここは初見殺しなので書いちゃいます)
    await waitFor(() => {
      // 追加ボタンは空白だとdisableになるのでそうなるまで待つ
      // expect([追加ボタン]).toBeDisabled();
    });

    // TODOタイトルを入力する

    // 追加ボタンを押す

    // 項目が追加されるまで待つ(ここは初見殺しなので書いちゃいます)
    await waitFor(() => {
      // addボタンは空白だとdisableになるのでそうなるまで待つ
      // expect([追加ボタン]).toBeDisabled();
    });

    // TODOリストを取得する
    // - findAll〇〇を使えば一気にリストを一気に取ってこれそうですね....

    // TODOリストの長さが3であることを確認する
  },
};
