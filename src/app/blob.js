import { useRef, useEffect } from "react";
import * as THREE from "three";

const BlobScene = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for transparency

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to black with alpha 0
    containerRef.current.appendChild(renderer.domElement);

    // Create blob geometry
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
    });
    const blob = new THREE.Mesh(geometry, material);
    scene.add(blob);

    // Position camera
    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate blob
      // blob.rotation.x += 0.01;
      // blob.rotation.y += 0.01;

      // Render scene
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);

      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="z-10" ref={containerRef} />;
};

export default BlobScene;
