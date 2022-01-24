let isRenderAllow = false;

let renderRules = [
    { screen1: { "pagination": false } },
    { screen2: { "pagination": false, "datatable": true } },
    { ss3: { usercase1: { "so6901": true, "so6901btn": true } } },
    { ss5: { usercase1: { "s06902": true } } },
    { ss15: { usercase1: { "s06903": false , s06903btn: true},  } },
    { ss14: { usercase1: { "so6904": true , s06904btn: true} } },
    
    {
        supercomponent: {
            Usecase1: {
                "item1": false, "item2": false, "item3": true, "item4": true
            },
            Usecase2: {
                "item1": true, "item2": true, "item3": false
            }
        }
    },
    // {supercomponent2:{
    //     Usecase2:{
    //         "item1":true,"item2":true,"item3":false}
    //     }, 
    // }

]

function renderMe(sceenId, componentId) {
    console.log(sceenId);
    Object.keys(renderRules).forEach(key => {
        if ((renderRules)[key][sceenId]) {
            isRenderAllow = (renderRules)[key][sceenId][componentId];
            return;
        }
    });
    return isRenderAllow;
}

// function renderMe(sceenId: any, componentId: string): any {
//     console.log(sceenId);
//     Object.keys(renderRules).forEach(key => {
//         if ((renderRules as any)[key][sceenId]) {
//             isRenderAllow = (renderRules as any)[key][sceenId][componentId];
//             return;
//         }
//     });
//     return isRenderAllow;
// }

export default {
    renderMe,
}