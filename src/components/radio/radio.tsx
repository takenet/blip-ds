import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'bds-radio',
    styleUrl: 'radio.scss',
    shadow: true
})
export class Radio {

    @Prop() label!: string;

    render(): HTMLElement {
        return (
            <label htmlFor="test">
                <input type="radio" />
                <div></div>
                <span>{this.label}</span>
            </label>
        )
    }
}