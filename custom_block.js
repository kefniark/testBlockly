Blockly.Blocks['createsprite'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput("default_id"), "ID");
        this.appendDummyInput()
            .appendField("Path")
            .appendField(new Blockly.FieldDropdown([["assets/ship/f1.png", "assets/ship/f1.png"], ["assets/ship/f2.png", "assets/ship/f2.png"], ["assets/ship/f3.png", "assets/ship/f3.png"], ["assets/ship/f4.png", "assets/ship/f4.png"], ["assets/enemy/e_f1.png", "assets/enemy/e_f1.png"], ["assets/enemy/e_f2.png", "assets/enemy/e_f2.png"], ["assets/enemy/e_f3.png", "assets/enemy/e_f3.png"], ["assets/enemy/e_f4.png", "assets/enemy/e_f4.png"], ["assets/enemy/e_f5.png", "assets/enemy/e_f5.png"], ["assets/enemy/e_f6.png", "assets/enemy/e_f6.png"], ["assets/starfield.png", "assets/starfield.png"], ["assets/farback.gif", "assets/farback.gif"], ["assets/bullet.png", "assets/bullet.png"]]), "path");
        this.appendDummyInput()
            .appendField("Position")
            .appendField("X")
            .appendField(new Blockly.FieldNumber(0.5), "X")
            .appendField("Y")
            .appendField(new Blockly.FieldNumber(0.5), "Y");
        this.appendDummyInput()
            .appendField("Scale")
            .appendField("X")
            .appendField(new Blockly.FieldNumber(1, -100, 100), "scaleX")
            .appendField("Y")
            .appendField(new Blockly.FieldNumber(1, -100, 100), "scaleY");
        this.appendDummyInput()
            .appendField("Angle")
            .appendField(new Blockly.FieldNumber(0), "angle");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("Create a new Sprite");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['createtext'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput("default_id"), "ID");
        this.appendDummyInput()
            .appendField("Text")
            .appendField(new Blockly.FieldTextInput("default_text"), "Text");
        this.appendDummyInput()
            .appendField("Size")
            .appendField(new Blockly.FieldNumber(12), "Size");
        this.appendDummyInput()
            .appendField("Color")
            .appendField(new Blockly.FieldColour("#dddddd"), "Color");
        this.appendDummyInput()
            .appendField("Position")
            .appendField("X")
            .appendField(new Blockly.FieldNumber(0.5), "X")
            .appendField("Y")
            .appendField(new Blockly.FieldNumber(0.5), "Y");
        this.appendDummyInput()
            .appendField("Scale")
            .appendField("X")
            .appendField(new Blockly.FieldNumber(1, -100, 100), "scaleX")
            .appendField("Y")
            .appendField(new Blockly.FieldNumber(1, -100, 100), "scaleY");
        this.appendDummyInput()
            .appendField("Angle")
            .appendField(new Blockly.FieldNumber(0), "angle");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("Create a new Text");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['createsprite'] = function (block) {
    var text_id = block.getFieldValue('ID');
    var dropdown_path = block.getFieldValue('path');
    var number_x = block.getFieldValue('X');
    var number_y = block.getFieldValue('Y');
    var number_scalex = block.getFieldValue('scaleX');
    var number_scaley = block.getFieldValue('scaleY');
    var number_angle = block.getFieldValue('angle');

    // TODO: Assemble JavaScript into code variable.
    var code = 'var ' + text_id + ' = new PIXI.Sprite.fromImage("' + dropdown_path + '");\n';
    code += 'console.log(' + text_id + ');\n';
    code += text_id + '.anchor.set(0.5);\n';
    code += text_id + '.x=window.app.screen.width *' + number_x + ';\n';
    code += text_id + '.y=window.app.screen.height *' + number_y + ';\n';
    code += text_id + '.scale.x=' + number_scalex + ';\n';
    code += text_id + '.scale.y=' + number_scaley + ';\n';
    code += text_id + '.rotation=Math.PI / 180 * ' + number_angle + ';\n';
    code += 'window.container.addChild(' + text_id + ');\n';
    return code;
};

Blockly.JavaScript['createtext'] = function (block) {
    var text_id = block.getFieldValue('ID');
    var text = block.getFieldValue('Text');
    var number_x = block.getFieldValue('X');
    var number_y = block.getFieldValue('Y');
    var number_size = block.getFieldValue('Size');
    var number_color = block.getFieldValue('Color');
    var number_scalex = block.getFieldValue('scaleX');
    var number_scaley = block.getFieldValue('scaleY');
    var number_angle = block.getFieldValue('angle');

    console.log(number_size, number_color);
    var code = '';

    // TODO: Assemble JavaScript into code variable.
    code += 'var style = new PIXI.TextStyle({\n';
    code += '    fontSize: ' + number_size+ ',\n';
    code += '    fontWeight: \'bold\',\n';
    code += '    fill: \'' + number_color+ '\'\n';
    code += '});\n';

    code += 'var ' + text_id + ' = new PIXI.Text(\'' + text + '\', style);\n';
    code += text_id + '.anchor.set(0.5);\n';
    code += text_id + '.x=window.app.screen.width *' + number_x + ';\n';
    code += text_id + '.y=window.app.screen.height *' + number_y + ';\n';
    code += text_id + '.scale.x=' + number_scalex + ';\n';
    code += text_id + '.scale.y=' + number_scaley + ';\n';
    code += text_id + '.rotation=Math.PI / 180 * ' + number_angle + ';\n';
    code += 'window.container.addChild(' + text_id + ');\n';
    return code;
};

// Events

