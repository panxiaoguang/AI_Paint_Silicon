"use client";

import {
  Textarea,
  Select,
  SelectItem,
  Slider,
  Switch,
  Button,
  Chip,
} from "@heroui/react";

export const GenerateIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M10.5 5 11.5 4.33 12.5 5 12.17 3.83 13 3.12 12 3 11.5 2 11 3 10 3.12 10.83 3.83 10.5 5z"></path>
      <path d="M20.33 13.67 19.5 12 18.67 13.67 17 13.88 18.39 15.06 17.83 17 19.5 15.89 21.17 17 20.61 15.06 22 13.88 20.33 13.67z"></path>
      <path d="M4.83 9 6.5 7.89 8.17 9 7.61 7.05 9 5.88 7.33 5.67 6.5 4 5.67 5.67 4 5.88 5.39 7.05 4.83 9z"></path>
      <path d="m18.71,2.29c-.39-.39-1.02-.39-1.41,0L2.29,17.29c-.39.39-.39,1.02,0,1.41l3,3c.2.2.45.29.71.29s.51-.1.71-.29l15-15c.39-.39.39-1.02,0-1.41l-3-3ZM6,19.59l-1.59-1.59,9.09-9.09,1.59,1.59-9.09,9.09Zm10.5-10.5l-1.59-1.59,3.09-3.09,1.59,1.59-3.09,3.09Z"></path>
    </svg>
  );
};

export default function SideBar({
  prompt,
  setPrompt,
  model,
  setModel,
  imageSize,
  setImageSize,
  steps,
  setSteps,
  guidanceScale,
  setGuidanceScale,
  promptEnhancement,
  setPromptEnhancement,
  handleGenerate,
}) {
  const imageSizeOptions = [
    {
      label: "1:1",
      value: "1024x1024",
    },
    {
      label: "1:2",
      value: "512x1024",
    },
    {
      label: "3:2",
      value: "768x512",
    },
    {
      label: "3:4",
      value: "768x1024",
    },
    {
      label: "16:9",
      value: "1024x576",
    },
    {
      label: "9:16",
      value: "576x1024",
    },
  ];
  const models = [
    {
      id: "black-forest-labs/FLUX.1-schnell",
      name: "FLUX.1 schnell",
    },
    {
      id: "black-forest-labs/FLUX.1-dev",
      name: "FLUX.1 dev",
    },
    {
      id: "stabilityai/stable-diffusion-3-5-large",
      name: "Stable Diffusion 3.5 Large",
    },
    {
      id: "Kwai-Kolors/Kolors",
      name: "Kolors",
    },
  ];
  return (
    <aside className="w-full md:w-96 md:flex-shrink-0 bg-gray-50/80 backdrop-blur-sm p-6 overflow-y-auto border-r border-gray-200/80">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-secondary p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            color="white"
          >
            <path d="M10.5 5 11.5 4.33 12.5 5 12.17 3.83 13 3.12 12 3 11.5 2 11 3 10 3.12 10.83 3.83 10.5 5z"></path>
            <path d="M20.33 13.67 19.5 12 18.67 13.67 17 13.88 18.39 15.06 17.83 17 19.5 15.89 21.17 17 20.61 15.06 22 13.88 20.33 13.67z"></path>
            <path d="M4.83 9 6.5 7.89 8.17 9 7.61 7.05 9 5.88 7.33 5.67 6.5 4 5.67 5.67 4 5.88 5.39 7.05 4.83 9z"></path>
            <path d="m18.71,2.29c-.39-.39-1.02-.39-1.41,0L2.29,17.29c-.39.39-.39,1.02,0,1.41l3,3c.2.2.45.29.71.29s.51-.1.71-.29l15-15c.39-.39.39-1.02,0-1.41l-3-3ZM6,19.59l-1.59-1.59,9.09-9.09,1.59,1.59-9.09,9.09Zm10.5-10.5l-1.59-1.59,3.09-3.09,1.59,1.59-3.09,3.09Z"></path>
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-gray-900">绘画</h1>
          <Chip color="secondary">从SiliconFlow找回AI模型</Chip>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* 参数: Prompt */}
        <Textarea
          isClearable
          className="w-full"
          label="提示词 (Prompt):"
          labelPlacement="outside"
          minRows={4}
          placeholder="例如：一只穿着宇航服的猫，在月球上冲浪..."
          name="prompt"
          variant="bordered"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onClear={() => setPrompt("")}
        />
        <Select
          className="w-full"
          label="选择模型"
          variant="bordered"
          labelPlacement="outside"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          {models.map((item) => (
            <SelectItem key={item.id}>{item.name}</SelectItem>
          ))}
        </Select>

        {/* 参数: Image Size */}

        <Select
          className="w-full"
          label="图片尺寸 (Image Size)"
          variant="bordered"
          labelPlacement="outside"
          value={imageSize}
          onChange={(e) => setImageSize(e.target.value)}
        >
          {imageSizeOptions.map((item) => (
            <SelectItem key={item.value}>{item.label}</SelectItem>
          ))}
        </Select>

        {/* 参数: Inference Steps */}
        <Slider
          className="max-w-md"
          defaultValue={8}
          label="推理步数 (Steps)"
          maxValue={50}
          minValue={1}
          step={1}
          color="secondary"
          value={steps}
          onChange={(e) => setSteps(e)}
        />

        {/* 参数: Guidance Scale */}
        <Slider
          className="max-w-md"
          defaultValue={3.5}
          label="引导系数 (Guidance Scale)"
          maxValue={20}
          minValue={1}
          step={0.1}
          color="secondary"
          value={guidanceScale}
          onChange={(e) => setGuidanceScale(e)}
        />

        {/* 参数: Prompt Enhancement */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">提示词增强</span>
          <Switch
            defaultSelected
            aria-label="提示词增强"
            color="secondary"
            value={promptEnhancement}
            onChange={(e) => setPromptEnhancement(e)}
          />
        </div>

        {/* 生成按钮 */}
        <Button
          startContent={<GenerateIcon />}
          className="w-full"
          color="secondary"
          onPress={handleGenerate}
        >
          生成图像
        </Button>
      </div>
    </aside>
  );
}
