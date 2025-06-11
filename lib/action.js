'use server'

import { getAuthUser } from "@/lib/auth";

export async function checkAuth() {
    const user = await getAuthUser();
    return !!user;
}

export async function generateImage(prompt, model, imageSize, steps, guidanceScale, promptEnhancement) {
    const user = await getAuthUser();
    
    if (!user) {
        return { error: "请先登录" }
    }
    console.log(`${user.username} 用户登录成功`)
    
    const ApiUrl = "https://api.siliconflow.cn/v1/images/generations"
    const response = await fetch(ApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.SILICONFLOW_API_KEY}`
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
    })

    const data = await response.json();
    if (data.images) {
        return data;
    } else {
        return null;
    }
}
