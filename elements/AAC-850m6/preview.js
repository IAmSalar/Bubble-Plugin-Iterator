function(instance, properties) {

    let previewDiv = $(`<div id="cpcontainer" style="display: flex; flex-direction: column; justify-content: center; align-content: center; overflow: hidden; scrollbar-width: none; -ms-overflow-style: none; border-radius: 4px; "> <div id="pluginpreview" style="width: ${properties.bubble.width}px;height:${properties.bubble.height}px;"> <img style="width: 100%; height: 100%;" src="https://s3.amazonaws.com/appforest_uf/f1612898835027x171242701368560670/iterator.svg"/> </div> </div>`)
    instance.canvas.append(previewDiv) 

}