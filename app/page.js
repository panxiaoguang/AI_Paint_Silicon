"use client";

import NavbarComponent from "@/components/navbar";
import SideBar from "@/components/sideBar";
import Footer from "@/components/fotter";
import { useState, Suspense } from "react";
import { Spinner } from "@heroui/react";
import { generateImage, checkAuth } from "@/lib/action";
import { ImageDisplay, ImageDisplay2 } from "@/components/displayImages";
import { useRouter } from "next/navigation";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("black-forest-labs/FLUX.1-schnell");
  const [imageSize, setImageSize] = useState("1024x1024");
  const [steps, setSteps] = useState(8);
  const [guidanceScale, setGuidanceScale] = useState(3.5);
  const [promptEnhancement, setPromptEnhancement] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    // 先检查认证状态
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }
    setImageData(
      generateImage(
        prompt,
        model,
        imageSize,
        steps,
        guidanceScale,
        promptEnhancement
      )
    );
  };
  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      <SideBar
        prompt={prompt}
        setPrompt={setPrompt}
        model={model}
        setModel={setModel}
        imageSize={imageSize}
        setImageSize={setImageSize}
        steps={steps}
        setSteps={setSteps}
        guidanceScale={guidanceScale}
        setGuidanceScale={setGuidanceScale}
        promptEnhancement={promptEnhancement}
        setPromptEnhancement={setPromptEnhancement}
        handleGenerate={handleGenerate}
      />
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-100">
        <NavbarComponent />

        <div className=" bg-white border-2 border-secondary h-[calc(100vh-64px-53px)] m-14 rounded-xl border-dashed shadow-lg justify-items-center content-center">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-full">
                <Spinner color="secondary" />
              </div>
            }
          >
            {model === "pollinations/flux" ? (
              <ImageDisplay2
                imageData={imageData}
                w={450}
                h={450}
                open={open}
                setOpen={setOpen}
              />
            ) : (
              <ImageDisplay
                imageData={imageData}
                w={450}
                h={450}
                open={open}
                setOpen={setOpen}
              />
            )}
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
}
