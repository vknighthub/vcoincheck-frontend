import Good from "../jsx/components/vKnightHub/Tags/Good";
import Medium from "../jsx/components/vKnightHub/Tags/Medium";
import Risk from "../jsx/components/vKnightHub/Tags/Risk";
import Warning from "../jsx/components/vKnightHub/Tags/Warning";
import Excellent from './../jsx/components/vKnightHub/Tags/Excellent';

const ColorQuality = (language, qualityProject) => {
    let color = ''
    if (language === 'en') {
        switch (qualityProject) {
            case 'High risk':
                color = <Risk tag="High risk" />
                break;
            case 'Risk':
                color = <Warning tag="Risk" />
                break;
            case 'Medium':
                color = <Medium tag="Medium" />
                break;
            case 'Good':
                color = <Good tag="Good" />
                break;
            case 'Excellent':
                color = <Excellent tag="Excellent" />
                break;
            default: color = <Excellent tag="Excellent" />
        }
    }
    if (language === 'vn') {
        switch (qualityProject) {
            case 'Rủi ro cao':
                color = <Risk tag="Rủi ro cao" />
                break;
            case 'Rủi ro':
                color = <Warning tag="Rủi ro" />
                break;
            case 'Trung bình':
                color = <Medium tag="Trung bình" />
                break;
            case 'Tốt':
                color = <Good tag="Tốt" />
                break;
            case 'Tuyệt vời':
                color = <Excellent tag="Tuyệt vời" />
                break;
            default: color = <Excellent tag="Tuyệt vời" />
        }
    }
    if (language === 'jp') {
        switch (qualityProject) {
            case 'リスクが高い':
                color = <Risk tag="リスクが高い" />
                break;
            case '危険':
                color = <Warning tag="危険" />
                break;
            case '中くらい':
                color = <Medium tag="中くらい" />
                break;
            case '良い':
                color = <Good tag="良い" />
                break;
            case '優秀な':
                color = <Excellent tag="優秀な" />
                break;
            default: color = <Excellent tag="優秀な" />
        }
    }

    return color
}
export default ColorQuality;