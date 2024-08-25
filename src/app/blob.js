// import { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { useGLTF } from "@react-three/drei";
// import { lazy, Suspense } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"; // Import the GLTFLoader
// import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
// import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
// import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
// import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";

// const BlobScene = () => {
//   const containerRef = useRef();

//   useEffect(() => {
//     // Set up scene
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for transparency

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0); // Set clear color to black with alpha 0
//     containerRef.current.appendChild(renderer.domElement);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 2); // color, intensity
//     scene.add(ambientLight);

//     // Add Directional Light (mimics sunlight, cast shadows, brighter)
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // color, intensity
//     directionalLight.position.set(5, 10, 7.5); // set position of light
//     scene.add(directionalLight);

//     // Add Point Light (simulates light bulb or localized light source)
//     const pointLight = new THREE.PointLight(0xffffff, 1, 100); // color, intensity, distance
//     pointLight.position.set(10, 10, 10); // set position of the point light
//     scene.add(pointLight);
//     // const ModelComponent = lazy(() => import("./components/model"));
//     const loader = new GLTFLoader();
//     const geometry = new THREE.SphereGeometry(5, 32, 32);
//     const material = new THREE.MeshBasicMaterial({
//       color: 0x000000,
//       wireframe: false,
//     });

//     var blob = new THREE.Mesh(geometry, material);
//     // Load the model
//     loader.load(
//       // Path to the 3D model
//       "Celestial_Dreams.glb",

//       // Function called when the model is loaded successfully
//       function (gltf) {
//         scene.add(gltf.scene); // Add the loaded model to the scene
//         gltf.scene.position.set(0, 0, 0);
//         blob = gltf.scene; // Set the position of the model
//         OutlinePass.selectedObjects = [blob];
//       },

//       // Function called while the model is loading (optional, for progress tracking)
//       function (xhr) {
//         console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//       },

//       // Function called if there's an error during the load
//       function (error) {
//         console.error("An error happened", error);
//       }
//     );
//     // Create blob geometry
//     // onst blob = new THREE.Mesh(geometry, material);
//     scene.add(blob);

//     // Position camera
//     camera.position.z = 3;

//     // Post-processing for glow/outline effect
//     const composer = new EffectComposer(renderer);
//     const renderPass = new RenderPass(scene, camera);
//     composer.addPass(renderPass);

//     // OutlinePass for the glow effect
//     const outlinePass = new OutlinePass(
//       new THREE.Vector2(window.innerWidth, window.innerHeight),
//       scene,
//       camera,
//       blob
//     );
//     outlinePass.edgeStrength = 10.0; // Strength of the glow/outline
//     outlinePass.edgeGlow = 10.0; // Glow effect (set between 0 and 1)
//     outlinePass.edgeThickness = 10.0; // Thickness of the glow/outline
//     outlinePass.pulsePeriod = 0; // Set to 0 for a constant glow
//     outlinePass.visibleEdgeColor.set("#ffffff"); // Color of the outline
//     outlinePass.hiddenEdgeColor.set("#000000"); // Color of hidden outline (if you want)
//     composer.addPass(outlinePass);

//     // FXAA (anti-aliasing for smoother glow)
//     const effectFXAA = new ShaderPass(FXAAShader);
//     effectFXAA.uniforms["resolution"].value.set(
//       4 / window.innerWidth,
//       4 / window.innerHeight
//     );
//     composer.addPass(effectFXAA);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate blob
//       blob.rotation.x += 0.01;
//       blob.rotation.y += 0.01;

//       // Render scene
//       // renderer.render(scene, camera);
//       composer.render();
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     // Clean up
//     return () => {
//       window.removeEventListener("resize", handleResize);

//       // containerRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div className="z-10" ref={containerRef} />;
// };

// export default BlobScene;