Blockly.Blocks['onkeyevent'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Event")
            .appendField(new Blockly.FieldDropdown([["onKeyDown", "onKeyDown"], ["onKeyUp", "onKeyUp"]]), "event");
        this.appendDummyInput()
            .appendField("Key")
            .appendField(new Blockly.FieldDropdown([["ArrowUp", "ArrowUp"], ["ArrowDown", "ArrowDown"], ["ArrowLeft", "ArrowLeft"], ["ArrowRight", "ArrowRight"], ["Space", "Space"]]), "key");
        this.appendStatementInput("onInput")
            .setCheck(null)
            .appendField("Contents");
        this.setColour(60);
        this.setTooltip("Keyboard Input Events");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['onkeyevent'] = function (block) {
    var dropdown_event = block.getFieldValue('event');
    var dropdown_key = block.getFieldValue('key');
    var statements_oninput = Blockly.JavaScript.statementToCode(block, 'onInput');
    // TODO: Assemble JavaScript into code variable.
    var code = '';

    switch (dropdown_event) {
        case 'onKeyDown':
            code += 'document.addEventListener(\'keydown\', (event) => {\n';
            code += 'console.log(event);'
            code += '    if (event.code !== \'' + dropdown_key + '\') return;\n';
            code += 'try {\n'
            code += statements_oninput + '\n';
            code += '} catch(e) {\n';
            code += 'console.warn(e);\n';
            code += '}\n';
            code += '});\n';
            break;
        case 'onKeyUp':
            code += 'document.addEventListener(\'keydown\', (event) => {\n';
            code += '    if (event.code !== \'' + dropdown_key + '\') return;\n';
            code += 'try {\n'
            code += statements_oninput + '\n';
            code += '} catch(e) {\n';
            code += 'console.warn(e);\n';
            code += '}\n';
            code += '});\n';
            break;
    }

    return code;
};

Blockly.Blocks['ongameevent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["onInit","onInit"], ["onUpdate","onUpdate"]]), "event");
      this.appendStatementInput("onInput")
          .setCheck(null)
          .appendField("Contents");
      this.setColour(60);
   this.setTooltip("Game Events");
   this.setHelpUrl("");
    }
  };

Blockly.JavaScript['ongameevent'] = function (block) {
    var dropdown_event = block.getFieldValue('event');
    var statements_oninput = Blockly.JavaScript.statementToCode(block, 'onInput');

    // TODO: Assemble JavaScript into code variable.
    var code = '';

    switch (dropdown_event) {
        case 'onInit':
            code += statements_oninput + '\n';
            break;
        case 'onUpdate':
            code += 'app.ticker.add(function(delta) { \n';
            code += 'try {\n'
            code += statements_oninput + '\n';
            code += '} catch(e) {}\n';
            code += '});\n';
            break;
        case 'onKeyDown':
            document.addEventListener('keydown', (event) => {
                const keyName = event.key;
                alert('keydown event\n\n' + 'key: ' + keyName);
            });
            break;
    }

    return code;
};

Blockly.Blocks['move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("sprite")
            .appendField(new Blockly.FieldTextInput("default_id"), "id");
        this.appendDummyInput()
            .appendField("Relative")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "relative");
        this.appendDummyInput()
            .appendField("X")
            .appendField(new Blockly.FieldNumber(0), "X")
            .appendField("Y")
            .appendField(new Blockly.FieldNumber(0), "Y");
        this.appendStatementInput("animation")
            .setCheck("Anim")
            .appendField("Animation");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['move'] = function (block) {
    var text_id = block.getFieldValue('id');
    var checkbox_relative = block.getFieldValue('relative') == 'TRUE';
    var number_x = block.getFieldValue('X');
    var number_y = block.getFieldValue('Y');
    var statements_animation = Blockly.JavaScript.statementToCode(block, 'animation');
    var code = '';

    if (checkbox_relative) {
        code += text_id + '.x=window.app.screen.width * (' + number_x + ' + ' + text_id + '.x / window.app.screen.width);\n';
        code += text_id + '.y=window.app.screen.height * (' + number_y + ' + ' + text_id + '.y / window.app.screen.height);\n';
    } else {
        code += text_id + '.x=window.app.screen.width *' + number_x + ';\n';
        code += text_id + '.y=window.app.screen.height *' + number_y + ';\n';
    }

    return code;
};

Blockly.Blocks['sprite_get'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Sprite")
            .appendField(new Blockly.FieldTextInput("default"), "id");
        this.appendDummyInput()
            .appendField("Property")
            .appendField(new Blockly.FieldDropdown([["X", "X"], ["Y", "Y"], ["scaleX", "scaleX"], ["scaleY", "scaleY"], ["angle", "angle"], ["sprite", "sprite"]]), "property");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['sprite_get'] = function (block) {
    var text_id = block.getFieldValue('id');
    var dropdown_property = block.getFieldValue('property');
    var code = '';
    console.log(text_id, dropdown_property);

    switch (dropdown_property) {
        case 'X':
            code += text_id + '.x / window.app.screen.width';
            break;
        case 'Y':
            code += text_id + '.y / window.app.screen.width';
            break;
        case 'scaleX':
            code += text_id + '.scale.x';
            break;
        case 'scaleY':
            code += text_id + '.scale.y';
            break;
        case 'angle':
            code += text_id + '.rotation / Math.PI * 180';
            break;
        case 'sprite':
            code = text_id;
            break;
        default:
            console.warn('couldnt find option', dropdown_property);
    }

    return [code, Blockly.JavaScript.ORDER_NONE];
};