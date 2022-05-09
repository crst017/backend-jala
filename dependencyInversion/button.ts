export default class Button {

    constructor(private lamp: Switchable) {
    }

    onButtonListener(status: boolean) {
        status ? this.lamp.turnOn() : this.lamp.turnOff()
    }

}