/* Takes in a string, and returns a component with a clickable link */
/* Links must be in the form of Text <a> link </a> Text */
export const getLinkParser = (str: string) => {
    const LENGTH_OF_START_TAG = 3;
    const LENGTH_OF_END_TAG = 4;
    let currentStr = str;
    const arr = [];
    
    while (currentStr) {
        const strLength = currentStr.length;
        const startingIndex = currentStr.indexOf("<a>");
        const endingIndex = currentStr.indexOf("</a>");
        if (startingIndex === -1 || endingIndex === -1) {
            arr.push(<span>{currentStr}</span>);
            break;
        } else {
            const stringBeforeLink = currentStr.substring(0, startingIndex);
            const displayUrl = currentStr.substring(startingIndex+LENGTH_OF_START_TAG, endingIndex);
            const restOfString = currentStr.substring(endingIndex+LENGTH_OF_END_TAG, strLength);
            
            let linkUrl = displayUrl;
            if (!linkUrl.toUpperCase().includes("HTTP://")) {
                linkUrl = `http://${displayUrl}`;
            }

            arr.push(<span>{stringBeforeLink}</span>);
            arr.push(<a href={linkUrl} target="__blank" rel="noopener noreferrer">{displayUrl}</a>);
            currentStr = restOfString;
        }
    }
    return <span>
        {arr.map((element) => element)}
    </span>
}