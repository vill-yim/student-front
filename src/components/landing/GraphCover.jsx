import { createChart, ColorType } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";

export const GraphCover=(props)=>{
  const {
    data,
    colors: {
      backgroundColor = "#000002",
      lineColor = "#2962FF",
      textColor = "white",
      areaTopColor = "#2962FF",
      areaBottomColor = "rgba(41, 98, 255, 0.28)",
    } = {},
  } = props;

  const chartContainerRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const newChart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: backgroundColor },
          textColor,
        },
        width: chartContainerRef.current.clientWidth,
        height: 380, // Ajusta la altura según sea necesario
      });

      const newSeries = newChart.addAreaSeries({
        lineColor,
        topColor: areaTopColor,
        bottomColor: areaBottomColor,
      });

      // Usa los datos que vienen de props
      newSeries.setData(data);

      newChart.timeScale().fitContent();
      setChart(newChart);

      const resizeObserver = new ResizeObserver(() => {
        if (chartContainerRef.current) {
          newChart.applyOptions({
            width: chartContainerRef.current.clientWidth,
          });
        }
      });

      resizeObserver.observe(chartContainerRef.current);

      return () => {
        resizeObserver.disconnect();
        newChart.remove();
      };
    }
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return (
    <div
      ref={chartContainerRef}
      style={{
        width: "680px",
        maxWidth: "100%",
        height: "380px",
        position: "relative",
      }}
    />
  );
}
