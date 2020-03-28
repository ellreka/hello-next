import { NextPage } from "next";
import { useRef, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Slider } from "@material-ui/core";

const Home: NextPage = () => {
  const canvasRef = useRef(null);
  const [range, setRange] = useState<any>(50);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    return canvas.getContext("2d");
  };

  const drawCanvas = () => {
    const ctx: CanvasRenderingContext2D = getContext();
    const image = new Image();
    image.src = "/icon.png";
    ctx.clearRect(0,0,1000,1000)
    ctx.drawImage(image, range, 0, 100, 100);
    ctx.save();
  };

  const handleChange = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    setRange(value);
  };

  useEffect(() => {
    console.log(canvasRef);
    drawCanvas();
  });
  return (
    <Layout>
      <h1>Hello world!</h1>
      <Slider
        value={range}
        step={1}
        min={0}
        max={100}
        onChange={handleChange}
      />
      <canvas className="canvas" ref={canvasRef}></canvas>
    </Layout>
  );
};

export default Home;
