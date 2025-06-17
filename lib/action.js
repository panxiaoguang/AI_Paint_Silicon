"use server";

import { getAuthUser } from "@/lib/auth";

function toQueryString(obj) {
  return Object.entries(obj)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
}


export async function checkAuth() {
  const user = await getAuthUser();
  return !!user;
}

export async function generateImage(
  prompt,
  model,
  imageSize,
  steps,
  guidanceScale,
  promptEnhancement
) {
  const user = await getAuthUser();

  if (!user) {
    return { error: "请先登录" };
  }
  console.log(`${user.username} 用户登录成功`);

  if (model === "pollinations/flux") {
    const ApiUrl = "https://image.pollinations.ai/prompt/";
    const encode_prompt = encodeURIComponent(prompt);
    const [width, height] = imageSize.split("x");
    const params =  {
      width: width,
      height: height,
      nologo: true,
      enhance: Boolean(promptEnhancement),
    };
    const queryString = toQueryString(params);
    const response = await fetch(`${ApiUrl}${encode_prompt}?${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.POLLINATIONS_API_KEY}`,
      }
    });
    const data = await response.blob();
    if (data) {
      return data;
    } else {
      return null;
    }
  } else {
    const ApiUrl = "https://api.siliconflow.cn/v1/images/generations";
    const response = await fetch(ApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SILICONFLOW_API_KEY}`,
      },
      body: JSON.stringify({
        model: model,
        prompt: prompt,
        image_size: imageSize,
        batch_size: 1,
        num_inference_steps: steps,
        guidance_scale: guidanceScale,
        prompt_enhancement: promptEnhancement,
      }),
    });

    const data = await response.json();
    if (data.images) {
      return data;
    } else {
      return null;
    }
  }
}
