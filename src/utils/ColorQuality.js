const ColorQuality = (language, qualityProject) => {
    let color = ''
    if (language === 'en') {
        switch (qualityProject) {
            case 'High risk':
                color = 'text-danger'
                break;
            case 'Risk':
                color = 'text-warning'
                break;
            case 'Medium':
                color = 'text-white-50'
                break;
            case 'Good':
                color = 'text-good'
                break;
            case 'Excellent':
                color = 'text-success'
                break;
            default: color = 'text-success'
        }
    }
    if (language === 'vn') {
        switch (qualityProject) {
            case 'Rủi ro cao':
                color = 'text-danger'
                break;
            case 'Rủi ro':
                color = 'text-warning'
                break;
            case 'Trung bình':
                color = 'text-white-50'
                break;
            case 'Tốt':
                color = 'text-good'
                break;
            case 'Tuyệt vời':
                color = 'text-success'
                break;
            default: color = 'text-success'
        }
    }
    if (language === 'jp') {
        switch (qualityProject) {
            case 'Rủi ro cao':
                color = 'text-danger'
                break;
            case '危険':
                color = 'text-warning'
                break;
            case '中くらい':
                color = 'text-white-50'
                break;
            case '良い':
                color = 'text-good'
                break;
            case 'Tuyệt vời':
                color = 'text-success'
                break;
            default: color = 'text-success'
        }
    }

    return color
}
export default ColorQuality;