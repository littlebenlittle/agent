class PlayMacroAction extends KeyAction implements Serializable<PlayMacroAction> {

    private _macroId: number;

    get macroId(): number {
        return this._macroId;
    }

    set macroId(value) {
        if (!TypeChecker.isUInt8Valid(value)) {
            throw `Invalid PlayMacroAction.macroId: ${value}`;
        }
        this._macroId = value;
    }

    fromJsObject(jsObject: any): PlayMacroAction {
        this.assertKeyActionType(jsObject, KeyActionType.PlayMacroAction, 'PlayMacroAction');
        this.macroId = jsObject.macroId;
        return this;
    }

    fromBinary(buffer: UhkBuffer): PlayMacroAction {
        this.readAndAssertKeyActionId(buffer, KeyActionId.PlayMacroAction, 'PlayMacroAction');
        this.macroId = buffer.readUInt8();
        return this;
    }

    toJsObject(): any {
        return {
            keyActionType: KeyActionType.PlayMacroAction,
            macroId: this.macroId
        };
    }

    toBinary(buffer: UhkBuffer) {
        buffer.writeUInt8(KeyActionId.PlayMacroAction);
        buffer.writeUInt8(this.macroId);
    }
}
