export default function transformDataFunc(data, map) {  //  copiedData 
    return function(content) {
        if (data[Object.keys(data)[0]].length != 0) {
            for (let key in data) {
                data[key] = [];
            }
        }
        let arrOfData = content[Object.keys(content)[0]];
        arrOfData.forEach((item) => {
            map[Object.keys(map)[0]].forEach((item2) => {
                if (typeof(item2) != 'object') {
                    data[item2].push(item.hasOwnProperty(item2) ? item[item2] : '---');
                } else {
                    let nameOfComplexProp = Object.keys(item2)[0];
                    item2[Object.keys(item2)[0]].forEach((item2) => {
                        data[item2].push(item[nameOfComplexProp] == null ? null : item[nameOfComplexProp].hasOwnProperty(item2) ? item[nameOfComplexProp][item2] : null);
                    });
                } 
            });            
        });
        // for (let key in data) {
        //     copiedData[key] = data[key].map(item => {
        //         return item;
        //     });
        // }
    };
}