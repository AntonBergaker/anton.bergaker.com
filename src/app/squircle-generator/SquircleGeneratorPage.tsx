"use client";
import { useEffect } from "react";
import ProjectPage from "@components/layouts/ProjectPage";
import SliderWithInput from "@components/SliderWithInput";
import StylishButton from "@components/StylishButton";
import SaveIcon from "@components/svgs/SaveIcon";
import { SliderWithInputElement } from "@components/slider_with_input";
import styles from "./squircle-generator.module.scss";
const { canvasContainer, canvasResize, sliders } = styles;

function getColorArrayFromString(value: string): [number, number, number] {
    value = value.replace("#", "");
    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4, 6), 16);
    return [r / 255, g / 255, b / 255];
}

const fragmentShaderSource = `
precision highp float;
varying vec2 v_vTexcoord;
uniform float u_factor;
uniform float u_width;
uniform float u_height;
uniform vec4 u_color;
void main() {
    vec4 texColor = u_color;
    float len = pow(abs(v_vTexcoord.x * u_width), u_factor) + pow(abs(v_vTexcoord.y * u_height), u_factor);
    texColor.a = texColor.a * (1.0-pow(len, 1.0/u_factor))*256.0;
    gl_FragColor = texColor;
}
`;

const vertexShaderSource = `
attribute vec3 in_position;
attribute vec2 in_TextureCoord;
varying vec2 v_vTexcoord;
void main() {
    gl_Position = vec4(in_position, 1.0);
    v_vTexcoord = in_position.xy;
}
`;

function createShader(gl: WebGLRenderingContext, source: string, type: GLenum): WebGLShader {
    const shader = gl.createShader(type)!;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(`Could not compile WebGL shader.\n\n${gl.getShaderInfoLog(shader)}`);
    }
    return shader;
}

export default function SquircleGeneratorPage() {
    useEffect(() => {
        const factorSlider = new SliderWithInputElement(document.getElementById("factorSlider")!, [
            (x) => Math.pow(x, 1 / 10),
            (x) => Math.pow(x, 10),
        ]);
        const ratioSlider = new SliderWithInputElement(document.getElementById("ratioSlider")!);
        const resolutionElement = document.getElementById("resolutionBox") as HTMLInputElement;
        const colorPickerElement = document.getElementById("colorPicker") as HTMLInputElement;
        const canvas = document.getElementById("gl-canvas") as HTMLCanvasElement;
        const saveButton = document.getElementById("saveButton")!;

        const gl = canvas.getContext("webgl", { preserveDrawingBuffer: true, premultipliedAlpha: false })!;

        let render = () => {};

        if (gl) {
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
            const fragmentShader = createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
            const program = gl.createProgram()!;
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ZERO);

            const factorUniform = gl.getUniformLocation(program, "u_factor");
            const colorUniform = gl.getUniformLocation(program, "u_color");
            const heightUniform = gl.getUniformLocation(program, "u_height");
            const widthUniform = gl.getUniformLocation(program, "u_width");

            const vertices = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0];
            const vertexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

            const posAttr = gl.getAttribLocation(program, "in_position");
            gl.enableVertexAttribArray(posAttr);
            gl.vertexAttribPointer(posAttr, 3, gl.FLOAT, false, 0, 0);

            render = () => {
                gl.clearColor(0, 0, 0, 0);
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.uniform1f(factorUniform, factorSlider.value);
                const color = getColorArrayFromString(colorPickerElement.value);
                gl.uniform4f(colorUniform, color[0], color[1], color[2], 1);
                let width = 1, height = 1;
                if (ratioSlider.value < 0) width = 1 / (1.01 + ratioSlider.value);
                else if (ratioSlider.value > 0) height = 1 / (1.01 - ratioSlider.value);
                gl.uniform1f(widthUniform, width);
                gl.uniform1f(heightUniform, height);
                gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
            };
            render();
        }

        resolutionElement.addEventListener("change", () => {
            canvas.width = resolutionElement.valueAsNumber;
            canvas.height = resolutionElement.valueAsNumber;
            gl.viewport(0, 0, canvas.width, canvas.height);
            requestAnimationFrame(render);
        });
        factorSlider.onChanged(() => requestAnimationFrame(render));
        ratioSlider.onChanged(() => requestAnimationFrame(render));
        colorPickerElement.addEventListener("change", () => requestAnimationFrame(render));
        colorPickerElement.addEventListener("input", () => requestAnimationFrame(render));
        saveButton.addEventListener("mousedown", () => {
            const url = canvas.toDataURL();
            const a = document.createElement("a");
            a.href = url;
            a.download = "squircle";
            a.click();
            a.remove();
        });
    }, []);

    return (
        <ProjectPage>
            <h1>Squircle PNG Generator</h1>

            <div className={canvasContainer}>
                <div className={canvasResize}>
                    <canvas id="gl-canvas" width="512" height="512">
                        Your browser is unable to render the canvas.
                    </canvas>
                </div>
            </div>

            <div className={sliders}>
                <SliderWithInput id="factorSlider" label="Factor" integer={false} minValue={1} maxValue={100} defaultValue={4} />
                <SliderWithInput id="ratioSlider" label="Ratio" integer={false} minValue={-1} maxValue={1} defaultValue={0} />
            </div>
            <div className={sliders}>
                <div>
                    <label htmlFor="colorPicker">Color</label>
                    <input type="color" id="colorPicker" defaultValue="#FFFFFF" />
                </div>
            </div>
            <div className={sliders}>
                <div>
                    <label style={{ display: "block" }}>Resolution</label>
                    <input id="resolutionBox" type="number" defaultValue={512} max={4096} min={16} />
                </div>
            </div>
            <div className={sliders}>
                <StylishButton id="saveButton" text="DOWNLOAD" color="#D51F3E">
                    <SaveIcon />
                </StylishButton>
            </div>

            <h2>About</h2>
            <p>
                Use the controls above to create a Squircle, something in between a square and a circle. You can
                customize the shape, color and resolution of your Squircle. Using too high resolutions might break
                the website. The Squircle is generated locally in your browser, you can even save this website for
                offline use. Hit DOWNLOAD to save the resulting PNG file to your device. Allegedly this blurb is
                important for SEO.
            </p>
        </ProjectPage>
    );
}
