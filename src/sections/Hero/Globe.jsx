import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export default function GlobeBackground() {

  const globeEl = useRef();

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // ✅ Responsive resize
  useEffect(() => {

    const handleResize = () => {

      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  // ✅ Globe controls
  useEffect(() => {

    if (!globeEl.current) return;

    const controls = globeEl.current.controls();

    // 🌍 Auto rotate
    controls.autoRotate = true;

    controls.autoRotateSpeed = 1.4;

    // 🌍 Smaller globe zoom
    globeEl.current.pointOfView({
      lat: 20,
      lng: 30,
      altitude: 3.2,
    });

  }, []);

  return (

    <div className="absolute inset-0 z-0 overflow-hidden opacity-90 ">

      {/* 🌍 GLOBE */}
      <Globe
        ref={globeEl}

        width={dimensions.width}
        height={dimensions.height}

        backgroundColor="rgba(0,0,0,0)"

        // 🌍 Earth Texture
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"

        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

        // 🌍 Atmosphere
        atmosphereColor="#38bdf8"

        atmosphereAltitude={0.18}
      />

      {/* 🌌 Glow Effect */}
      <div className="absolute inset-0 bg-sky-500/5 blur-[120px] pointer-events-none"></div>

    </div>
  );
}