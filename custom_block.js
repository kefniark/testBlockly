Blockly.Blocks['createsprite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default_id"), "ID");
    this.appendDummyInput()
        .appendField("Path")
        .appendField(new Blockly.FieldDropdown([["assets/ship/f1.png","assets/ship/f1.png"], ["assets/ship/f2.png","assets/ship/f2.png"], ["assets/ship/f3.png","assets/ship/f3.png"], ["assets/ship/f4.png","assets/ship/f4.png"], ["assets/enemy/e_f1.png","assets/enemy/e_f1.png"], ["assets/enemy/e_f2.png","assets/enemy/e_f2.png"], ["assets/enemy/e_f3.png","assets/enemy/e_f3.png"], ["assets/enemy/e_f4.png","assets/enemy/e_f4.png"], ["assets/enemy/e_f5.png","assets/enemy/e_f5.png"], ["assets/enemy/e_f6.png","assets/enemy/e_f6.png"], ["assets/starfield.png","assets/starfield.png"], ["assets/farback.gif","assets/farback.gif"]]), "path");
    this.appendDummyInput()
        .appendField("X")
        .appendField(new Blockly.FieldNumber(0), "X")
        .appendField("X")
        .appendField(new Blockly.FieldNumber(0), "Y");
    this.setColour(60);
 this.setTooltip("Create a new Sprite");
 this.setHelpUrl("");
  }
};