import { SliderWithInputElement } from "@components/slider_with_input";

if (typeof document != 'undefined') {

const factorSlider = new SliderWithInputElement(document.getElementById("factorSlider")!, [x => Math.pow(x, 1/10), x => Math.pow(x, 10)])
const ratioSlider = new SliderWithInputElement(document.getElementById("ratioSlider")!)
const resolutionElement = document.getElementById("resolutionBox") as HTMLInputElement
const colorPickerElement = document.getElementById("colorPicker") as HTMLInputElement

const canvas = document.getElementById("gl-canvas") as HTMLCanvasElement;

resolutionElement.addEventListener("change", (e) => {
    canvas.width = resolutionElement.valueAsNumber
    canvas.height = resolutionElement.valueAsNumber

    gl.viewport(0,0,canvas.width,canvas.height);
    requestAnimationFrame(render);
})

factorSlider.onChanged(() => {
    requestAnimationFrame(render);
})

ratioSlider.onChanged(() => {
    requestAnimationFrame(render);
})

colorPickerElement.addEventListener("change", (e) => {
    requestAnimationFrame(render);
})
colorPickerElement.addEventListener("input", (e) => {
    requestAnimationFrame(render);
})

const saveButon = document.getElementById("saveButton")!;
saveButon.addEventListener("mousedown", (e) => {
    const url = canvas.toDataURL();

    // Create an anchor, and set the href value to our data URL
    const createEl = document.createElement('a');
    createEl.href = url;

    // This is the name of our downloaded file
    createEl.download = "squircle";

    // Click the download button, causing a download, and then remove it
    createEl.click();
    createEl.remove();
})

const gl = canvas.getContext("webgl", {
    preserveDrawingBuffer: true,
    premultipliedAlpha: false

})!;

// Replace this with rerender function in setup
let render = () => {}

function setupGl() {
    if (gl == null) {
        return;
    }

    gl.viewport(0,0,canvas.width,canvas.height);
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)

    const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);

    // Create a program and attach the shaders
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Could not link program:", gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ZERO);

    // Set uniforms
    var factorUniform = gl.getUniformLocation(program, "u_factor");
    var colorUniform = gl.getUniformLocation(program, "u_color");
    var heightUniform = gl.getUniformLocation(program, "u_height");
    var widthUniform = gl.getUniformLocation(program, "u_width");

    // Create a buffer to hold the vertices
    var vertices = [  
        1, 1, 0.0,
        -1, 1, 0.0,
        -1, -1, 0.0,
        1, -1, 0.0
    ];

    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Bind the vertex buffer to the position attribute
    var positionAttributeLocation = gl.getAttribLocation(program, 'in_position');
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

    render = () => {
        gl.clearColor(0, 0, 0, 0)
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniform1f(factorUniform, factorSlider.value)
        const color = getColorArrayFromString(colorPickerElement.value)
        gl.uniform4f(colorUniform, color[0], color[1], color[2], 1)

        let width = 1;
        let height = 1;
        if (ratioSlider.value < 0) {
            width = 1 / (1.01+ratioSlider.value)
        } else if (ratioSlider.value > 0) {
            height = 1 / (1.01-ratioSlider.value)
        }

        gl.uniform1f(widthUniform, width)
        gl.uniform1f(heightUniform, height)

        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    }

    render();
}

function createShader(gl: WebGLRenderingContext, source: string, type: GLenum) {
    const shader = gl.createShader(type)!;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const info = gl.getShaderInfoLog(shader);
        throw new Error(`Could not compile WebGL program. \n\n${info}`);
    }
    return shader;
}

function getColorArrayFromString(value: string): [number, number, number] {
    value = value.replace("#", "")

    const
        r = parseInt(value.substring(0, 2), 16),
        g = parseInt(value.substring(2, 4), 16),
        b = parseInt(value.substring(4, 6), 16);

    return [r/255, g/255, b/255]
} 


const fragmentShaderSource = `
precision highp float;

varying vec2 v_vTexcoord;

uniform float u_factor;
uniform float u_width;
uniform float u_height;
uniform vec4 u_color;

void main()
{
    vec4 texColor = u_color;
	float len = pow(abs(v_vTexcoord.x * u_width), u_factor) + pow(abs(v_vTexcoord.y * u_height), u_factor);
    texColor.a = texColor.a * (1.0-pow(len, 1.0/u_factor))*256.0;
    gl_FragColor = texColor;
}
`
const vertexShaderSource = `
attribute vec3 in_position;
attribute vec2 in_TextureCoord;

varying vec2 v_vTexcoord;

void main() {
    gl_Position = vec4(in_position, 1.0);

    v_vTexcoord = in_position.xy;
}
`

setupGl();
}