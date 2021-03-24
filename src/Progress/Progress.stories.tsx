import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { ProgressProps } from "./Progress.types";
import Progress from "../Progress/Progress";

export default {
  title: "Progress",
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: "網頁上方的導覽列",
      },
    },
  },
};

const Demo: Story<ProgressProps> = (args) => {
  const [step, setStep] = useState(1);
  return (
    <SWAPTheme>
      <Progress {...args} step={step} />
      <button onClick={() => setStep(step + 1)}>step +1</button>
      <button onClick={() => setStep(step - 1)}>step -1</button>
      <button onClick={() => setStep(3)}>to step 3</button>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {
  count: 5,
  label: [
    <span>第一個</span>,
    "第二個",
    "第三個",
    <span>
      第四個
      <br />
      個四第
    </span>,
    "最後一個",
  ],
  width: 1000,
};