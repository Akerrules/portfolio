import Spline from "@splinetool/react-spline/next";

export default function SplineSphere() {
  return (
    <main className="overflow-hidden">
      <Spline
        scene="https://prod.spline.design/xomL57AOhrDprJ2h/scene.splinecode"
        width={100}
        style={{ height: "100vh" }}
      />
    </main>
  );
}
