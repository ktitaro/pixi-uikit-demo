import * as PIXI from 'pixi.js'
import * as PIXIUI from '@pixi/ui'

interface ButtonProps {
    readonly text: string
    readonly width: number
    readonly height: number
    readonly radius: number
    readonly bgColor: string
    readonly fgColor: string
}

export class Button {
    private props: ButtonProps
    private _widget?: PIXIUI.Button

    constructor(props: ButtonProps) {
        this.props = props
        this.assemble()
    }

    public get widget() {
        return this._widget
    }

    private assemble() {
        const view = this.createView()
        view.addChild(this.createBase())
        view.addChild(this.createText())
        view.pivot.x = (view.width / 2)
        view.pivot.y = (view.height / 2)
        this._widget = new PIXIUI.Button()
        this._widget.view = view as any
    }

    private createView() {
        return new PIXI.Container()
    }

    private createBase() {
        const w = this.props.width
        const h = this.props.height
        const r = this.props.radius
        const c = this.props.bgColor
        const widget = new PIXI.Graphics()
        widget.roundRect(0, 0, w, h, r)
        widget.fill({ color: c })
        return widget
    }

    private createText() {
        const t = this.props.text
        const c = this.props.fgColor
        const widget = new PIXI.Text()
        widget.style.fill = c
        widget.anchor.x = 0.5
        widget.anchor.y = 0.5
        widget.text = t
        return widget
    }
}
