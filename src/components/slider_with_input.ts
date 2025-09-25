export class SliderWithInputElement {
    slider: HTMLInputElement;
    box: HTMLInputElement;

    listeners: ((value: number) => void)[]

    toSliderAlgorithm: (value: number) => number;
    fromSliderAlgoritm: (value: number) => number;

    get value(): number {
        return this.box.valueAsNumber;
    }
    set value(number: number) {
        const sliderNumber = this.toSliderAlgorithm(number)

        let changed = false
        if (this.box.value != number.toString()) {
            changed = true
            this.box.valueAsNumber = number
        }
        if (this.slider.valueAsNumber != sliderNumber) {
            changed = true
            this.slider.valueAsNumber = sliderNumber
        }

        if (changed) {
            for (const listener of this.listeners) {
                listener(this.value)
            }
        }
    }

    constructor(element: HTMLElement, 
        sliderAlgorithm?: [
            (input: number) => number, 
            (input: number) => number
        ]
    ) {
        this.listeners = []
        this.slider = element.querySelector("input[type=range]") as HTMLInputElement
        this.box = element.querySelector("input[type=number]") as HTMLInputElement

        [this.toSliderAlgorithm, this.fromSliderAlgoritm] = sliderAlgorithm ?? [x => x, x => x]

        this.slider.max = this.toSliderAlgorithm(Number(this.slider.max)).toString()
        this.slider.min = this.toSliderAlgorithm(Number(this.slider.min)).toString()
        this.slider.valueAsNumber = this.toSliderAlgorithm(this.box.valueAsNumber)

        const getNumber = (e: Event) => {
            if (e.target && "value" in e.target) {
                return Number(e.target.value)
            }
            return 0;
        }

        this.slider.addEventListener("change", (e) => this.value = this.fromSliderAlgoritm(getNumber(e)))
        this.slider.addEventListener("input", (e) => this.value = this.fromSliderAlgoritm(getNumber(e)))
        this.box.addEventListener("change", (e) => this.value = getNumber(e) )
    }

    onChanged(handler: (value: number) => void) {
        this.listeners.push(handler)
    }
}