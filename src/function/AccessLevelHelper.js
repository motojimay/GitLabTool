export default function handleAccessLevelByParam(param) {
    let accessLevelName;
    switch (param) {
        case 50:
            accessLevelName = "オーナー"
            break;
        case 40:
            accessLevelName = "メンテナー"
            break;
        case 30:
            accessLevelName = "開発者"
            break;
        case 20:
            accessLevelName = "レポーター"
            break;
        case 10:
            accessLevelName = "ゲスト"
            break;
        case 5:
            accessLevelName = "最小アクセス"
            break;
        case 0:
            accessLevelName = "アクセス不可"
            break;
        default:
            accessLevelName = "不明"
            break;
    }
    return accessLevelName;
}
