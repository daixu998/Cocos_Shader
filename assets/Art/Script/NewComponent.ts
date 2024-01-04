// // --[[ 
// //     截屏函数
// //     targetNode：截取父节点
// //     size：图片尺寸
// //     viewports:截取位置信息
// // --[[ 
// function GD.util_createScreenSprite(targetNode, size, viewports)
//     local winSize = size or cc.Director:getInstance():getWinSize()
//     local width = size ~= nil and size.width or winSize.width
//     local height = size ~= nil and size.height or winSize.height
//     local renderTexture = cc.RenderTexture:create(width, height, cc.TEXTURE2_D_PIXEL_FORMAT_RGB_A8888, gl.DEPTH24_STENCIL8_OES)
//     if viewports then
//         renderTexture:setVirtualViewport(viewports.rtBegin, viewports.fullRect, viewports.fullViewport)
//     end
//     renderTexture:begin()
//     if targetNode then
//         targetNode:visit()
//     else
//         cc.Director:getInstance():getRunningScene():visit()
//     end
//     renderTexture:endToLua()
//     renderTexture:retain()
//     local photoTexture = renderTexture:getSprite():getTexture()
//     local pSprite = cc.Sprite:createWithTexture(photoTexture)
//     pSprite:setFlippedY(true)
//     renderTexture:release()
//     return pSprite, renderTexture
// end
// function Code:screenShotFishToy()
//     local showNode = {}
//     local a = self:findChild("fishTank"):getParent():getChildren()
//     for i, v in ipairs(a) do
//         if v:isVisible() then
//             if v:getName() ~= "fishTank" and v:getName() ~= "gameBg" then
//                 v:setVisible(false)
//                 table.insert(showNode, v)
//             end
//         end
//     end
//     local origin = cc.Director:getInstance():getVisibleOrigin()
//     local visibleSize = cc.Director:getInstance():getVisibleSize()
//     local viewports = {}
//     viewports.rtBegin = cc.p(0, display.height)
//     viewports.fullRect = cc.rect(origin.x, origin.y, display.width, display.height)
//     viewports.fullViewport = cc.rect(origin.x, origin.y, display.width, display.height / 2)
//     local spr, rt = util_createScreenSprite(self:findChild("fishTank"):getParent(), cc.size(display.width, display.height / 2), viewports)
//     rt:saveToFile("FishManiaShopShare.png", true)
//     for i, v in ipairs(showNode) do
//         v:setVisible(true)
//     end
// end

// function util_createScreenSprite(targetNode: any, size: any, viewports: any) {
//     throw new Error("Function not implemented.")
// }


// function getInstance() {
//     throw new Error("Function not implemented.")
// }


// function getWinSize() {
//     throw new Error("Function not implemented.")
// }


// function create(width: any, height: any, TEXTURE2_D_PIXEL_FORMAT_RGB_A8888: any, DEPTH24_STENCIL8_OES: any) {
//     throw new Error("Function not implemented.")
// }


// function setVirtualViewport(rtBegin: any, fullRect: any, fullViewport: any) {
//     throw new Error("Function not implemented.")
// }


// function begin() {
//     throw new Error("Function not implemented.")
// }


// function visit() {
//     throw new Error("Function not implemented.")
// }


// function getRunningScene() {
//     throw new Error("Function not implemented.")
// }


// function endToLua() {
//     throw new Error("Function not implemented.")
// }


// function retain() {
//     throw new Error("Function not implemented.")
// }


// function getSprite() {
//     throw new Error("Function not implemented.")
// }


// function getTexture() {
//     throw new Error("Function not implemented.")
// }


// function createWithTexture(photoTexture: any) {
//     throw new Error("Function not implemented.")
// }


// function setFlippedY(arg0: boolean) {
//     throw new Error("Function not implemented.")
// }


// function release() {
//     throw new Error("Function not implemented.")
// }


// function findChild(arg0: string) {
//     throw new Error("Function not implemented.")
// }


// function getParent() {
//     throw new Error("Function not implemented.")
// }


// function getChildren() {
//     throw new Error("Function not implemented.")
// }


// function ipairs(a: any) {
//     throw new Error("Function not implemented.")
// }


// function isVisible() {
//     throw new Error("Function not implemented.")
// }


// function getName() {
//     throw new Error("Function not implemented.")
// }


// function setVisible(arg0: boolean) {
//     throw new Error("Function not implemented.")
// }


// function getVisibleOrigin() {
//     throw new Error("Function not implemented.")
// }


// function getVisibleSize() {
//     throw new Error("Function not implemented.")
// }


// function saveToFile(arg0: string, arg1: boolean) {
//     throw new Error("Function not implemented.")
// }
