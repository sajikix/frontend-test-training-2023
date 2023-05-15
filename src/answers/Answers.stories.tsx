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

export const Normal: Story = {
  parameters: { chromatic: { disableSnapshot: false } },
};

// 利用しているサービス: kintone / 感想: とても良い /保存ボタン をそれぞれクリックしてみよう
export const Task1: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // kintone という名前のチェックボックスを探す
    const kintoneCheckBox = await canvas.findByRole("checkbox", {
      name: "kintone",
    });
    // kintone という名前のチェックボックスをクリックする
    userEvent.click(kintoneCheckBox);

    // 感想: とても良いのラジオボタンを探す
    const veryGoodRadio = await canvas.findByRole("radio", {
      name: "とても良い",
    });
    // 感想: とても良いのラジオボタンをクリックする
    userEvent.click(veryGoodRadio);

    // 保存ボタンを探す
    const saveButton = await canvas.findByRole("button", {
      name: "保存",
    });
    // 保存ボタンをクリックする
    userEvent.click(saveButton);
  },
};

// 利用しているサービス: kintone / 感想: とても良い をクリックし、ちゃんと選択されていることを確認しよう
export const Task2: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // kintone という名前のチェックボックスを探す
    const kintoneCheckBox = await canvas.findByRole("checkbox", {
      name: "kintone",
    });
    // kintone という名前のチェックボックスをクリックする
    userEvent.click(kintoneCheckBox);

    // kintone という名前のチェックボックスにチェックがついてる
    expect(kintoneCheckBox).toBeChecked();

    // 感想: とても良いのラジオボタンを探す
    const veryGoodRadio = await canvas.findByRole("radio", {
      name: "とても良い",
    });

    // 感想: とても良いのラジオボタンをクリックする
    userEvent.click(veryGoodRadio);

    // とても良い という名前のラジオボタンが選択されている
    expect(veryGoodRadio).toBeChecked();

    // 保存ボタンを探す
    const saveButton = await canvas.findByRole("button", {
      name: "保存",
    });

    // 保存ボタンをクリックする
    userEvent.click(saveButton);

    // 保存しましたというテキストが表示されている
    await canvas.findByText("保存しました");
  },
};

// 感想部分に「最高だった！」と書き込んでみよう
export const Task3: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 感想というラベルのついたテキストボックスを探す
    const impressionTextbox = await canvas.findByLabelText("感想");

    // 「最高だった！」と書き込む
    userEvent.type(impressionTextbox, "最高だった！");
  },
};

// 感想部分に140文字以上入力してエラーが出ることを確認してみよう。
export const Task4: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 感想というラベルのついたテキストボックスを探す
    const impressionTextbox = await canvas.findByLabelText("感想");

    // 140文字以上の内容を書き込む。
    userEvent.type(
      impressionTextbox,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );

    // 文字数オーバーのエラーを確認する
    await canvas.findByText("※ 140文字以内で入力してください");
  },
};

// TODOリストに２つ項目を追加し、全部でTODOが3つあることを確認してみよう。
export const Task5: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 「TODOタイトル」というラベルのついたテキストボックスを探す
    const todoTextbox = await canvas.findByLabelText("TODOタイトル");

    // TODOタイトルを入力する
    userEvent.type(todoTextbox, "講義を受ける");

    // 追加ボタンを探す
    const addTodoButton = await canvas.findByRole("button", { name: "追加" });

    // 追加ボタンを押す
    userEvent.click(addTodoButton);

    // 項目が追加されるまで待つ
    await waitFor(() => {
      // addボタンは空白だとdisableになるのでそうなるまで待つ
      expect(addTodoButton).toBeDisabled();
    });

    // TODOタイトルを入力する
    userEvent.type(todoTextbox, "感想を書く");

    // 追加ボタンを押す
    userEvent.click(addTodoButton);

    // 項目が追加されるまで待つ
    await waitFor(() => {
      // addボタンは空白だとdisableになるのでそうなるまで待つ
      expect(addTodoButton).toBeDisabled();
    });

    // TODOリストを取得する
    const todoListItem = await canvas.findAllByRole("listitem");

    // TODOリストの長さが3であることを確認する
    expect(todoListItem.length).toBe(3);
  },
};
